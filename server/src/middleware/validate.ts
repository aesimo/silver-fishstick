import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

export const validate = (schema: AnyZodObject) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse({
      body: req.body,
      params: req.params,
      query: req.query
    });

    if (!result.success) {
      return res.status(400).json({
        message: "Validation failed",
        errors: result.error.flatten()
      });
    }

    req.validated = result.data;
    return next();
  };
};
