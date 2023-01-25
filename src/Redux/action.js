import * as types from "./actionType";

let TextArray = [];

export const postText = (payload) => (dispatch) => {
  new Promise((res, err) => {
    if (payload) {
      TextArray = [...TextArray, payload];
      res(TextArray);
    } else {
      err({ massage: "some thing went wrong" });
    }
  })
    .then((res) => dispatch({ type: types.POST_SUCCESS, payload: TextArray }))
    .catch((err) => dispatch({ type: types.POST_FAILURE }));
};
