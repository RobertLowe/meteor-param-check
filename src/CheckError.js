export default class CheckError extends Error {
  constructor(message) {
    super(message);

    this.name = this.constructor.name;

    // Ensure we get a proper stack trace in most Javascript environments
    if (Error.captureStackTrace) {
      // V8 environments (Chrome and Node.js)
      Error.captureStackTrace(this, this.constructor);
    } else {
      // Borrow the .stack property of a native Error object.
      this.stack = new Error().stack;
    }

    this.message = `Match error: ${message}`;
  }
}
