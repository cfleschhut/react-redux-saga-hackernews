import { call, put } from 'redux-saga/effects';
import { doAddStories } from '../actions/story';
import { fetchStories } from '../api/story';

function* handleFetchStories(action) {
  const result = yield call(fetchStories, action.query);
  yield put(doAddStories(result.hits));
}

export { handleFetchStories };
