import { Dispatch, useEffect, useRef, useState } from 'react';
import { PhotosType, PostsType } from '../../consts/posts';
import styles from './Main.module.css';
import Post from './Post/Post';

type PropsType = {
  currentPosts: PostsType[];
  setCurrentPhotos: Dispatch<PhotosType[]>;
  setSlider: Dispatch<boolean>;
};

const Main = ({ currentPosts, setCurrentPhotos, setSlider }: PropsType) => {
  const [gridHeight, setGridHeight] = useState('0px');
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!listRef.current) return;
    const observer = new ResizeObserver(entries => {
      setGridHeight(`${entries[0].contentRect.height}px`);
    });
    observer.observe(listRef.current);
    return () => observer.disconnect();
  }, []);

  const getSize = (length: number, index: number, size?: string) => {
    switch (size) {
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
    <main className={styles.main}>
      <div className={styles.list__wrapper}>
        <ul className={styles.list} ref={listRef} style={{height: gridHeight}}>
          {currentPosts.map((el, index) => {
            const {height, width} = getSize(currentPosts.length, index, el.size);

            return (
              <Post
                key={el.title}
                data={el.data}
                gridColumn={width}
                gridRow={height}
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
