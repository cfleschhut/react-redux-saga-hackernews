import {
  STORIES_FETCH,
  STORIES_FETCH_ERROR,
  STORIES_ADD,
} from '../constants/actionTypes';

const INITIAL_STATE = {
  stories: [
    {
      title: 'React',
      url: 'https://facebook.github.io/react/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://github.com/reactjs/redux',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ],
  page: 0,
  query: '',
  error: null,
  isLoading: false,
};

const applyFetchErrorStories = (state, { error, isLoading }) => ({
  stories: [],
  error: {
    message: error.message,
  },
  isLoading,
});

const applyAddStories = (
  state,
  { stories: { hits, page, query }, isLoading }
) => ({
  stories: [...state.stories, ...hits],
  page,
  query,
  error: null,
  isLoading,
});

const storyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STORIES_FETCH:
      return { ...state, isLoading: action.isLoading };

    case STORIES_FETCH_ERROR:
      return applyFetchErrorStories(state, action);

    case STORIES_ADD:
      return applyAddStories(state, action);

    default:
      return state;
  }
};

export default storyReducer;
