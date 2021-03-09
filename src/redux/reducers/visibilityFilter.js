import { FILTER_TYPES } from '../../constants';
import actionTypes from '../../redux/actionTypes';
const initialState = FILTER_TYPES.ALL;

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_TODO_VISIBILITY_FILTER: {
      return action.payload.filterType;
    }
    default: {
      return state;
    }
  }
}
