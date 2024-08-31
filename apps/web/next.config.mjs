/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        // https://fakestoreapi.com
        protocol: "https",
        hostname: "fakestoreapi.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
