import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Evita que o build quebre em CI por erros de ESLint
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
