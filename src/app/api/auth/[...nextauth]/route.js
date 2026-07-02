// What it does: forwards all auth-related HTTP requests to NextAuth's built-in handlers.

import { handlers } from "@/auth";

export const { GET, POST } = handlers;
