module.exports = app => {
  app.get('/', (req, res) => res.send('Catalog API online'));
}