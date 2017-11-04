const express = require('express');
const httpAuth = require('http-auth');

const ErrorController = require('./express/controllers/ErrorController');
const basicAuth = require('./express/middlewares/BasicAuth');
const statusMonitor = require('express-status-monitor')({ path: '' });

module.exports = (app) => {
  const router = express.Router();
  /* APIs */
  router.get('/', (req, res) => {
    res.json({
      Message: 'Microservice API',
    });
  });

  app.use('/api', router);
  app.use(ErrorController.generalError);

  // Status page
  app.use(statusMonitor.middleware);
  app.get('/status', httpAuth.connect(basicAuth), statusMonitor.pageRoute);
};
