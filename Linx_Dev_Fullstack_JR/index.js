const customExpress = require('./config/customExpress');

const app = customExpress();
const port = 3000;
app.listen(port, () => console.log(`Server listening port ${port}`));
