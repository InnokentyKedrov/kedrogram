import { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Sidebar from '../components/Sidebar/Sidebar';
import styles from './App.module.css';
import { PhotosType, PostsType, posts } from '../consts/posts';
import Slider from '../components/Slider/Slider';
import { handleResizeWindow } from '../consts/resize';

const App = () => {
  const [width, setWidth] = useState<number>(handleResizeWindow());
  const [slider, setSlider] = useState<boolean>(false);
  const [currentPhotos, setCurrentPhotos] = useState<PhotosType[]>([]);
  const [currentPosts, setCurrentPosts] = useState<PostsType[]>(posts);
  const [currentTitle, setCurrentTitle] = useState<string>('');

  useEffect(() => {
    document.body.style.overflow = slider ? 'hidden' : 'unset';
  }, [slider]);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(handleResizeWindow());
    });
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  });

  return (
    <section className={styles.app}>
      {slider ? (
        <Slider title={currentTitle} photos={currentPhotos} setSlider={setSlider} width={width} />
      ) : (
        <>
          <Header />
          <Main
            currentPosts={currentPosts}
            setSlider={setSlider}
            setCurrentPhotos={setCurrentPhotos}
            setCurrentTitle={setCurrentTitle}
          />
          <Sidebar setCurrentPosts={setCurrentPosts} />
        </>
      )}
    </section>
  );
};

export default App;
