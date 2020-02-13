export default (state = {}, action) => {
    switch (action.type) {
      case "SET_LOGIN":
        return {
          ...state,
          currentUser: action.payload.user,
          currentPassword: action.payload.pass
        };
  
      case "RESET_LOGIN":
        return {
          ...state,
          currentUser: "",
          currentPassword: ""
        };
      case "SET_ACCESS_TOKEN":return{...state, token: action.payload}
  
      default:
        return state;
    }
  };