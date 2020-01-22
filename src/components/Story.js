import React from 'react';
import './Story.css';

function Story({ story, columns, onArchive }) {
  const { title, url, author, num_comments, points, objectID } = story;

  return (
    <div className="story">
      <span style={{ width: columns.title.width }}>
        <a href={url}>{title}</a>
      </span>
      <span style={{ width: columns.author.width }}>{author}</span>
      <span style={{ width: columns.comments.width }}>{num_comments}</span>
      <span style={{ width: columns.points.width }}>{points}</span>
      <span style={{ width: columns.archive.width }}>
        <ButtonInline type="button" onClick={() => onArchive(objectID)}>
          Archive
        </ButtonInline>
      </span>
    </div>
  );
}

const ButtonInline = ({ onClick, type = 'button', children }) => (
  <Button type={type} className="button-inline" onClick={onClick}>
    {children}
  </Button>
);
const Button = ({ onClick, className, type = 'button', children }) => (
  <button type={type} className={className} onClick={onClick}>
    {children}
  </button>
);

export default Story;
