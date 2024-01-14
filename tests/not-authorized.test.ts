import { describe, it, expect } from 'vitest';
import { NotAuthorizedError } from '../src';
import { StatusCode } from '../src/utils/status-code';

describe('NotAuthorizedError', () => {
  it('should correctly set message and status code', () => {
    const message = 'Test error message';
    const error = new NotAuthorizedError(message);

    expect(error.message).toBe(message);
    expect(error.statusCode).toBe(StatusCode.unauthorized);
  });

  it('should correctly serialize errors', () => {
    const message = 'Test error message';
    const error = new NotAuthorizedError(message);

    expect(error.serializeErrors()).toEqual([{ message }]);
  });
});
