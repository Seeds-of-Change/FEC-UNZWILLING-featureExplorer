const faker = require('faker');
const database = require('./index.js');

// faker added functionality
faker.random.array = function randomArray(schema, min = 1, max) {
  if (schema === 'number') {
    return Array.from({ length: faker.random.number({ min, max }) })
      .map(() => faker.random.number({ min: 1, max: 100 }));
  }

  if (schema === 'features') {
    return Array.from({ length: faker.random.number({ min, max }) })
      .map(() => ({
        heading: faker.commerce.productAdjective(),
        description: faker.lorem.paragraph(),
        posX: faker.random.number({ min: 0, max: 100 }),
        posY: faker.random.number({ min: 0, max: 100 }),
      }));
  }
  return null;
};

// generate seed data
const seedDB = () => {
  const products = [];
  console.log('seeding started');
  for (let i = 1; i <= 3; i += 1) {
    const product = {
      id: i,
      name: faker.commerce.productName(),
      feature_header: faker.lorem.sentence(),
      product_features: {
        header: faker.lorem.sentence(),
        features: faker.random.array('features', 3, 7),
      },
      related_products: faker.random.array('number', 4, 10),
      image: `${i}.jpg`,
      image_mini: `${i}_mini.jpg`,
      price: faker.random.number({ min: 5, max: 200, precision: 0.01 }),
      rating: faker.random.number({ min: 1, max: 5, precision: 0.01 }),
    };

    products.push(product);
  }
  database.save(products)
    .then(() => {
      console.log('seed complete');
      database.db.close();
    });
};

seedDB();
