import {
  STORIES_FETCH,
  STORIES_FETCH_ERROR,
  STORIES_ADD,
} from '../constants/actionTypes';

const doFetchStories = query => ({
  type: STORIES_FETCH,
  query,
});

const doFetchErrorStories = error => ({
  type: STORIES_FETCH_ERROR,
  error,
});

const doAddStories = stories => ({
  type: STORIES_ADD,
  stories,
});

export { doFetchStories, doFetchErrorStories, doAddStories };
