import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
      },
      {
        protocol: 'https',
        hostname: 'acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'worldwidemachinery.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'highways.today',
      },
      {
        protocol: 'https',
        hostname: 'desimachines.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.buttercms.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.britannica.com',
      },
      {
        protocol: 'https',
        hostname: 'a-us.storyblok.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'heavyequipmenttraining.com',
      },
      {
        protocol: 'https',
        hostname: 'aspenequipment.com',
      },
      {
        protocol: 'https',
        hostname: 'mazzellacompanies.com',
      },
      {
        protocol: 'https',
        hostname: 'www.easternplanthire.com',
      },
      {
        protocol: 'https',
        hostname: 'blog.iseekplant.com.au',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
      {
        protocol: 'https',
        hostname: 'www.my-equipment.com',
      },
      {
        protocol: 'https',
        hostname: 'elebia.com',
      },
      {
        protocol: 'https',
        hostname: 'fivestarequipment.com',
      },
      {
        protocol: 'https',
        hostname: 'c8.alamy.com',
      },
      {
        protocol: 'https',
        hostname: 'www.avesco-cat.com',
      },
    ],
  },
};

export default nextConfig;
