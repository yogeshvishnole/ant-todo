import React from 'react';

import { Card } from 'antd';

const TodoItem = ({ todo }) => {
	return <Card>{todo.description}</Card>;
};

export default TodoItem;
