
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Task manager welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
    </div>
  );
}

export default Home;
