import storyReducer from './story';
import { doAddStories } from '../actions/story';

describe('story reducer', () => {
  it('adds stories to the state', () => {
    const stories = ['a', 'b', 'c'];
    const action = doAddStories(stories);

    const previousState = { stories: [], error: null };
    const expectedState = { stories, error: null };

    const newState = storyReducer(previousState, action);

    expect(newState).toEqual(expectedState);
  });
});
