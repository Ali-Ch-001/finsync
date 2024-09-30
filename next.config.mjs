/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    domains: ['img.icons8.com'], // Add img.icons8.com to the allowed domains
  },
};

// Exporting the final configuration
export default nextConfig;
