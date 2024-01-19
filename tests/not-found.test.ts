import { describe, it, expect } from 'vitest';
import { NotFoundError } from '..';
import { StatusCode } from '../src/utils/status-code';

describe('NotFoundError', () => {
  it('should correctly set message and status code', () => {
    const message = 'Test error message';
    const error = new NotFoundError(message);

    expect(error.message).toBe(message);
    expect(error.statusCode).toBe(StatusCode.notFound);
  });

  it('should correctly serialize errors', () => {
    const message = 'Test error message';
    const error = new NotFoundError(message);

    expect(error.serializeErrors()).toEqual([{ message }]);
  });

  it('should use default message if none is provided', () => {
    const error = new NotFoundError();

    expect(error.message).toBe('Resources not found');
    expect(error.serializeErrors()).toEqual([{ message: 'Resources not found' }]);
  });
});
