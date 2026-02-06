import { AuthUser } from "../middleware/auth";

declare module "express-serve-static-core" {
  interface Request {
    user?: AuthUser;
    validated?: {
      body?: unknown;
      params?: unknown;
      query?: unknown;
    };
  }
}
