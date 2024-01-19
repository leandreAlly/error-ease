import { describe, it, expect } from 'vitest';
import { BadRequestError } from '..';
import { StatusCode } from '../src/utils/status-code';

describe('BadRequestError', () => {
  it('should correctly set message and status code', () => {
    const message = 'Test error message';
    const error = new BadRequestError(message);

    expect(error.message).toBe(message);
    expect(error.statusCode).toBe(StatusCode.badRequest);
  });

  it('should correctly serialize errors', () => {
    const message = 'Test error message';
    const error = new BadRequestError(message);

    expect(error.serializeErrors()).toEqual([{ message }]);
  });
});
