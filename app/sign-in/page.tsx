"use client";

import { useState } from "react";
import Header from "../components/header";
import Input from "../components/input";
import SubmitButton from "../components/submit-button";
import { SignInFail, signInAction } from "./actions";
import FormError from "../components/form-error";

export default function SignInPage() {
    const [errors, setErrors] = useState<SignInFail["errors"]>();
    async function action(formData: FormData) {
        const result = await signInAction(formData);

        if (!result.success) {
            setErrors(result.errors);
        }
    }

    return (
        <>
            <Header title="Testing"></Header>
            <main className="container mx-auto my-12">
                <div className="max-w-md mx-auto bg-slate-200 p-8 rounded-lg">
                    <h1 className="text-3xl font-bold mb-4">Sign in</h1>
                    <form className="space-y-4" action={action}>
                        <FormError errors={errors?._errors}></FormError>
                        <div className="flex flex-col">
                            <label htmlFor="email">Email</label>
                            <Input type="text" name="email" id="email" />
                            <FormError
                                errors={errors?.email?._errors}
                            ></FormError>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="password">Password</label>
                            <Input type="text" name="password" id="password" />
                            <FormError
                                errors={errors?.password?._errors}
                            ></FormError>
                        </div>
                        <SubmitButton>Sign in</SubmitButton>
                    </form>
                </div>
            </main>
        </>
    );
}
