const pick = require('lodash/pick')

const STATUS_CODE = {
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500
  };

  
class BaseError extends Error {
  constructor(message, metadata = {}) {
    super(message)
    this.metadata = metadata
  }
}

class NotFoundError extends BaseError {
  constructor(message, metadata) {
    super(message, metadata)
    this.httpStatusCode = STATUS_CODE.NOT_FOUND
  }
}

class BadRequestError extends BaseError {
  constructor(message, metadata) {
    super(message, metadata)
    this.httpStatusCode =  STATUS_CODE.BAD_REQUEST
  }
}

class UnauthorizedError extends BaseError {
  constructor(message, metadata) {
    super(message, metadata)
    this.httpStatusCode = STATUS_CODE.UNAUTHORIZED
  }
}

class InternalServerError extends BaseError {
  constructor(message, metadata) {
    super(message, metadata)
    this.httpStatusCode = STATUS_CODE.INTERNAL_SERVER_ERROR
  }
}

const errorHandler = function (err, req, res, next) {
  let error = err
  const fieldTarget = ['message', 'metadata', 'httpStatusCode']
  if (!err instanceof BaseError) {
    error = new InternalServerError('Ah ocurrido un error desconocido', err)
  }
  res.status(error.httpStatusCode).json(pick(error, fieldTarget))
}

module.exports = {
  BaseError,
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
  InternalServerError,
  errorHandler,
}