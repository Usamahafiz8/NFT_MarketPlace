/** @type {import("next").NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["gateway.pinata.cloud", "localhost"], 
    formats: ["image/webp"],
  },
};
