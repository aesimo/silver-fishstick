import { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  const status = typeof err.status === "number" ? err.status : 500;

  return res.status(status).json({
    message: err.message || "Unexpected server error",
    details: err.details || null
  });
};
