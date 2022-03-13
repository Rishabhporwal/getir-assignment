const BaseError = require("./BaseError");
const { httpStatusCodes } = require("./httpStatusCodes");

class FieldError extends BaseError {
  constructor(msg, code = httpStatusCodes.BAD_REQUEST) {
    super(msg, code);
  }
}

module.exports = FieldError;
