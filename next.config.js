/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  distDir: 'dist',
  trailingSlash: true,  // Mejora la compatibilidad con hosting estático
  // Garantiza que las rutas sean compatibles con hosting estático
  assetPrefix: process.env.NODE_ENV === 'production' ? '/' : '',
}

module.exports = nextConfig
