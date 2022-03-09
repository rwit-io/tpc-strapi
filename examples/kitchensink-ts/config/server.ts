export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '6f75e424d1a0307077c294fcc3c7d78d'),
    },
  },
  app: {
    keys: env.array('APP_KEYS', ['toBeModified1', 'toBeModified2']),
  },
});
