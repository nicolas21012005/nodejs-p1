const express = require('express');
const routerApi = require('./routes');
const {  logErrors,  errorHandler,  boomErrorHandler,} = require('./middlewares/error.handler');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const whitelist = ["http://127.0.0.1:5500", "http://localhost:3000"];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('acceso denegado'));
    }
  },
};
app.use(cors(options));

app.listen(port, () => {
  console.log('mi port' + port);
});

routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);
