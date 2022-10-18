/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  redirects: async () => {
    return [
      {
        source: "/gt",
        destination: "https://github.com/hrvsdev",
        permanent: true,
      },
      {
        source: "/gt/:path*",
        destination: "https://github.com/hrvsdev/:path*",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/hrvsdev",
        permanent: true,
      },
      {
        source: "/github/:path*",
        destination: "https://github.com/hrvsdev/:path*",
        permanent: true,
      },
      {
        source: "/mail",
        destination: "mailto:hrvsdev@gmail.com",
        permanent: true,
      },
      {
        source: "/tw",
        destination: "https://twitter.com/hrvsdev",
        permanent: true,
      },
      {
        source: "/twitter",
        destination: "https://twitter.com/hrvsdev",
        permanent: true,
      },
      {
        source: "/ig",
        destination: "https://instagram.com/hrvsdev",
        permanent: true,
      },
      {
        source: "/insta",
        destination: "https://instagram.com/hrvsdev",
        permanent: true,
      },
      {
        source: "/instagram",
        destination: "https://instagram.com/hrvsdev",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
