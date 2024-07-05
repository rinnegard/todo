"use server";

import { redirect } from "next/navigation";
import { SignInSchema } from "./schema";
import prisma from "@/lib/prisma";
import { equal } from "assert";

export type SignInSuccess = {
    success: true;
};
export type SignInFail = {
    success: false;
    errors: Zod.ZodFormattedError<Zod.infer<typeof SignInSchema>, string>;
};
export type SignInResult = SignInSuccess | SignInFail;

export async function signInAction(formData: FormData): Promise<SignInResult> {
    const result = await SignInSchema.safeParseAsync(
        Object.fromEntries(formData)
    );

    if (!result.success) {
        return {
            success: false,
            errors: result.error.format(),
        };
    }

    const existingUser = await prisma.user.findUnique({
        where: {
            email: result.data.email,
        },
    });

    if (!existingUser || existingUser?.password !== result.data.password) {
        return {
            success: false,
            errors: {
                _errors: ["Invalid credentials"],
            },
        };
    }
    return redirect("/");
}
