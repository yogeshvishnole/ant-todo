import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { TodoList } from '../../components';
import { selectTodos } from '../../redux.js';
import { Container } from '../../globalStyles';

const HomeContainer = styled.div`
	padding-top: 3rem;
`;

const Home = () => {
	const todos = useSelector(selectTodos);
	return (
		<HomeContainer>
			<Container>
				<TodoList todos={todos} />
			</Container>
		</HomeContainer>
	);
};

export default Home;
