import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './LikeButton.module.css';
import likeIcon from '../../assets/icon-like.svg';
import likeActiveIcon from '../../assets/icon-like-active.svg';

export default function LikeButton({ initialCount = 0 }) {
  const [count, setCount] = useState(initialCount);
  const [liked, setLiked] = useState(false);

  function handleClick() {
    setCount((value) => value + 1);
    setLiked(true);
  }

  return (
    <button
      type="button"
      className={`${styles.button} ${liked ? styles.liked : ''}`}
      onClick={handleClick}
    >
      <img
        className={styles.icon}
        src={liked ? likeActiveIcon : likeIcon}
        alt=""
      />
      <span>Like</span>
      {count > 0 && <span className={styles.count}>{count}</span>}
    </button>
  );
}

LikeButton.propTypes = {
  initialCount: PropTypes.number,
};
