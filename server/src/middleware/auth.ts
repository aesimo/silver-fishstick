import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { env } from "../config/env";

export type Role = "user" | "moderator" | "admin";

export interface AuthUser {
  id: string;
  email?: string;
  role: Role;
}

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const header = req.headers.authorization;
  if (!header?.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Missing authorization token" });
  }

  const token = header.replace("Bearer ", "");

  try {
    const decoded = jwt.verify(token, env.JWT_SECRET) as jwt.JwtPayload;
    req.user = {
      id: decoded.sub as string,
      email: decoded.email as string | undefined,
      role: (decoded.role as Role) || "user"
    };
    return next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
