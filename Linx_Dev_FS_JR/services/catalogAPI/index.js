const customExpress = require('./config/customExpress');
const client = require('./infra/connection');
const Database = require('./infra/database');

async function run() {
  try {
    await client.connect((error, client) => {
      if (error) { console.log(error); }
      else {
        console.log(`--> Successfully connected to ${client.s.url} <--`);
        Database.init(client);

        const app = customExpress();
        const port = 3000;
        app.listen(port, () => console.log(`--> Catalog API listening port ${port} <--`));
      }
    });
  } finally {
    console.log('Failed to connect to MongoDB');
  }
}

run().catch(console.dir);
