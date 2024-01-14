import { describe, it, expect, vi } from 'vitest';
import { asyncWrapper } from '../../src';
import { Request, Response } from 'express';
import { BadRequestError } from '../../src';

describe('asyncWrapper', () => {
  it('should call next with error if routeHandler throws an error', async () => {
    const mockReq = {} as Request;
    const mockRes = {} as Response;
    const mockNext = vi.fn();

    const routeHandler = async () => {
      throw new BadRequestError('Test error');
    };

    const wrappedRouteHandler = asyncWrapper(routeHandler);

    await wrappedRouteHandler(mockReq, mockRes, mockNext);

    expect(mockNext).toHaveBeenCalledWith(expect.any(BadRequestError));
  });

  it('should not call next with error if routeHandler does not throw an error', async () => {
    const mockReq = {} as Request;
    const mockRes = {} as Response;
    const mockNext = vi.fn();

    const routeHandler = async () => {};

    const wrappedRouteHandler = asyncWrapper(routeHandler);

    await wrappedRouteHandler(mockReq, mockRes, mockNext);

    expect(mockNext).not.toHaveBeenCalled();
  });
});
