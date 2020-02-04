const isNotArchived = archiveIds => story =>
  archiveIds.indexOf(story.objectID) === -1;

const getReadableStories = ({ storyState, archiveState }) =>
  storyState.stories.filter(isNotArchived(archiveState));

const getFetchError = ({ storyState }) => storyState.error;

const getStorySearchQuery = ({ storyState }) => storyState.query;

const getStorySearchPage = ({ storyState }) => storyState.page;

export {
  getReadableStories,
  getFetchError,
  getStorySearchQuery,
  getStorySearchPage,
};
