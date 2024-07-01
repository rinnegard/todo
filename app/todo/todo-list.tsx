import Todo from "./todo";
import { Todo as TTodo } from "./types";

export type TodoListProps = {
    todos: TTodo[];
    onDelete?: (id: number) => void;
    onUpdate?: (newTodo: TTodo) => void;
};

function TodoList({ todos, onDelete, onUpdate }: TodoListProps) {
    return (
        <ul className="my-5 space-y-2">
            {todos.map((todo) => {
                return (
                    <Todo
                        onDelete={onDelete}
                        onUpdate={onUpdate}
                        todo={todo}
                        key={`todo-item-${todo.id}`}
                    ></Todo>
                );
            })}
        </ul>
    );
}

export default TodoList;
