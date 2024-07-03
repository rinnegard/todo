import Header from "@/app/components/header";
import { getTodo } from "../actions";

export type TodoDetailsPageProps = {
    params: {
        todoId: string;
    };
};

export default async function TodoDetails({ params }: TodoDetailsPageProps) {
    const todo = await getTodo(params.todoId);

    return (
        <div>
            <Header title="Todo Details"></Header>
            <div>ID: {todo?.id}</div>
            <div>Desc: {todo?.value}</div>
            <div>Completed: {todo?.completed}</div>
            <div>Created: {todo?.createdAt.toUTCString()}</div>
            <div>Updated: {todo?.updatedAt?.toUTCString()}</div>
        </div>
    );
}
