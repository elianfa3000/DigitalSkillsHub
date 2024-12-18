import { z } from "zod";

export const registerSchema = z.object({
  username: z
    .string({ required_error: "*User name is required" })
    .min(6, { message: "*username must be at least 6 characters" }),
  email: z
    .string({ required_error: "*Email is required" })
    .email({ message: "*Invalid email" }),
  password: z
    .string({ required_error: "*Password is required" })
    .min(6, { message: "*password must be at least 6 characters" }),
});

export const signinSchema = z.object({
  email: z
    .string({ required_error: "**Emiel is required" })
    .email({ message: "**Invalid email" })
    .optional(),
  password: z
    .string({ required_error: "**Password is required" })
    .min(6, { message: "**Password must be at least 6 charecters" })
    .optional(),
  level: z.number().int().optional(),
});
