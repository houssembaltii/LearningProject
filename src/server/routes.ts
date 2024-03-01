import { z } from "zod";
import { publicProcedure, router } from "./config/trpc";
import { authrouter } from "./routes/auth";

export const appRouter = router({
  auth: authrouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
