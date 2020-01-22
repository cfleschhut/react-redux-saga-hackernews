const isNotArchived = archiveIds => story =>
  archiveIds.indexOf(story.objectID) === -1;

const getReadableStories = ({ storyState, archiveState }) =>
  storyState.filter(isNotArchived(archiveState));

export { getReadableStories };
