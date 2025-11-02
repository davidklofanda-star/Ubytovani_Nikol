/** @type {import('next').NextConfig} */
const nextConfig = {
  // DŮLEŽITÉ pro statický export:
  output: 'export',
  trailingSlash: true,

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Povolit build i při type-errors (v pořádku, pokud to tak chceš)
    ignoreBuildErrors: true,
  },
  images: { unoptimized: true },

  // (Next má oficiálně devIndicators jako objekt, ale když ti to takto funguje, ponech.)
  devIndicators: false,

  // Vlastní (nevadí)
  allowedDevOrigins: [
    "*.macaly.dev",
    "*.macaly.app",
    "*.macaly-app.com",
    "*.macaly-user-data.dev",
  ],

  experimental: {
    preloadEntriesOnStart: false,
    webpackMemoryOptimizations: true,
  },

  webpack: (config, { dev }) => {
    if (dev) {
      config.module.rules.unshift({
        test: /\.(jsx|tsx)$/,
        exclude: /node_modules/,
        use: [{ loader: "macaly-tagger" }],
        enforce: "pre",
      });
    }
    return config;
  },
};

module.exports = nextConfig;
