import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_URL);
export const db = drizzle(sql, { schema });

//  ------------------------------
// import { createClient } from "@supabase/supabase-js";
// import { drizzle } from "drizzle-orm/postgres-js";
// import postgres from "postgres";
// import * as schema from "./schema";
// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// const sql = postgres(supabaseUrl, { ssl: "require" });
// export const db = drizzle(sql, { schema });

// export const supabase = createClient(supabaseUrl, supabaseKey);
