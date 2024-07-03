import Header from "@/app/components/header";
import { getTodo } from "../actions";
import { notFound } from "next/navigation";

export type TodoDetailsPageProps = {
    params: {
        todoId: string;
    };
};

export default async function TodoDetails({ params }: TodoDetailsPageProps) {
    const todo = await getTodo(params.todoId);

    if (!todo) {
        notFound();
    }

    return (
        <div>
            <Header title="Todo Details"></Header>
            <div>ID: {todo?.id}</div>
            <div>Desc: {todo?.value}</div>
            <div>Completed: {todo?.completed ? "Yes" : "No"}</div>
            <div>Created: {todo?.createdAt.toLocaleString()}</div>
            <div>Updated: {todo?.updatedAt?.toLocaleString()}</div>
        </div>
    );
}
