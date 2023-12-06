import { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Sidebar from '../components/Sidebar/Sidebar';
import styles from './App.module.css';
import { PostsType, posts } from '../consts/posts';
import Slider from '../components/Slider/Slider';
import { handleResizeWindow } from '../consts/resize';

const App = () => {
  const [width, setWidth] = useState<number>(handleResizeWindow());
  const [slider, setSlider] = useState<boolean>(false);
  const [currentText, setCurrentText] = useState<string>('');
  const [currentPhotos, setCurrentPhotos] = useState<string[]>([]);
  const [currentPosts, setCurrentPosts] = useState<PostsType[]>(posts);

  useEffect(() => {
    if (width === 100) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = slider ? 'hidden' : 'unset';
  }, [slider, width]);

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
      <Header />
      <Main
        currentPosts={currentPosts}
        setSlider={setSlider}
        setCurrentPhotos={setCurrentPhotos}
        setCurrentText={setCurrentText}
      />
      <Sidebar setCurrentPosts={setCurrentPosts} />
      {slider && (
        <Slider photos={currentPhotos} setSlider={setSlider} text={currentText} width={width} />
      )}
    </section>
  );
};

export default App;
