import { env } from "@/env";
import axios from "axios";

export const lemonSqueezyAPIInstance = axios.create({
  baseURL: env.NEXT_PUBLIC_LEMON_SQUEEZY_ENDPOINT,
  headers: {
    Accept: "application/vnd.api+json",
    "Content-Type": "application/vnd.api+json",
    Authorization: `Bearer ${env.LEMON_SQUEEZY_API_KEY}`,
  },
});
