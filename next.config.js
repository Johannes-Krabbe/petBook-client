/** @type {import('next').NextConfig} */
const { createSecureHeaders } = require('next-secure-headers');

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
}

module.exports = {
  async headers() {
    return [{
      source: "/(.*)",
      headers: createSecureHeaders({
        contentSecurityPolicy: {
          directives: {
            defaultSrc: ["'self'", "'unsafe-eval'", "https://petbook-api.johanneskrabbe.com", "http://localhost:3001"],
            styleSrc: ["'self'", "'unsafe-inline'"],
          },
        },
        xssProtection: "sanitize",
        forceHTTPSRedirect: true,
        referrerPolicy: "same-origin",
      })
    }];
  },
  nextConfig,
};
