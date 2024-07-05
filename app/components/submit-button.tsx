"use client";

import { useFormStatus } from "react-dom";

export type SubmitButtonProps = {
    children?: React.ReactNode;
};

export default function SubmitButton({ children }: SubmitButtonProps) {
    const { pending } = useFormStatus();

    return (
        <button
            className="bg-black text-white rounded-lg w-full px-4 py-3 transition-colors disabled:bg-gray-600"
            type="submit"
            disabled={pending}
        >
            {pending ? "Loading..." : children ?? "Submit"}
        </button>
    );
}
