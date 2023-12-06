import { Dispatch, SetStateAction } from 'react';
import { PostsType } from '../../consts/posts';
import styles from './Main.module.css';
import Post from './Post/Post';

type PropsType = {
  currentPosts: PostsType[];
  setSlider: Dispatch<SetStateAction<boolean>>;
  setCurrentPhotos: Dispatch<string[]>;
  setCurrentText: Dispatch<string>;
};

const Main = ({ currentPosts, setSlider, setCurrentPhotos, setCurrentText }: PropsType) => {
  return (
    <main className={styles.main}>
      <div className={styles.list__wrapper}>
        <ul className={styles.list}>
          {currentPosts.map((el) => {
            return (
              <Post
                key={el.title}
                text={el.text}
                title={el.title}
                data={el.data}
                photos={el.photos}
                setSlider={setSlider}
                setCurrentPhotos={setCurrentPhotos}
                setCurrentText={setCurrentText}
              />
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Main;
