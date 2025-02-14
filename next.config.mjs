// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

// module.exports = {
//   webpack: (config) => {
//     config.resolve.fallback = { self: false };
//     return config;
//   },
// };
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      self: false,
    };
    return config;
  },
};

export default nextConfig; // ✅ Correct ES module export
