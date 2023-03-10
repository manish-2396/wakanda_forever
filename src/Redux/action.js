import * as types from "./actionType";

let TextArray = [];

export const postText = (payload) => (dispatch) => {
  dispatch({ type: types.POST_REQUEST });
  new Promise((res, err) => {
    if (payload) {
      TextArray = [...TextArray, payload];
      res(TextArray);
    } else {
      err({ massage: "some thing went wrong" });
    }
  })
    .then((res) => dispatch({ type: types.POST_SUCCESS, payload: res }))
    .catch((err) => dispatch({ type: types.POST_FAILURE }));
};
