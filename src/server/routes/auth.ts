import { db } from "../config/db";
import { publicProcedure, router } from "../config/trpc";
import { z } from "zod";
import { Scrypt, Session, generateId } from "lucia";
import { cookies } from "next/headers";
import { lucia } from "../config/lucia";
import { cache } from "react";
export const authrouter = router({
  signup: publicProcedure
    .input(
      z.object({
        email: z.string(),
        password: z.string(),
      })
    )
    .output(
      z.object({
        message: z.string().nullable(),
        status: z.enum(["success", "error"]),
      })
    )
    .mutation(async ({ input }) => {
      try {
        const hashedPassword = await new Scrypt().hash(input.password);
        const userId = generateId(15);
        const user = await db.user.create({
          data: {
            id: userId,
            email: input.email,
            password: hashedPassword,
          },
        });

        return {
          message: `Account ${user.email} Created with succes`,
          status: "success",
        };
      } catch (error) {
        return {
          message: "Error has occured",
          status: "error",
        };
      }
    }),
  signin: publicProcedure
    .input(
      z.object({
        email: z.string(),
        password: z.string(),
      })
    )
    .output(
      z.object({
        message: z.string().nullish(),
        status: z.enum(["success", "error"]),
      })
    )
    .mutation(async ({ input }) => {
      try {
        const user = await db.user.findFirst({
          where: {
            email: input.email,
          },
        });
        if (user) {
          const validpassword = await new Scrypt().verify(
            user.password,
            input.password
          );
          if (validpassword) {
            const session = await lucia.createSession(user.id, {});
            const sessionCookie = lucia.createSessionCookie(session.id);
            cookies().set(
              sessionCookie.name,
              sessionCookie.value,
              sessionCookie.attributes
            );
            return {
              message: "with succes",
              status: "success",
            };
          }
          return {
            message: "password incorrect",
            status: "error",
          };
        }
        return {
          message: "user not found",
          status: "error",
        };
      } catch (error) {
        console.log(error);
        return {
          message: `${error}`,
          status: "error",
        };
      }
    }),
  CheckAuthenticated: publicProcedure
    .output(
      z.object({
        isAthuenticated: z.boolean(),
      })
    )
    .query(
      cache(async () => {
        try {
          const promise = new Promise((resolve) => {
            const sessionId =
              cookies().get(lucia.sessionCookieName)?.value ?? null;
            resolve(sessionId);
          });
          const sessionId = promise.then(async (sessionId: any) => {
            return sessionId;
          });
          const { session } = await lucia.validateSession(await sessionId);
          console.log(session);
          if (session) {
            if (session.fresh) {
              const sessionCookie = lucia.createSessionCookie(session.id);
              cookies().set(
                sessionCookie.name,
                sessionCookie.value,
                sessionCookie.attributes
              );
              return {
                isAthuenticated: true,
              };
            } else {
              return {
                isAthuenticated: true,
              };
            }
          } else {
            return {
              isAthuenticated: false,
            };
          }
        } catch {
          console.log("error");
          return {
            isAthuenticated: false,
          };
        }
      })
    ),
  // when session is expired, u need to remove it from db (cron here)
  Logout: publicProcedure
    .input(z.void())
    .output(
      z.object({
        status: z.enum(["success", "error"]),
        message: z.string(),
      })
    )
    .mutation(async () => {
      try {
        const promise: Promise<string | null> = new Promise((resolve) => {
          const sessionId =
            cookies().get(lucia.sessionCookieName)?.value ?? null;
          resolve(sessionId);
        });
        const sessionId: string | null = await promise.then(
          async (sessionId: string | null) => {
            if (sessionId) {
              return sessionId;
            } else {
              return null;
            }
          }
        );
        if (!sessionId)
          return {
            status: "error",
            message: "error",
          };
        await db.session.delete({
          where: {
            id: sessionId,
          },
        });
        await lucia.invalidateSession(await sessionId);
        const sessionCookie = lucia.createBlankSessionCookie();
        cookies().set(
          sessionCookie.name,
          sessionCookie.value,
          sessionCookie.attributes
        );

        return {
          status: "success",
          message: "logout with success",
        };
      } catch (error) {
        return {
          status: "error",
          message: `${error}`,
        };
      }
    }),
});
