import { onLoadingStart, onLoadingEnd } from './ui';
import axios from 'axios';

export const FETCH_USER_START = 'FETCH_USER_START';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAIL = 'FETCH_USER_FAIL';

export const fetchUserSuccess = (users) => ({
  type: FETCH_USER_SUCCESS,
  users,
});

export const fetchUserFail = () => ({
  type: FETCH_USER_FAIL,
});

export const fetchUsers = (count) => async (dispatch) => {
  dispatch(onLoadingStart());
  try {
    const result = await axios.get(`https://randomuser.me/api/?results=${count}`)
    const users = result.data.results

    dispatch(fetchUserSuccess(users))
  } catch (e) {
    dispatch(fetchUserFail())
  }
  dispatch(onLoadingEnd());
};
