import { FETCH_USER_SUCCESS } from '../actions/user';

// type User = {
//   name: String,
//   city: String,
//   state: String,
//   picture: String
// }

const defaultState = {
  users: ['Carlo', 'Gino']
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        users: action.users,
      };
    default:
      return state;
  }
};
