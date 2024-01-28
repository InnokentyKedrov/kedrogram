import { Dispatch } from 'react';
import { PhotosType, PostsType } from '../../consts/posts';
import styles from './Main.module.css';
import Post from './Post/Post';

type PropsType = {
  currentPosts: PostsType[];
  setSlider: Dispatch<boolean>;
  setCurrentPhotos: Dispatch<PhotosType[]>;
};

const Main = ({ currentPosts, setSlider, setCurrentPhotos }: PropsType) => {
  return (
    <main className={styles.main}>
      <div className={styles.list__wrapper}>
        <ul className={styles.list}>
          {currentPosts.map((el) => {
            return (
              <Post
                key={el.title}
                title={el.title}
                data={el.data}
                photos={el.photos}
                setSlider={setSlider}
                setCurrentPhotos={setCurrentPhotos}
              />
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Main;
