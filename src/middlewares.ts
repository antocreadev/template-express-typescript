import { NextFunction, Request, Response } from "express-serve-static-core";
import { AnyZodObject, ZodError } from "zod";

export function notFound(req: Request, res: Response, next: NextFunction) {
  res.status(404);
  const error = new Error(`🔍 - Not Found ${req.originalUrl}`);
  next(error);
}

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? "🙈" : err.stack,
  });
}

export function zodErrorHandler(
  err: ZodError | Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  // Check if the error is a ZodError instance
  if (err instanceof ZodError) {
    const formattedErrors = err.errors.map((e) => ({
      path: e.path.join("."), // Join the path array to form a string representation
      message: e.message, // The error message
    }));

    return res.status(400).json({
      message: "Validation error",
      errors: formattedErrors,
    });
  }

  // Pass to the next error handler if it's not a ZodError
  next(err);
}

export function validate(
  schema: AnyZodObject,
  source: "body" | "query" | "params"
) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req[source]);
      next();
    } catch (error) {
      res.status(400);
      next(error);
    }
  };
}