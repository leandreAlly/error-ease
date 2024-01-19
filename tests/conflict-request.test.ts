import { describe, it, expect } from 'vitest';
import { ConflictRequestError } from '..';
import { StatusCode } from '../src/utils/status-code';

describe('ConflictRequestError', () => {
  it('should correctly set message and status code', () => {
    const message = 'Test error message';
    const error = new ConflictRequestError(message);

    expect(error.message).toBe(message);
    expect(error.statusCode).toBe(StatusCode.conflictRequest);
  });

  it('should correctly serialize errors', () => {
    const message = 'Test error message';
    const error = new ConflictRequestError(message);

    expect(error.serializeErrors()).toEqual([{ message }]);
  });
});
