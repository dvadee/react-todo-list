import actionTypes from './actionTypes';
import { v4 } from 'uuid';

export const addTodo = (content) => ({
  type: actionTypes.ADD_TODO,
  payload: {
    id: v4(),
    content,
  },
});

export const removeTodo = (id) => ({
  type: actionTypes.REMOVE_TODO,
  payload: { id },
});

export const setTodoCompleted = (id, completed) => ({
  type: actionTypes.SET_TODO_COMPLETED,
  payload: {
    id,
    completed,
  },
});

export const setTodoVisibilityFilter = (filterType) => ({
  type: actionTypes.SET_TODO_VISIBILITY_FILTER,
  payload: { filterType },
});
