import styles from './App.module.css';
import ArticleCard from './components/ArticleCard/ArticleCard';
import CommentInput from './components/CommentInput/CommentInput';
import logo from './assets/logo.svg';
import articleImage from './assets/article.jpg';

const article = {
  title: 'Small notes, big ideas',
  author: 'Alex Morgan',
  date: 'October 6, 2026',
  text: 'A simple writing habit can turn everyday observations into your next story. Start with one idea at a time.',
  image: articleImage,
  imageAlt: 'Открытый блокнот и ручка на деревянном столе',
};

export default function App() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <img className={styles.logo} src={logo} alt="Blogger" />
          <button type="button" className={styles.post}>
            Post
          </button>
        </div>
      </header>

      <main className={styles.main}>
        <h1 className={styles.hero}>Your daily dose of ideas</h1>
        <p className={styles.lead}>A space to write, read and share.</p>
        <ArticleCard {...article} />
        <CommentInput />
      </main>
    </div>
  );
}
