import Header from "../components/header";
import Input from "./input";
import TodoList from "./todo-list";

export default function TodoPage() {
    return (
        <main className="container flex justify-center mx-auto flex-col p-4 pt-0">
            <Header title="Todo"></Header>
            <Input></Input>
            <TodoList></TodoList>
        </main>
    );
}
