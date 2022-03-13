const BaseError = require("./BaseError");
const { httpStatusCodes } = require("./httpStatusCodes");

class FieldError extends BaseError {
  constructor(
    name,
    statusCode = httpStatusCodes.BAD_REQUEST,
    description = "Value of field cannot be empty.",
    isOperational = true
  ) {
    super(name, statusCode, isOperational, description);
  }
}

module.exports = FieldError;
