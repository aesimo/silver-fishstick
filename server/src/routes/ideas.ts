import { Router } from "express";
import { z } from "zod";
import { supabase } from "../config/supabase";
import { authenticate } from "../middleware/auth";
import { validate } from "../middleware/validate";

const router = Router();

const createIdeaSchema = z.object({
  body: z.object({
    title: z.string().min(3),
    summary: z.string().min(10),
    description: z.string().min(10).optional(),
    category: z.string().min(2).optional(),
    tags: z.array(z.string().min(2)).optional()
  })
});

const updateIdeaSchema = z.object({
  params: z.object({
    id: z.string().uuid()
  }),
  body: z.object({
    title: z.string().min(3).optional(),
    summary: z.string().min(10).optional(),
    description: z.string().min(10).optional(),
    category: z.string().min(2).optional(),
    tags: z.array(z.string().min(2)).optional(),
    status: z.enum(["draft", "submitted", "approved", "rejected", "sold"]).optional()
  })
});

router.get("/", async (_req, res, next) => {
  try {
    const { data, error } = await supabase
      .from("ideas")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(50);

    if (error) {
      return res.status(400).json({ message: error.message });
    }

    return res.json({ data });
  } catch (error) {
    return next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase.from("ideas").select("*").eq("id", id).single();

    if (error) {
      return res.status(404).json({ message: "Idea not found" });
    }

    return res.json({ data });
  } catch (error) {
    return next(error);
  }
});

router.post("/", authenticate, validate(createIdeaSchema), async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const payload = req.validated?.body as z.infer<typeof createIdeaSchema>["body"];

    const { data, error } = await supabase.from("ideas").insert({
      title: payload.title,
      summary: payload.summary,
      description: payload.description,
      category: payload.category,
      tags: payload.tags,
      owner_id: req.user.id,
      status: "draft"
    }).select("*").single();

    if (error) {
      return res.status(400).json({ message: error.message });
    }

    return res.status(201).json({ data });
  } catch (error) {
    return next(error);
  }
});

router.patch("/:id", authenticate, validate(updateIdeaSchema), async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { id } = req.params;
    const payload = req.validated?.body as z.infer<typeof updateIdeaSchema>["body"];

    const { data, error } = await supabase
      .from("ideas")
      .update({
        ...payload,
        updated_at: new Date().toISOString()
      })
      .eq("id", id)
      .eq("owner_id", req.user.id)
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

router.post("/:id/submit", authenticate, async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { id } = req.params;

    const { data, error } = await supabase
      .from("ideas")
      .update({ status: "submitted", submitted_at: new Date().toISOString() })
      .eq("id", id)
      .eq("owner_id", req.user.id)
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
