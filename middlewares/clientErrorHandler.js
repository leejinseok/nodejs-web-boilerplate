const TAG = '[CLIENT_ERROR_HANDLER]';

module.exports = (err, req, res, next) => {
  if (req.xhr) { // if xhr request
    res.status(500).send({ error: 'Something failed!' });
    return;
  }

  next(err);
}