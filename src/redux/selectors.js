import { FILTER_TYPES } from '../constants';

export const getTodosState = (store) => store.todos;

export const getTodoListIds = (store) =>
  getTodosState(store)?.todoListIds || [];

export const getTodoListMap = (store) =>
  getTodosState(store)?.todoListMap || {};

export const getTodoById = (store, id) => getTodoListMap(store)[id] || null;

export const getTodos = (store) =>
  getTodoListIds(store).map((id) => getTodoById(store, id));

export const getTodosByVisibilityFilter = (store, filterType) => {
  const todos = getTodos(store);

  if (filterType === FILTER_TYPES.COMPLETE) {
    return todos.filter((todo) => todo.completed);
  } else if (filterType === FILTER_TYPES.INCOMPLETE) {
    return todos.filter((todo) => !todo.completed);
  } else {
    return todos;
  }
};

export const getVisibilityFilterType = (store) => store.visibilityFilter;
