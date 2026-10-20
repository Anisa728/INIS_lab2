import PropTypes from 'prop-types';
import styles from './ArticleCard.module.css';
import LikeButton from '../LikeButton/LikeButton';
import avatarIcon from '../../assets/icon-avatar.svg';
import commentIcon from '../../assets/icon-comment.svg';

export default function ArticleCard({
  title,
  author,
  date,
  text,
  image,
  imageAlt = '',
}) {
  function focusComment() {
    const field = document.getElementById('comment-input');
    field?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    field?.focus();
  }

  return (
    <article className={styles.card}>
      <img className={styles.image} src={image} alt={imageAlt} />
      <div className={styles.body}>
        <div className={styles.authorRow}>
          <span className={styles.avatar}>
            <img src={avatarIcon} alt="" />
          </span>
          <div>
            <p className={styles.author}>{author}</p>
            <p className={styles.date}>{date}</p>
          </div>
        </div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
        <div className={styles.actions}>
          <LikeButton />
          <button type="button" className={styles.comment} onClick={focusComment}>
            <img className={styles.commentIcon} src={commentIcon} alt="" />
            <span>Comment</span>
          </button>
        </div>
      </div>
    </article>
  );
}

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
};
