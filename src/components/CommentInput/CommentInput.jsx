import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './CommentInput.module.css';
import avatarIcon from '../../assets/icon-avatar.svg';
import commentIcon from '../../assets/icon-comment.svg';

export default function CommentInput({ placeholder = 'Write a comment...' }) {
  const [text, setText] = useState('');
  const [comments, setComments] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const value = text.trim();
    if (!value) {
      return;
    }

    setComments((items) => [...items, { id: Date.now(), text: value }]);
    setText('');
  }

  return (
    <section className={styles.section}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <span className={styles.avatar}>
          <img src={avatarIcon} alt="" />
        </span>
        <input
          id="comment-input"
          className={styles.field}
          type="text"
          value={text}
          placeholder={placeholder}
          onChange={(event) => setText(event.target.value)}
        />
        <button type="submit" className={styles.submit}>
          <img className={styles.icon} src={commentIcon} alt="" />
          <span>Comment</span>
        </button>
      </form>

      {comments.length > 0 && (
        <ul className={styles.list}>
          {comments.map((comment) => (
            <li key={comment.id} className={styles.item}>
              <span className={styles.avatar}>
                <img src={avatarIcon} alt="" />
              </span>
              <p>{comment.text}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

CommentInput.propTypes = {
  placeholder: PropTypes.string,
};
