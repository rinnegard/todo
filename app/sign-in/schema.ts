import { z } from "zod";

export const SignInSchema = z.object({
    email: z.string().email("Please provide a valid email").toLowerCase(),
    password: z.string().min(1, "Please provide a valid password"),
});
