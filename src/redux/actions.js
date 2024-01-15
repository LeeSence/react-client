export const SET_USER_INFO = "SET_USER_INFO";

export function setUserInfo(ids, subs) {
  return {
    type: SET_USER_INFO,
    ids,
    subs,
  };
}
