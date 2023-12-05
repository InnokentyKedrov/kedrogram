import { useState } from 'react';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Sidebar from '../components/Sidebar/Sidebar';
import styles from './App.module.css';
import { posts } from '../consts/posts';
import { PostsType } from '../consts/posts';

const App = () => {
  const [currentPosts, setCurrentPosts] = useState<PostsType[]>(posts);

  return (
    <section className={styles.app}>
      <Sidebar setCurrentPosts={setCurrentPosts} />
      <Header />
      <Main currentPosts={currentPosts} />
    </section>
  );
};

export default App;
