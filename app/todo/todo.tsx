"use client";
import { useEffect, useState } from "react";
import { type Todo } from "@prisma/client";
import { deleteTodo, updateTodo } from "./actions";

export type TodoProps = {
    todo: Todo;
};

function Todo({ todo }: TodoProps) {
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        console.log(todo);
    }, [todo]);

    async function handleDelete() {
        const answer = confirm("Are you sure you want to delete?");
        if (answer) {
            await deleteTodo(todo.id);
        }
    }

    async function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        await updateTodo(todo.id, {
            value: todo.value,
            completed: !todo.completed,
        });
    }

    async function handleBlur(newValue: string) {
        if (!newValue) {
            setIsEdit(false);
            return;
        }

        await updateTodo(todo.id, {
            value: newValue,
        });
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
