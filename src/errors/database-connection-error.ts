import { StatusCode } from '../utils/status-code';
import { CustomError } from './custom-error';

export class DatabaseConnectionError extends CustomError {
  readonly statusCode = StatusCode.internalError;
  private reason = 'Error connecting to database';

  constructor() {
    super('Error connecting to db');

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors(): { message: string }[] {
    return [{ message: this.reason }];
  }
}
