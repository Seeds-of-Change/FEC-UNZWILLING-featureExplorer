var faker = require('faker');
var db = require('./index.js');

//faker added functionality
faker.random.array = function randomArray(schema, min = 1, max){
  max = max || min

  if(schema === 'number') {
    return Array.from({ length: faker.random.number({min, max})}).map(() => {
      return faker.random.number({'min':1, 'max': 100 });
    })
  }

  return Array.from({ length: faker.random.number({ min, max }) }).map(() => Object.keys(schema).reduce((entity, key) => {
    entity[key] = faker.fake(schema[key])
    return entity
  }, {}))
};

var featureSchema = {
  heading: faker.commerce.productAdjective(),
  description: faker.lorem.paragraph()
};


//generate seed data
var seedDB = function(){
  var products = [];
  console.log('seed func is running');
  for (var i = 1; i <= 100; i++) {
    const test = {
      id: i,
      name: faker.commerce.productName(),
      features: {
        header: faker.lorem.sentence(),
        features: faker.random.array(featureSchema, 3, 7)
      },
      related_products: faker.random.array('number', 4, 10),
      image: `${i}.jpg`
    };
    products.push(test);

  }
  db.save(products);
};

seedDB();
