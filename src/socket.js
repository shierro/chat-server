const Redis = require('ioredis');
const adapter = require('socket.io-redis');
const io = require('socket.io');
const http = require('http');

const {
  connection
} = require('./socketio/controllers/user');

module.exports = (app) => {
  const server = http.createServer(app);
  const ioServer = io(server);

  const cluster = new Redis.Cluster([
    {
      port: 6379,
      host: '127.0.0.1'
    }
  ], {
    retryDelayOnFailover: '100'
  });

  ioServer.adapter(adapter({ pubClient: cluster, subClient: cluster }));
  ioServer.on('connection', connection);

  return server;
};
