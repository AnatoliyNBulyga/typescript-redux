import React, { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelecor } from "../hooks/useTypedSelector";

const TodoList:React.FC = () => {
    const {loading, limit, page, todos, error} = useTypedSelecor(state => state.todo);
    const {fetchTodos, setTodoPage} = useActions();
    const pages = [1,2,3,4,5];
    useEffect(() => {
        fetchTodos(page, limit);
    }, [page]);

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <div className="todo-list">
            {
                todos.map(todo => <div key={todo.id}>{todo.id} - {todo.title}</div>)
            }
            {
                pages.map( p => <span onClick={() => setTodoPage(p)} key={p} style={{border: p === page ? '2px solid green' : '1px solid gray', padding: 10, marginTop: 10, marginLeft: 10, display: 'inline-block'}}>{p}</span>)
            }
        </div>
    )
}
export default TodoList;