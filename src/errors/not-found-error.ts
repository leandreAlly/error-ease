import { StatusCode } from '../utils/status-code';
import { CustomError } from './custom-error';

export class NotFoundError extends CustomError {
  statusCode = StatusCode.notFound;

  constructor(public message: string = 'Resources not found') {
    super(message);

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
