export const FETCH_NEWS_DATA_REQUEST = 'FETCH_NEWS_DATA_REQUEST';
export const FETCH_NEWS_DATA_REQUEST_STARTED = 'FETCH_NEWS_DATA_REQUEST_STARTED';
export const FETCH_NEWS_DATA_SUCCESS = 'FETCH_NEWS_DATA_SUCCESS';
export const FETCH_NEWS_DATA_FAIL = 'FETCH_NEWS_DATA_FAIL';

export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

export const initialState = {
  fetchState: undefined,
  news: [],
  currentPage: undefined,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS_DATA_REQUEST_STARTED: {
      return { ...state, fetchState: 'fetch' };
    }
    case FETCH_NEWS_DATA_SUCCESS: {
      const { currentPage } = action;
      let currentPageData;
      if (currentPage === undefined) {
        currentPageData = 1;
      } else {
        currentPageData = currentPage + 1;
      }

      return {
        ...state, fetchState: 'success', news: action.result, currentPage: currentPageData,
      };
    }
    case FETCH_NEWS_DATA_FAIL: {
      return { ...state, fetchState: 'fail' };
    }
    default: {
      return state;
    }
  }
};

export default newsReducer;
