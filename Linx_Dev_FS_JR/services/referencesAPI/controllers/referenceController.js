const Reference = require('../models/reference');

module.exports = app => {
  app.get('/:maxProducts', async (req, res) => {
    const maxProducts =
    parseInt(req.params.maxProducts) < 10 ? 10 : parseInt(req.params.maxProducts);
    await Reference.init(maxProducts, res);
    Reference.getReferences(res);
  });
}