const fetch = require('node-fetch');

class Reference {
  async init(maxProducts, res) {
    this.maxProducts = maxProducts;
    this.mostPopular = await this.getMostPopular(res);
    this.priceReduction = await this.getPriceReduction(res);
  }

  async getReferences(res) {
    try {
      this.availableItems = await fetch('http://localhost:3000/available')
        .then(response => response.json());
      const mostPopular = this.filterFromAvailable(this.mostPopular);
      const priceReduction = this.filterFromAvailable(this.priceReduction);
      const result = { mostPopular, priceReduction }
      res.status(200).json(result);
    } catch {
      res.status(400).json('Error generating reference list');
    }
  }

  filterFromAvailable(array) {
    const result = [];
    let index = 0;
    while (result.length < this.maxProducts && index < array.length) {
      const item = this.availableItems.find(({ id }) => id === array[index]);
      if (item) { result.push(item); }
      index += 1;
    }
    return result;
  }

  mapReturn(arr) {
    return arr.map(({ recommendedProduct }) => recommendedProduct.id);
  }

  getMostPopular(res) {
    return fetch('https://wishlist.neemu.com/onsite/impulse-core/ranking/mostpopular.json')
      .then(response => response.json())
      .then(response => this.mapReturn(response))
      .catch(error => { throw new Error(error) });
  }

  getPriceReduction(res) {
    return fetch('https://wishlist.neemu.com/onsite/impulse-core/ranking/pricereduction.json')
      .then(response => response.json())
      .then(response => this.mapReturn(response))
      .catch(error => { throw new Error(error) });
  }
}

module.exports = new Reference;
