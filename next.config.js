/** @type {import('next').NextConfig} */
const {createSecureHeaders} = require('next-secure-headers');

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
            defaultSrc: ["'self'", "https://petbook-api.johanneskrabbe.com"],
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