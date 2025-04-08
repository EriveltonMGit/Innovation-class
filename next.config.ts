/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Desativa a otimização automática de imagens
  },
}

module.exports = nextConfig;
