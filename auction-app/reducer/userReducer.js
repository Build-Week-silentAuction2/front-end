import { userAction } from "../actions";

const {
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE
} = userAction;

const initialState = {
  user: {},
  isloading: false,
  error: null
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER_START:
      return { ...state, isloading: true, error: null };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        user: { ...action.payload },
        isloading: false,
        error: null
      };
    case REGISTER_USER_FAILURE:
      return { ...state, isloading: false, error: action.payload };
    case LOGIN_USER_START:
      return { ...state, isloading: true, error: null };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: { ...action.payload },
        isloading: false,
        error: null
      };
    case LOGIN_USER_FAILURE:
      return { ...state, isloading: false, error: action.payload };
    default:
      return state;
  }
}

export default userReducer;