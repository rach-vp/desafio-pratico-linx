class Database {
  init(client) {
    this.client = client;
    this.database = this.client.db('e-commerce');
    this.collection = this.database.collection('catalog');
  }
}

module.exports = new Database;
