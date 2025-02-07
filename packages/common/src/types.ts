import { z } from "zod";

export const CreateUser = z.object({
    username: z.string().min(3).max(255),
    password: z.string(),
    name: z.string(),
});

export const SignInSchema = z.object({
    username: z.string(),
    password: z.string(),
});

export const CreateRoomSchema = z.object({
    name: z.string().min(3).max(255),
});
