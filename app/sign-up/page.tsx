"use client";
import { useRef, useState } from "react";
import Header from "../components/header";
import Input from "../components/input";
import signUpAction, { SignUpFail } from "./actions";
import SubmitButton from "../components/submit-button";
import FormError from "../components/form-error";

export default function SignUpPage() {
    const formRef = useRef<HTMLFormElement>(null);
    const [errors, setErrors] = useState<SignUpFail["errors"] | undefined>();
    async function action(formData: FormData) {
        const result = await signUpAction(formData);

        if (result.success) {
            formRef.current?.reset();
            setErrors(undefined);
            return;
        }

        setErrors(result.errors);
    }
    return (
        <>
            <Header title="Testing"></Header>
            <main className="container mx-auto my-12">
                <div className="max-w-md mx-auto bg-slate-200 p-8 rounded-lg">
                    <h1 className="text-3xl font-bold mb-4">Sign up</h1>

                    <form className="space-y-4" action={action} ref={formRef}>
                        <div className="flex flex-col">
                            <label htmlFor="name">Name</label>
                            <Input type="text" name="name" id="name" />
                            <FormError
                                errors={errors?.name?._errors}
                            ></FormError>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email">Email</label>
                            <Input type="email" name="email" id="email" />
                            <FormError
                                errors={errors?.email?._errors}
                            ></FormError>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="password">Password</label>
                            <Input
                                type="password"
                                name="password"
                                id="password"
                            />
                            <FormError
                                errors={errors?.password?._errors}
                            ></FormError>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="confirmPassword">
                                Confirm Password
                            </label>
                            <Input
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                            />
                            <FormError
                                errors={errors?.confirmPassword?._errors}
                            ></FormError>
                        </div>
                        <SubmitButton></SubmitButton>
                    </form>
                </div>
            </main>
        </>
    );
}
