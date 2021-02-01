const Catalog = require('../models/Catalog');

module.exports = app => {
  app.get('/', (req, res) => res.send('Catalog API online'));

  app.get('/complete/:id',
    (req, res) => Catalog.showComplete(req.params.id, res));

  app.get('/compact/:id',
    (req, res) => Catalog.showCompact(req.params.id, res));

  app.get('/available',
    (req, res) => Catalog.showAvailable(res));
}