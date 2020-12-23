import React, { useState } from 'react';
import { Input, Button } from 'antd';
import styled from 'styled-components';

import { Container } from '../../globalStyles';

const CreateTodoContainer = styled.div`
	padding-top: 3rem;
`;

const FormContainer = styled.div`
	margin: auto;
	width: 50%;
`;

const Label = styled.label`
	display: block;
	margin-bottom: 0.5rem;
	font-size: 2rem;
`;

const CreateTodo = () => {
	const [input, setInput] = useState('');
	return (
		<CreateTodoContainer>
			<Container>
				<FormContainer>
					<form>
						<Label>Create todo</Label>
						<Input placeholder="Create Todo" value={input} />
						<Button type="primary" className="mt-3">
							Create
						</Button>
					</form>
				</FormContainer>
			</Container>
		</CreateTodoContainer>
	);
};

export default CreateTodo;
