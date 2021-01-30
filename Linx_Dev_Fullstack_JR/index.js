const customExpress = require('./config/customExpress');
const client = require('./infra/connection');

async function run() {
  try {
    await client.connect(
      (error, client) => error ? console.log(error) : console.log(`Successfully connected to DB ${client.s.options.dbName}`)
    );

    // const database = client.db('e-commerce');
    // const collection = database.collection('catalog');
    const app = customExpress();
    const port = 3000;
    app.listen(port, () => console.log(`Server listening port ${port}`));
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

