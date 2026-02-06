import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { env } from "./config/env";
import authRoutes from "./routes/auth";
import ideaRoutes from "./routes/ideas";
import walletRoutes from "./routes/wallet";
import adminRoutes from "./routes/admin";
import { errorHandler } from "./middleware/errorHandler";

const app = express();

app.use(cors({ origin: env.WEB_ORIGIN, credentials: true }));
app.use(helmet());
app.use(express.json({ limit: "1mb" }));
app.use(morgan(env.NODE_ENV === "production" ? "combined" : "dev"));

app.get("/health", (_req, res) => {
  res.json({ status: "ok", environment: env.NODE_ENV });
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/ideas", ideaRoutes);
app.use("/api/v1/wallet", walletRoutes);
app.use("/api/v1/admin", adminRoutes);

app.use(errorHandler);

app.listen(env.PORT, () => {
  console.log(`IdeaMart API running on port ${env.PORT}`);
});
