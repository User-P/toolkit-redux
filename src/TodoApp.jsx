import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis/todosApi";

export const TodoApp = () => {
	// const { data: todos = [], isLoading} = useGetTodosQuery();
	const [id, setId] = useState(1);

	const { data: todo, isLoading } = useGetTodoQuery(id);

	const netxTodo = () => {
		setId(id + 1);
	};

	const prevTodo = () => {
		if (id === 1) return;
		setId(id - 1);
	};

	return (
		<>
			<h1>TodoApp </h1>
			<hr />
			<h4>isLoading: {isLoading ? "True" : "False"}</h4>
			<pre>{JSON.stringify(todo)}</pre>
			{/* <ul>
				{todos.map((todo) => (
					<li key={todo.id}>
						<strong>{todo.completed ? "Done" : "Pending"}</strong> {todo.title}
					</li>
				))}
			</ul> */}
			<button onClick={prevTodo}>Prev</button>
			<button onClick={netxTodo}>Next TODO</button>
		</>
	);
};
