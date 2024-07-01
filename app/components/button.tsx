"use client";
type ButtonProps = {
    children?: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
};

const Button = ({ children, onClick, disabled }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className="disabled:bg-grey-300 disabled:text-white disabled:border-gray-500 disabled:hover:border-gray-500 transition-colors hover:border-cyan-700 rounded-lg p-2 bg-slate-400 active:bg-slate-300 border-solid border-2 border-fuchsia-300"
        >
            {children}
        </button>
    );
};

export default Button;
