const carouselItemsAmount = 16;
const url = 'http://127.0.0.1:3001/';

const { mostPopular, priceReduction } = fetch(`${url}${carouselItemsAmount}`)
  .then(response => response.json())
  .catch(err => console.log(err));
