//All related to user will go in user reducer
// Reducer is just a function which will get prevState and action
//here userReducer is a Reducer function
import { UserActionTypes } from './user.types'

const INITIAL_STATE = {
    currentUser: null
  };
  
  const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            };
      default:
        return state;
    }
  };
  
  export default userReducer;