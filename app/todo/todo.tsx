import { useRef, useState } from "react";
import { type Todo } from "./types";

export type TodoProps = {
    todo: Todo;
    onDelete?: (id: number) => void;
    onUpdate?: (updatedTodo: Todo) => void;
};

function Todo({ todo, onDelete, onUpdate }: TodoProps) {
    const [isEdit, setIsEdit] = useState(false);

    function handleDelete() {
        const answer = confirm("Are you sure you want to delete?");
        if (answer) {
            onDelete?.(todo.id);
        }
    }

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const newTodo: Todo = { ...todo, completed: !todo.completed };

        onUpdate?.(newTodo);
    }

    function handleBlur(newValue: string) {
        if (!newValue) {
            setIsEdit(false);
            return;
        }

        const newTodo: Todo = { ...todo, value: newValue };
        onUpdate?.(newTodo);
        setIsEdit(false);
    }
    return (
        <li className="bg-slate-200 p-3 rounded-lg shadow flex justify-between">
            <div className="flex items-center gap-2 w-full">
                <input
                    className=""
                    type="checkbox"
                    checked={todo.completed}
                    onChange={handleInputChange}
                />
                {isEdit ? (
                    <input
                        autoFocus
                        className="opacity-70 w-full"
                        defaultValue={todo.value}
                        onBlur={(e) => {
                            handleBlur(e.target.value);
                        }}
                        onKeyUp={(e) => {
                            switch (e.code) {
                                case "Enter":
                                    handleBlur(e.currentTarget.value);
                                    break;
                                case "Escape":
                                    setIsEdit(false);
                                    break;
                                default:
                                    break;
                            }
                        }}
                    ></input>
                ) : (
                    <span
                        onDoubleClick={() => setIsEdit(true)}
                        className={
                            "block w-full " +
                            (todo.completed ? "line-through" : "")
                        }
                    >
                        {todo.value}
                    </span>
                )}
            </div>
            <button
                onClick={handleDelete}
                className="bg-red-500 text-white rounded-lg h-5 w-5 flex justify-center items-center text-sm"
            >
                &times;
            </button>
        </li>
    );
}

export default Todo;
