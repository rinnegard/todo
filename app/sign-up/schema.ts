import { z } from "zod";

export const SignUpSchema = z
    .object({
        name: z.string().min(1, "Please provide a name"),
        email: z.string().email().trim().toLowerCase(),
        password: z.string().min(6),
        confirmPassword: z.string(),
    })
    .superRefine(({ password, confirmPassword }, ctx) => {
        if (password !== confirmPassword) {
            ctx.addIssue({
                code: "custom",
                message: "Passwords not matching",
                path: ["confirmPassword"],
            });
        }
    });
