export type InputProps = {
    type?: string;
    id: string;
    name: string;
};

export default function Input({ id, name, type }: InputProps) {
    return (
        <input
            className="px-3 py-2 rounded-lg border border-slate-300"
            type={type}
            name={name}
            id={id}
        />
    );
}
