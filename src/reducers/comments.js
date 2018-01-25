import { SAVE_COMMENT } from "../actions/types";

export default function(state=[], action) {
  switch(action.type) {
    case SAVE_COMMENT:
      // same as state.concat([action.payload]) - returning new array with the action.payload
      return [...state, action.payload ];
  }
  return state;
}