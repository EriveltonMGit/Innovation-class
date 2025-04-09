/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  
  // Configurações de imagens
  images: {
    unoptimized: true, // Necessário para exportação estática
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'backend-inovation-class.onrender.com',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001',
        pathname: '/**',
      },
    ],
  },

  // Variáveis de ambiente que serão disponibilizadas no client-side
  env: {
    API_BASE_URL: process.env.NEXT_PUBLIC_API_URL,
  },

  // Configurações de rewrites para desenvolvimento (não afeta export estático)
  async rewrites() {
    if (process.env.NODE_ENV === 'development') {
      return [
        {
          source: '/api/:path*',
          destination: 'http://localhost:3001/:path*',
        },
      ];
    }
    return [];
  },

  // Configurações de headers para CORS (útil durante desenvolvimento)
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: process.env.NODE_ENV === 'development' 
              ? '*' 
              : 'https://backend-inovation-class.onrender.com',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;