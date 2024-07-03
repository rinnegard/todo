import prisma from "@/lib/prisma";
import Todo from "./todo";

export type TodoListProps = {};

async function TodoList({}: TodoListProps) {
    const todos = await prisma.todo.findMany({
        orderBy: { createdAt: "desc" },
    });
    return (
        <ul className="my-5 space-y-2">
            {todos.map((todo) => {
                return <Todo todo={todo} key={`todo-item-${todo.id}`}></Todo>;
            })}
        </ul>
    );
}

export default TodoList;
