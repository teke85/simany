import type { NextConfig } from "next";

const nextConfig: NextConfig = {
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'fakeimg.pl',
    },
    {
      protocol: 'https',
      hostname: 'media.istockphoto.com',
    }
  ],
},
};

export default nextConfig;
