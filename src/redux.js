import { v4 as uuid } from 'uuid';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers, createStore, applyMiddleware } from 'redux';

const CREATE_TODO = 'CREATE_TODO';
const EDIT_TODO = 'EDIT_TODO';
const DELETE_TODO = 'DELETE_TODO';
const SELECT_TODO = 'SELECT_TODO';

// action creators

export const createTodo = (description) => {
	return {
		type: CREATE_TODO,
		payload: {
			id: uuid(),
			description,
			isCompleted: false,
		},
	};
};

export const editTodo = (data) => {
	return {
		type: EDIT_TODO,
		payload: data,
	};
};

export const deleteTodo = (id) => {
	return {
		type: DELETE_TODO,
		payload: id,
	};
};

export const selectTodo = (id) => {
	return {
		type: SELECT_TODO,
		payloadd: id,
	};
};

// reducers

const todoReducer = (state = [{ id: 2, description: 'My degree my job', isCompleted: false }], action) => {
	switch (action.type) {
		case CREATE_TODO:
			return [...state, action.payload];
		case EDIT_TODO:
			return state.map((todo) => {
				if (action.payload.id === todo.id) {
					return { ...todo, description: action.payload.description };
				}
				return todo;
			});
		case DELETE_TODO:
			return state.filter((todo) => action.payload.id !== todo.id);
		default:
			return state;
	}
};

const selectedTodoReducer = (state = null, action) => {
	if (action.type === SELECT_TODO) {
		return action.payload;
	}
	return state;
};

//selectors

export const selectTodos = (state) => state.todos;

const rootReducer = combineReducers({
	todos: todoReducer,
	selectedTodo: selectedTodoReducer,
});

const middleware = [reduxLogger, thunk];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
