/** @type {import('next').NextConfig} */
const {createSecureHeaders} = require('next-secure-headers');

const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  async headers() {
    return [{
      source: "/(.*)",
      headers: createSecureHeaders({
        contentSecurityPolicy: {
          directives: {
            defaultSrc: ["'self'", "https://petbook-api.johanneskrabbe.com"],
            styleSrc: ["'self'"],
          },
        },
        xssProtection: "sanitize",
        forceHTTPSRedirect: [true, { maxAge: 60 * 60 * 24 * 4, includeSubDomains: true }],
        referrerPolicy: "same-origin",
      })
    }];
  },
  nextConfig,
};