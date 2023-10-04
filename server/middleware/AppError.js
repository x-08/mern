const logger = require("../services/logger.service");
const errorOrMsg = require("../utils/errorOrMsg");

const AppError = (err, req, res, next) => {

  logger.error(
    `${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`,
  );

  const status =
    err.statusCode || res.statusCode || res.statusCode || 500; //server error

  res.status(status).json(errorOrMsg(status, err.message));
};

module.exports = { AppError };
