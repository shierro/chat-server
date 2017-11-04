function connection(socket) {
  console.log('client connected!', socket.id);
}

module.exports = {
  connection
};
