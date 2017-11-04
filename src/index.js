require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');

const routes = require('./routes');
const logger = require('./utils/logger');

const app = express();
const server = require('./socket')(app);

app.use(compression());
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routes(app);

server.listen(process.env.PORT, () => {
  logger.info(`Env: ${process.env.NODE_ENV} - Started on port ${process.env.PORT}`);
});

module.exports = app;
