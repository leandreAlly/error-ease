import { Request, Response, NextFunction, RequestHandler } from 'express';

export function asyncWrapper(routeHandler: RequestHandler): RequestHandler {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await routeHandler(req, res, next);
    } catch (err) {
      next(err);
    }
  };
}
