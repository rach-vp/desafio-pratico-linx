
const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://rach-vp:UDtryFi7w4l2zScE@cluster0.4fnf5.mongodb.net/e-commerce?retryWrites=true&w=majority";

module.exports = new MongoClient(uri, { useUnifiedTopology: true });
