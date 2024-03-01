import { initTRPC } from "@trpc/server";
import type { CreateNextContextOptions } from "@trpc/server/adapters/next";
import { cookies } from "next/headers";
import { lucia } from "./lucia";

// Avoid exporting the entire t-object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.

/* export const createContext = async (opts: CreateNextContextOptions) => {
  const session = await getsession();
  return {
    session,
  }; */
//};
const t = initTRPC.create();

// Base router and procedure helpers
export const router = t.router;
export const publicProcedure = t.procedure;

/* const getsession = async () => {
  const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;
  if (!sessionId) return null;
  const { session } = await lucia.validateSession(sessionId);
  return session;
};
 */
