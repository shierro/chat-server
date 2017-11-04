const auth = require('http-auth');

module.exports = auth.basic(
  { realm: 'Monitor Area' },
  (user, pass, callback) => {
    callback(user === 'username' && pass === 'password');
  });
