import axios from "axios";
import { env } from "@/env";

const axiosInstance = axios.create({
  baseURL: env.NEXT_PUBLIC_HOST_NAME || "http://localhost:3000",
});

export { axiosInstance };
