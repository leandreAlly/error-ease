import { StatusCode } from '../utils/status-code';
import { CustomError } from './custom-error';

export class BadRequestError extends CustomError {
  statusCode = StatusCode.badRequest;

  constructor(public message: string) {
    super(message);

    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
