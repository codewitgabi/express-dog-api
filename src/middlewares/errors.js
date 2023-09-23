export class APIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.message = message;
    this.statusCode = statusCode || 500;
  }
}

