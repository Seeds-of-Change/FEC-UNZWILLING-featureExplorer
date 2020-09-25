const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/unZWILLING', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

const db = mongoose.connection;

db.on('error',
  console.error.bind(console, 'MongoDB connection error:')
);
db.once('open', function() {
  console.log("🎊 Mongoose is connected to server 🎊")
});

let productSchema = mongoose.Schema({
  id: Number,
  name: String,
  features: {header: String, features: Array},
  related_products: Array,
  image: String
});

let Product = mongoose.model('Product', productSchema);


let save = (products) => {

  var savePromises = [];

  products.forEach(product => {
    let filter = {id: product.id};

    savePromises.push(
      Product.findOneAndUpdate(filter, product, {
        new: true,
        upsert: true
      })
      .catch(err=>{
        console.error(err);
      })
    );
  })

  return Promise.all(savePromises);

}

let fetch = () => {
  return Product.find().sort('id').limit(25);
}


module.exports = {
  save,
  fetch,
  db
};