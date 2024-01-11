const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";
const COMPLETE_TASK = "COMPLETE_TASK";
const EDITING_TASK = "EDITING_TASK";

export const addTask = (id, value, complete) => {
  return {
    type: ADD_TASK,
    id,
    value,
    complete,
  };
};
export const removeTask = (id) => {
  return {
    type: REMOVE_TASK,
    id,
  };
};
export const completeTask = (id) => {
  return {
    type: COMPLETE_TASK,
    id,
  };
};
export const editingTask = () => {
  return {
    type: EDITING_TASK,
  };
};
