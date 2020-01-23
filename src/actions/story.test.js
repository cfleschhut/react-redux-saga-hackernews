import { doAddStories } from './story';
import { STORIES_ADD } from '../constants/actionTypes';

describe('story action', () => {
  it('adds stories', () => {
    const stories = ['a', 'b'];

    const expectedAction = {
      type: STORIES_ADD,
      stories,
    };
    const action = doAddStories(stories);

    expect(action).toEqual(expectedAction);
  });
});
