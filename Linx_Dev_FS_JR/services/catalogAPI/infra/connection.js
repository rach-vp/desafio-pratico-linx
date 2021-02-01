
const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";

module.exports = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 10000
});
