import { AuthState, AuthAction } from "./type";

function reducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case "changeAuth":
      return {
        ...state,
        id: action.user.id,
        nickName: action.user.nickName,
        auth: true,
      };
    default:
      throw new Error("Unhandled action");
  }
}

export default reducer;
