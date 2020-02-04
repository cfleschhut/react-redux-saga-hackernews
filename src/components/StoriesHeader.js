import React from 'react';
import './Stories.css';

export const COLUMNS = {
  title: {
    label: 'Title',
    width: '40%',
  },
  author: {
    label: 'Author',
    width: '30%',
  },
  comments: {
    label: 'Comments',
    width: '10%',
  },
  points: {
    label: 'Points',
    width: '10%',
  },
  archive: {
    width: '10%',
  },
};

const StoriesHeader = () => (
  <div className="stories-header">
    {Object.keys(COLUMNS).map(key => (
      <span key={key} style={{ width: COLUMNS[key].width }}>
        {COLUMNS[key].label}
      </span>
    ))}
  </div>
);

export default StoriesHeader;
