import actionTypes from '../actionTypes';

const initialState = {
  todoListIds: [],
  todoListMap: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_TODO: {
      const { id, content } = action.payload;

      return {
        ...state,
        todoListIds: [...state.todoListIds, id],
        todoListMap: {
          ...state.todoListMap,
          [id]: {
            completed: false,
            id,
            content,
          },
        },
      };
    }
    case actionTypes.REMOVE_TODO: {
      const { id } = action.payload;
      const todoListIds = state.todoListIds.filter((todoId) => todoId !== id);

      return {
        ...state,
        todoListMap: todoListIds.reduce((obj, todoId) => {
          obj[todoId] = { ...state.todoListMap[todoId] };

          return obj;
        }, {}),
        todoListIds,
      };
    }
    case actionTypes.SET_TODO_COMPLETED: {
      const { id, completed } = action.payload;

      return {
        ...state,
        todoListMap: {
          ...state.todoListMap,
          [id]: {
            ...state.todoListMap[id],
            completed,
          },
        },
      };
    }
    default:
      return state;
  }
}
