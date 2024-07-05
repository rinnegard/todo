"use server";
import { SignUpSchema } from "./schema";
import prisma from "@/lib/prisma";

export type SignUpSuccess = {
    success: true;
};
export type SignUpFail = {
    success: false;
    errors: Zod.ZodFormattedError<
        {
            name: string;
            email: string;
            password: string;
            confirmPassword: string;
        },
        string
    >;
};
export type SignUpResult = SignUpSuccess | SignUpFail;

export default async function signUpAction(
    formData: FormData
): Promise<SignUpResult> {
    "use server";
    await new Promise((r) => {
        setTimeout(r, 1000);
    });

    const data = Object.fromEntries(formData);

    const parseResult = await SignUpSchema.safeParseAsync(data);

    if (parseResult.success) {
        //Validate email
        const userCount = await prisma.user.count({
            where: {
                email: parseResult.data.email,
            },
        });

        if (userCount > 0) {
            return {
                success: false,
                errors: {
                    _errors: [],
                    email: {
                        _errors: ["That email is already being used"],
                    },
                },
            };
        }

        //Insert into DB
        await prisma.user.create({
            data: {
                name: parseResult.data.name,
                email: parseResult.data.email,
                password: parseResult.data.password,
            },
        });

        return {
            success: true,
        };
    } else {
        const formattedErrors = parseResult.error.format();
        return {
            success: false,
            errors: formattedErrors,
        };
    }
}
