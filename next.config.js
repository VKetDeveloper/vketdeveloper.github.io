/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // ビルド時にLintエラーがあってもビルド失敗にしない（CIでLintは別途実行推奨）
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
