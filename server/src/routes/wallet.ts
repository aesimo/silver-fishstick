import { Router } from "express";
import { z } from "zod";
import { authenticate } from "../middleware/auth";
import { validate } from "../middleware/validate";

const router = Router();

const payoutSchema = z.object({
  body: z.object({
    amount: z.number().positive(),
    method: z.enum(["bank", "upi"]),
    destination: z.string().min(4)
  })
});

router.get("/balance", authenticate, (_req, res) => {
  return res.json({
    available: 0,
    pending: 0,
    currency: "INR"
  });
});

router.get("/transactions", authenticate, (_req, res) => {
  return res.json({
    data: [],
    message: "Wallet transaction history will appear here."
  });
});

router.post("/withdraw", authenticate, validate(payoutSchema), (req, res) => {
  const payload = req.validated?.body as z.infer<typeof payoutSchema>["body"];

  return res.status(202).json({
    message: "Withdrawal request queued for review.",
    request: payload
  });
});

router.post("/webhooks/razorpay", (req, res) => {
  return res.status(200).json({
    message: "Razorpay webhook received. Signature verification to be implemented."
  });
});

router.post("/webhooks/cashfree", (req, res) => {
  return res.status(200).json({
    message: "Cashfree webhook received. Signature verification to be implemented."
  });
});

export default router;
