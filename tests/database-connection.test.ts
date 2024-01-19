import { describe, it, expect } from 'vitest';
import { DatabaseConnectionError } from '..';
import { StatusCode } from '../src/utils/status-code';

describe('DatabaseConnectionError', () => {
  it('should correctly set status code and reason', () => {
    const error = new DatabaseConnectionError();

    expect(error.statusCode).toBe(StatusCode.internalError);
    expect(error.serializeErrors()).toEqual([{ message: 'Error connecting to database' }]);
  });
});
