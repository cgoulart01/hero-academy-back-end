import { NextFunction, Request, Response } from "express";
import { HttpException } from "../interfaces/HttpException";

export const errorMiddleware = (
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status: number = error.status ?? 500;
  const message: string = error.message ?? "Internal server error";

  res.status(status).json({
    status,
    message,
  });
};
