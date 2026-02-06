import { Router } from "express";
import { z } from "zod";
import { supabase } from "../config/supabase";
import { authenticate } from "../middleware/auth";
import { requireRole } from "../middleware/requireRole";
import { validate } from "../middleware/validate";

const router = Router();

const ideaReviewSchema = z.object({
  params: z.object({
    id: z.string().uuid()
  }),
  body: z.object({
    status: z.enum(["approved", "rejected"]),
    notes: z.string().min(4).optional()
  })
});

router.get("/overview", authenticate, requireRole("admin"), async (_req, res, next) => {
  try {
    const [{ count: ideaCount }, { count: userCount }] = await Promise.all([
      supabase.from("ideas").select("id", { count: "exact", head: true }),
      supabase.from("profiles").select("id", { count: "exact", head: true })
    ]);

    return res.json({
      stats: {
        totalIdeas: ideaCount || 0,
        totalUsers: userCount || 0,
        revenue: 0
      }
    });
  } catch (error) {
    return next(error);
  }
});

router.get("/users", authenticate, requireRole("admin"), async (_req, res, next) => {
  try {
    const { data, error } = await supabase.from("profiles").select("*").order("created_at", { ascending: false });

    if (error) {
      return res.status(400).json({ message: error.message });
    }

    return res.json({ data });
  } catch (error) {
    return next(error);
  }
});

router.get("/ideas", authenticate, requireRole("admin"), async (_req, res, next) => {
  try {
    const { data, error } = await supabase.from("ideas").select("*").order("created_at", { ascending: false });

    if (error) {
      return res.status(400).json({ message: error.message });
    }

    return res.json({ data });
  } catch (error) {
    return next(error);
  }
});

router.patch("/ideas/:id/review", authenticate, requireRole("admin"), validate(ideaReviewSchema), async (req, res, next) => {
  try {
    const { id } = req.params;
    const payload = req.validated?.body as z.infer<typeof ideaReviewSchema>["body"];

    const { data, error } = await supabase
      .from("ideas")
      .update({ status: payload.status, review_notes: payload.notes })
      .eq("id", id)
      .select("*")
      .single();

    if (error) {
      return res.status(400).json({ message: error.message });
    }

    return res.json({ data });
  } catch (error) {
    return next(error);
  }
});

export default router;
