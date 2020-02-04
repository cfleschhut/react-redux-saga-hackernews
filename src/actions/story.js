import {
  STORIES_FETCH,
  STORIES_FETCH_ERROR,
  STORIES_ADD,
} from '../constants/actionTypes';

const doFetchStories = (query, page) => ({
  type: STORIES_FETCH,
  query,
  page,
  isLoading: true,
});

const doFetchErrorStories = error => ({
  type: STORIES_FETCH_ERROR,
  error,
  isLoading: false,
});

const doAddStories = stories => ({
  type: STORIES_ADD,
  stories,
  isLoading: false,
});

export { doFetchStories, doFetchErrorStories, doAddStories };
