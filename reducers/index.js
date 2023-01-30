import { HYDRATE } from "next-redux-wrapper";
const initialState = {
  user: {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {},
  },
  post: {
    mainPost: [],
  },
};

export const loginAction = (data) => {
  return {
    type: "LOG_IN",
    data,
  };
};
export const logoutAction = (data) => {
  return {
    type: "LOG_OUT",
    data,
  };
};

// //액션 크리에이터(action creator)
// chageNickname = (data) => {
//   return { type: "CHANGE_NICKNAGE", data };
// };
// // chageNickname("boogicho");
// // {type:"CHANGE_NICKNAME",
// // data:"boogicho"}

//(이전상태, 액션)=>다음상태
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log("HYDRATE", action);
    case "LOG_IN":
      return {
        ...state,
        user: { ...state.user, isLoggedIn: true, user: action.data },
      };
    case "LOG_OUT":
      return {
        ...state,
        user: { ...state.user, isLoggedIn: false, user: null },
      };
    default:
      return state;
  }
};
export default rootReducer;
