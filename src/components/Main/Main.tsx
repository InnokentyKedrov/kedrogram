import { Dispatch } from 'react';
import { PhotosType, PostsType } from '../../consts/posts';
import styles from './Main.module.css';
import Post from './Post/Post';

type PropsType = {
  currentPosts: PostsType[];
  setCurrentPhotos: Dispatch<PhotosType[]>;
  setSlider: Dispatch<boolean>;
};

const Main = ({ currentPosts, setCurrentPhotos, setSlider }: PropsType) => {
  const length = currentPosts.length;
  return (
    <main className={styles.main}>
      <div className={styles.list__wrapper}>
        <ul className={styles.list}>
          {currentPosts.map((el, index) => {
            return (
              <Post
                key={el.title}
                data={el.data}
                gridColumn={(length - index < 6) ? 1 : Math.round(Math.random() + 1)}
                gridRow={Math.round(Math.random() + 1)}
                photos={el.photos}
                setCurrentPhotos={setCurrentPhotos}
                setSlider={setSlider}
                title={el.title}
              />
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Main;
