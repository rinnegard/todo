import { useId } from "react";

export type FormErrorProps = {
    errors: string[] | undefined | null;
};

export default function FormError({ errors }: FormErrorProps) {
    const id = useId();

    if (!errors || !errors.length) return null;

    return (
        <ul>
            {errors.map((err) => {
                return (
                    <li
                        className="text-red-600 font-medium text-sm"
                        key={`validation-error-${id}-${err}`}
                    >
                        {err}
                    </li>
                );
            })}
        </ul>
    );
}
