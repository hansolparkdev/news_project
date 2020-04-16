export const FETCH_NEWS_DATA_REQUEST = 'FETCH_NEWS_DATA_REQUEST';
export const FETCH_NEWS_DATA_REQUEST_STARTED = 'FETCH_NEWS_DATA_REQUEST_STARTED';
export const FETCH_NEWS_DATA_SUCCESS = 'FETCH_NEWS_DATA_SUCCESS';
export const FETCH_NEWS_DATA_FAIL = 'FETCH_NEWS_DATA_FAIL';

export const CHANGE_SEARCH_VALUE = 'CHANGE_SEARCH_VALUE';
export const CHANGE_FROM_DATE_VALUE = 'CHANGE_FROM_DATE_VALUE';
export const CHANGE_TO_DATE_VALUE = 'CHANGE_TO_DATE_VALUE';

export const initialState = {
  fetchState: undefined,
  news: [],
  currentPage: undefined,
  searchValue: '',
  from: undefined,
  to: undefined,
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
        currentPageData = currentPage;
      }
      return {
        ...state, fetchState: 'success', news: action.result, currentPage: currentPageData,
      };
    }
    case FETCH_NEWS_DATA_FAIL: {
      return { ...state, fetchState: 'fail' };
    }
    case CHANGE_SEARCH_VALUE: {
      const { searchValue } = action;
      return { ...state, searchValue };
    }
    case CHANGE_FROM_DATE_VALUE: {
      const { fromData } = action;
      return { ...state, from: fromData };
    }
    case CHANGE_TO_DATE_VALUE: {
      const { toData } = action;
      return { ...state, to: toData };
    }
    default: {
      return state;
    }
  }
};

export default newsReducer;
