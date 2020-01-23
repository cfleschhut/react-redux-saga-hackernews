import { call, put } from 'redux-saga/effects';
import { doAddStories, doFetchErrorStories } from '../actions/story';
import { fetchStories } from '../api/story';

function* handleFetchStories(action) {
  try {
    const result = yield call(fetchStories, action.query);
    yield put(doAddStories(result.hits));
  } catch (error) {
    yield put(doFetchErrorStories(error));
  }
}

export { handleFetchStories };
