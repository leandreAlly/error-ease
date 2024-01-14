import { StatusCode } from '../utils/status-code';
import { CustomError } from './custom-error';

export class NotAuthorizedError extends CustomError {
  statusCode = StatusCode.unauthorized;

  constructor(public message: string = 'Not authorized') {
    super(message);

    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
