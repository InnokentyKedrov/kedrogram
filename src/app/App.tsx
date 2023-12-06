import { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Sidebar from '../components/Sidebar/Sidebar';
import styles from './App.module.css';
import { PostsType, posts } from '../consts/posts';
import Slider from '../components/Slider/Slider';

const App = () => {
  const [slider, setSlider] = useState<boolean>(false);
  const [currentText, setCurrentText] = useState<string>('');
  const [currentPhotos, setCurrentPhotos] = useState<string[]>([]);
  const [currentPosts, setCurrentPosts] = useState<PostsType[]>(posts);

  useEffect(() => {
    document.body.style.overflow = slider ? 'hidden' : 'unset';
  }, [slider]);

  return (
    <section className={styles.app}>
      <Sidebar setCurrentPosts={setCurrentPosts} />
      <Header />
      <Main
        currentPosts={currentPosts}
        setSlider={setSlider}
        setCurrentPhotos={setCurrentPhotos}
        setCurrentText={setCurrentText}
      />
      {slider && <Slider photos={currentPhotos} setSlider={setSlider} text={currentText} />}
    </section>
  );
};

export default App;
