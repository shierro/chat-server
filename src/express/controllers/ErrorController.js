function generalError(err, req, res, next) {
  const error = {
    status: err.status || 500,
    message: err.message
  };

  res.status(error.status).json(error);
}

module.exports = {
  generalError
};
