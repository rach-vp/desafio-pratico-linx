const customExpress = require('./config/customExpress');

const app = customExpress();

port = 3001;
app.listen(port, () => console.log(`--> Reference API listening port ${port} <--`));
