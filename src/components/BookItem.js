import React from 'react';
import ProtoTypes from 'prop-types';
import './BookItem.css';

function BookItem(props) {
  const { title, author } = props;
  return (
    <div className="book-item">
      <div className="left-content">
        <div className="book-description">
          <div className="book-cover">
            <span className="small-grey-text">Action</span>
            <h3>{title}</h3>
            <p className="author">{author}</p>
          </div>
          <div className="cta">
            <ul>
              <li>Comments</li>
              <li>Remove</li>
              <li>Edit</li>
            </ul>
          </div>
        </div>

        <div className="book-status">
          <div className="progress">
            <div className="progress-bar-fill">
              <div className="progress-bar" />
            </div>
            <div className="progress-bar-percentage">
              <h1>100%</h1>
              <span className="small-grey-text">completed</span>
            </div>
          </div>
        </div>
      </div>

      <div className="right-content">
        <div className="current-chapter">
          <span className="small-grey-text">CURRENT CHAPTER</span>
          <h3>Chapter 17</h3>
          <p className="btn btn-grey">Updating progress</p>
          <div />
        </div>
      </div>
    </div>
  );
}

BookItem.propTypes = {
  title: ProtoTypes.string.isRequired,
  author: ProtoTypes.string.isRequired,
};

export default BookItem;
