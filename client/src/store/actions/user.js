import { onLoadingStart, onLoadingEnd } from './ui';

export const FETCH_USER_START = 'FETCH_USER_START';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAIL = 'FETCH_USER_FAIL';

export const fetchUserSuccess = (user) => ({
  type: FETCH_USER_SUCCESS,
  user,
});

export const fetchUserFail = () => ({
  type: FETCH_USER_FAIL,
});

export const fetchUserDetails = () => (dispatch) => {
  dispatch(onLoadingStart());
  try {
    // fetch from backend
    const user = null
    dispatch(fetchUserSuccess(user))
  } catch (e) {
    dispatch(fetchUserFail())
    // fetch from backend
  }
  dispatch(onLoadingEnd());
};
