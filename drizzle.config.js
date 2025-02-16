// /** @type {import ("drizzle-kit").Config} */
// export default {
//   schema: "./utils/schema.js",
//   dialect: "postgresql",
//   dbCredentials: {
//     url: "postgresql://PrepAIred_owner:XFVZM5fcp6nw@ep-rapid-hall-a1x1bbn0.ap-southeast-1.aws.neon.tech/PrepAIred?sslmode=require",
//   },
// };

import "dotenv/config";
import { defineConfig } from "drizzle-kit";
export default defineConfig({
  out: "./drizzle",
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_D9EGn8ARctvb@ep-odd-bush-a1zm9i22-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require",
  },
});
