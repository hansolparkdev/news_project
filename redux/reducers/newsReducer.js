export const HELLO_REQUEST = 'HELLO_REQUEST';
export const HELLO_REQUEST_STARTED = 'HELLO_REQUEST_STARTED';

export const FETCH_NEWS_DATA_REQUEST = 'FETCH_NEWS_DATA_REQUEST';

export const initialState = {
  hello: '',
  news: [],
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case HELLO_REQUEST_STARTED: {
      return { ...state, hello: action.value };
    }
    default: {
      return state;
    }
  }
};

export default newsReducer;
