import * as types from "./actionType";

const initialState = {
  loading: false,
  error: false,
  data: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.POST_REQUEST: {
      return {
        loading: true,
        error: false,
        data: [],
      };
    }

    case types.POST_SUCCESS: {
      return {
        loading: false,
        error: false,
        data: payload,
      };
    }

    case types.POST_FAILURE: {
      return {
        loading: false,
        error: true,
        data: [],
      };
    }

    default:
      return state;
  }
};
