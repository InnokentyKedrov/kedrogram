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
            const size = () => {
              switch (el.photos[0].size) {
                case 'big':
                  return {width: 2, height: 2};
                case 'tall':
                  return {width: 1, height: 2};
                case 'long':
                  return {width: 2, height: 1};
                case 'small':
                  return {width: 1, height: 1};
                      
                default:
                  return {
                    width: (length - index < 6) ? 1 : Math.round(Math.random() + 1),
                    height: Math.round(Math.random() + 1)
                  };
              }
            }

            return (
              <Post
                key={el.title}
                data={el.data}
                gridColumn={size().width}
                gridRow={size().height}
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
