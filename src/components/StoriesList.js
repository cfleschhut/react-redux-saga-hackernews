import React from 'react';
import { connect } from 'react-redux';
import { doFetchStories } from '../actions/story';
import Story from './Story';
import { COLUMNS } from './StoriesHeader';
import './Stories.css';

const StoriesList = ({ stories, isLoading, onPaginatedSearch }) => (
  <div>
    {(stories || []).map(story => (
      <Story key={story.objectID} story={story} columns={COLUMNS} />
    ))}

    <div className="interactions">
      {isLoading ? (
        <p>Loading…</p>
      ) : (
        <button type="button" onClick={onPaginatedSearch}>
          More
        </button>
      )}
    </div>
  </div>
);

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onPaginatedSearch: () => {
      dispatch(doFetchStories(ownProps.query, ownProps.page + 1));
    },
  };
};

export default connect(null, mapDispatchToProps)(StoriesList);
