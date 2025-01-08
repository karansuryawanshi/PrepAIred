/** @type {import ("drizzle-kit").Config} */
export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  //   driver: "pg",
  dbCredentials: {
    url: "postgresql://PrepAIred_owner:XFVZM5fcp6nw@ep-rapid-hall-a1x1bbn0.ap-southeast-1.aws.neon.tech/PrepAIred?sslmode=require",
  },
};
