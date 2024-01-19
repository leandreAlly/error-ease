import { describe, it, expect, vi } from 'vitest';
import { Request, Response } from 'express';
import { errorHandler } from '../..';
import { StatusCode } from '../../src/utils/status-code';

describe('errorHandler', () => {
  it('should handle generic Error correctly', () => {
    const mockReq = {} as Request;
    const mockRes = {
      status: vi.fn().mockReturnThis(),
      send: vi.fn(),
    } as unknown as Response;
    const error = new Error('Test error');

    errorHandler(error, mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(StatusCode.badRequest);
    expect(mockRes.send).toHaveBeenCalledWith({ errors: [{ message: 'Something went wrong' }] });
  });
});
