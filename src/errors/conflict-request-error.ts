import { StatusCode } from '../utils/status-code';
import { CustomError } from './custom-error';

export class ConflictRequestError extends CustomError {
  statusCode = StatusCode.conflictRequest;

  constructor(public message: string) {
    super(message);
    Object.setPrototypeOf(this, ConflictRequestError.prototype);
  }

  serializeErrors(): { message: string }[] {
    return [{ message: this.message }];
  }
}
