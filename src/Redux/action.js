import * as types from "./actionType";


let TextArray = []

export const postText = (payload) => (dispatch) => {
  console.log(payload);
  TextArray= [...TextArray, payload]
  dispatch({type:types.POST_SUCCESS , payload:TextArray});
};
