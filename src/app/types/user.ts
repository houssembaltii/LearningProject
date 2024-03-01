import { z } from "zod";

export type User = z.infer<ReturnType<typeof zUser>>;
export const zUser = () =>
  z.object({
    id: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    password: z.string().nullish(),
    email: z.string().trim().toLowerCase(),
  });
