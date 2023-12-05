import { PostsType } from '../../consts/posts';
import styles from './Main.module.css';
import Post from './Post/Post';

type PropsType = {
  currentPosts: PostsType[];
};

const Main = ({ currentPosts }: PropsType) => {
  return (
    <main className={styles.main}>
      <ul className={styles.list}>
        {currentPosts.map((el) => {
          return <Post key={el.title} title={el.title} data={el.data} photos={el.photos} />;
        })}
      </ul>
    </main>
  );
};

export default Main;
