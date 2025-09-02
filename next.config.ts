import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // remotePatterns: [new URL('https://whitefeathersjewellery.com/assets/images/product/thumb/**')],
    remotePatterns: [new URL('http://localhost/white-feathers/assets/images/product/thumb/**')],
  },

};

export default nextConfig;
