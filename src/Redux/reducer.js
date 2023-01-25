import * as types from "./actionType";

const initialState = {
  TextValue: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.POST_REQUEST: {
      return {
        TextValue: [],
      };
    }

    case types.POST_SUCCESS: {
      return {
        TextValue: payload,
      };
    }

    case types.POST_FAILURE: {
      return {
        TextValue: [],
      };
    }

    default:
      return state;
  }
};
