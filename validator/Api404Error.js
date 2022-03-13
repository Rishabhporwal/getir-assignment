const { httpStatusCodes } = require("./httpStatusCodes");
const BaseError = require("./BaseError");

class Api404Error extends BaseError {
  constructor(msg, code = httpStatusCodes.NOT_FOUND) {
    super(msg, code);
  }
}

module.exports = Api404Error;
