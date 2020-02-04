import React from 'react';
import { connect } from 'react-redux';
import {
  getReadableStories,
  getFetchError,
  getStorySearchQuery,
  getStorySearchPage,
} from '../selectors/story';
import StoriesHeader from './StoriesHeader';
import StoriesList from './StoriesList';
import './Stories.css';

const Stories = ({ stories, error, query, page, isLoading }) => {
  return (
    <div className="stories">
      <StoriesHeader />

      {error && error.message && (
        <p className="error">{`Something went wrong… (${error.message})`}</p>
      )}

      <StoriesList
        stories={stories}
        query={query}
        page={page}
        isLoading={isLoading}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    stories: getReadableStories(state),
    error: getFetchError(state),
    query: getStorySearchQuery(state),
    page: getStorySearchPage(state),
    isLoading: state.storyState.isLoading,
  };
};

export default connect(mapStateToProps)(Stories);
