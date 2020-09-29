const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/unZWILLING', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Mongoose is connected to server!');
});

const featureSchema = mongoose.Schema(
  {
    heading: String,
    description: String,
    posX: Number,
    posY: Number,
  },
);

const productSchema = mongoose.Schema({
  id: Number,
  name: String,
  product_features:
    {
      header: String,
      features: [featureSchema],
    },
  related_products: Array,
  image: String,
  image_mini: String,
  price: Number,
  rating: Number,
});

const Product = mongoose.model('Product', productSchema);

const save = (products) => {
  const savePromises = [];

  products.forEach((product) => {
    const filter = { id: product.id };

    savePromises.push(
      Product.findOneAndUpdate(filter, product, {
        new: true,
        upsert: true,
      })
        .catch((err) => {
          console.error(err);
        }),
    );
  });

  return Promise.all(savePromises);
};

const fetch = (id) => Product.findOne({ id });

module.exports = {
  save,
  fetch,
  db,
};
