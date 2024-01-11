const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";
const COMPLETE_TASK = "COMPLETE_TASK";
const EDITING_TASK = "EDITING_TASK";
export const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        { id: action.id, value: action.value, complete: action.complete },
      ];
    case REMOVE_TASK:
      return state.filter((elem) => elem.id !== action.id);
    case COMPLETE_TASK:
      return state.map((elem) =>
        elem.id === action.id ? { ...elem, complete: !elem.complete } : elem
      );
    case EDITING_TASK:
    default:
      return state;
  }
};
