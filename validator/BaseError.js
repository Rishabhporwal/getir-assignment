class BaseError extends Error {
  constructor(msg, code) {
    super(msg);

    Object.setPrototypeOf(this, new.target.prototype);
    this.code = code;
    this.msg = msg;
    Error.captureStackTrace(this);
  }
}

module.exports = BaseError;