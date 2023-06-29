/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },

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
        source: "/hi",
        destination: "mailto:hrvsdev@gmail.com",
        permanent: true,
      },
      {
        source: "/hello",
        destination: "mailto:hrvsdev@gmail.com",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "mailto:hrvsdev@gmail.com",
        permanent: true,
      },
      {
        source: "/msg",
        destination: "mailto:hrvsdev@gmail.com",
        permanent: true,
      },
      {
        source: "/tw",
        destination: "https://twitter.com/itsharshvyas",
        permanent: true,
      },
      {
        source: "/twitter",
        destination: "https://twitter.com/itsharshvyas",
        permanent: true,
      },
      {
        source: "/ig",
        destination: "https://instagram.com/harsh_vys",
        permanent: true,
      },
      {
        source: "/insta",
        destination: "https://instagram.com/harsh_vys",
        permanent: true,
      },
      {
        source: "/instagram",
        destination: "https://instagram.com/harsh_vys",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
