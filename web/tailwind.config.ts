import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#05060a",
        aurora: "#6c5ce7",
        neon: "#00f5d4"
      },
      boxShadow: {
        glow: "0 0 40px rgba(108, 92, 231, 0.45)",
        card: "0 25px 60px rgba(0, 0, 0, 0.35)"
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(circle at 20% 20%, rgba(108, 92, 231, 0.35), transparent 60%), radial-gradient(circle at 80% 0%, rgba(0, 245, 212, 0.2), transparent 50%)"
      }
    }
  },
  plugins: []
};

export default config;
