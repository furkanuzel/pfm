import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    POSTGRES_URL: z.string().min(1),
    NODE_ENV: z.string().optional(),
    JWT_SECRET: z.string().min(1),
    AUTH_SECRET: z.string().min(1)
  },
  client: {
    NEXT_PUBLIC_HOST_NAME: z.string().min(1),
  },
  runtimeEnv: {
    POSTGRES_URL: process.env.POSTGRES_URL,
    NODE_ENV: process.env.NODE_ENV,
    AUTH_SECRET: process.env.AUTH_SECRET,
    JWT_SECRET: process.env.JWT_SECRET,
    NEXT_PUBLIC_HOST_NAME: process.env.NEXT_PUBLIC_HOST_NAME 
  },
});
