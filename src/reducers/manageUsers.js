const initState = {
    users: []
  }
  
  export default function manageUsers (state = initState, action) {
    switch (action.type) {
  
      case ('LOAD_USERS'): {
        return {...state, users: action.payload}
      }
  
      default:
        return state;
    }
  
  }
  