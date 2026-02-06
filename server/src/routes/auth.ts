import { Router } from "express";
import jwt from "jsonwebtoken";
import { z } from "zod";
import { env } from "../config/env";
import { supabase } from "../config/supabase";
import { authenticate } from "../middleware/auth";
import { validate } from "../middleware/validate";

const router = Router();

const registerSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(8),
    fullName: z.string().min(2)
  })
});

const loginSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(8)
  })
});

const createToken = (payload: { sub: string; email: string; role?: string }) => {
  return jwt.sign(payload, env.JWT_SECRET, { expiresIn: env.JWT_EXPIRES_IN });
};

router.post("/register", validate(registerSchema), async (req, res, next) => {
  try {
    const { email, password, fullName } = req.validated?.body as z.infer<typeof registerSchema>["body"];

    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: {
        full_name: fullName,
        role: "user"
      }
    });

    if (error || !data.user) {
      return res.status(400).json({ message: error?.message || "Unable to register" });
    }

    const token = createToken({ sub: data.user.id, email, role: "user" });

    return res.status(201).json({
      message: "Registration successful",
      token,
      user: {
        id: data.user.id,
        email,
        fullName,
        role: "user"
      }
    });
  } catch (error) {
    return next(error);
  }
});

router.post("/login", validate(loginSchema), async (req, res, next) => {
  try {
    const { email, password } = req.validated?.body as z.infer<typeof loginSchema>["body"];

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error || !data.user) {
      return res.status(401).json({ message: error?.message || "Invalid credentials" });
    }

    const role = (data.user.user_metadata?.role as string) || "user";
    const token = createToken({ sub: data.user.id, email, role });

    return res.json({
      message: "Login successful",
      token,
      user: {
        id: data.user.id,
        email,
        role
      }
    });
  } catch (error) {
    return next(error);
  }
});

router.get("/profile", authenticate, async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { data, error } = await supabase.auth.admin.getUserById(req.user.id);

    if (error || !data.user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.json({
      user: {
        id: data.user.id,
        email: data.user.email,
        role: data.user.user_metadata?.role || "user",
        fullName: data.user.user_metadata?.full_name || null
      }
    });
  } catch (error) {
    return next(error);
  }
});

export default router;
