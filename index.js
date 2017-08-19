const app = "I don't do much."

const products = [
  { name: 'Head & Shoulders Shampoo', price: 4.99, discount: .6 },
  { name: 'Twinkies', price: 7.99, discount: .45 },
  { name: 'Oreos', price: 6.49, discount: .8 },
  { name: 'Jasmine-scented bath pearls', price: 13.99, discount: .7 },
];

function getTotalAmountForProducts(products, callback) {
  let totalPrice = 0;

  products.forEach(product => {
    totalPrice = callback(totalPrice, product);
  });
  return totalPrice;
}

function callback(totalPrice, product) {
  if (product.discount >= .5) {
    return totalPrice + product.price;
  }
  return totalPrice;
}

function reduce(collection, callback, initialValue) {
  let result = initialValue;

  collection.forEach((product, index) => {
    result = callback(result, product, index, collection);
  });

  return result;
}
