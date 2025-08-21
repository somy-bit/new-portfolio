import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
        remotePatterns: [
          {
            protocol: 'https', // or 'http'
            hostname: 'cdn.sanity.io', // Replace with your domain
            port: '', // Leave empty if not using a specific port
            pathname: '**', // Allows any path within that domain
          },
        ]
      }
};

export default nextConfig;
