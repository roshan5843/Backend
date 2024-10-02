class ApiErrors extends Error {
  constructor(
    statusCode,
    message = "Something went wrong",
    errors = [],
    statch = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (statch) {
      this.statch = statch;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiErrors };
