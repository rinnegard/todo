"use client";
import { useEffect, useState } from "react";
import Input from "./input";
import { Todo } from "./types";
import TodoList from "./todo-list";
import Header from "../components/header";

function TodoPage() {
    const [todos, setTodos] = useState<Todo[]>([]);
    function handleSubmit(todo: Todo) {
        setTodos((prevTodos) => [...prevTodos, todo]);
    }

    function handleDelete(id: number) {
        console.log("Delete: ", id);

        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== id);
        });
    }

    function handleUpdate(newTodo: Todo) {
        setTodos((prevTodos) => {
            return [
                ...prevTodos.map((todo) => {
                    if (todo.id === newTodo.id) {
                        return newTodo;
                    } else {
                        return todo;
                    }
                }),
            ];
        });
    }

    useEffect(() => {
        console.log(todos);
    }, [todos]);

    return (
        <main className="container flex justify-center mx-auto flex-col p-4 pt-0">
            <Header title="Todo"></Header>
            <Input onSubmit={handleSubmit}></Input>
            <TodoList
                todos={todos}
                onDelete={handleDelete}
                onUpdate={handleUpdate}
            ></TodoList>
        </main>
    );
}

export default TodoPage;
