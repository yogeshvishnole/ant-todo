import React from 'react';

import TodoItem from '../todo-item/todo-item.component';

const TodoList = ({ todos }) => {
	return (
		<>
			{todos.map((todo) => (
				<TodoItem key={todo.id} todo={todo} />
			))}
		</>
	);
};

export default TodoList;
