const Database = require('../infra/database');

class Catalog {
  async showComplete(id, res) {
    const query = { id };
    await Database.collection.findOne(query)
      .then(
        result => res.status(200).json(result),
        )
      .catch(error => res.status(400).json(error));
  }

  async showCompact(id, res) {
    const query = { id };
    const options = { projection: { _id: 0, name: 1, price: 1, status: 1, categories: 1 } };
    await Database.collection.findOne(query, options)
    .then(
      result => res.status(200).json(result),
      )
      .catch(error => res.status(400).json(error));
    }

  async showAvailable(res) {
    try {
      const availableList = await Database.collection.find({ status: 'AVAILABLE' }).toArray();
      res.status(200).json(availableList);
    } catch (mongoError) {
      res.status(400).json(mongoError.message)
    }
  }
}

module.exports = new Catalog;
