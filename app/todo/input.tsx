import { useState } from "react";
import { Todo } from "./types";

export type InputProps = {
    onSubmit?: (todo: Todo) => void;
};

let index = 0;

function Input({ onSubmit }: InputProps) {
    const [todo, setTodo] = useState("");

    function handleSubmit() {
        let trimmedTodo = todo.trim();
        if (!trimmedTodo) {
            setTodo("");
            return;
        }
        const todoObj: Todo = {
            id: ++index,
            value: trimmedTodo,
            completed: false,
        };

        if (onSubmit) {
            onSubmit(todoObj);
        }

        setTodo("");
    }

    return (
        <form
            className="flex gap-2"
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
            }}
        >
            <input
                className="border border-blue-500 p-2 rounded-lg w-full"
                type="text"
                placeholder="Enter your todo..."
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button className="hover:bg-blue-700 active:bg-blue-900 bg-blue-500 py-2 px-5 font-medium rounded-lg text-white">
                Add
            </button>
        </form>
    );
}

export default Input;
