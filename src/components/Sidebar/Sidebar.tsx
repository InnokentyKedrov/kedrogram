import { Dispatch, SetStateAction, useState } from 'react';
import { PostsType, posts } from '../../consts/posts';
import styles from './Sidebar.module.css';

type PropsType = {
  setCurrentPosts: Dispatch<SetStateAction<PostsType[]>>;
};

const Sidebar = ({ setCurrentPosts }: PropsType) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categoryClick = (data: string) => {
    const temp = posts.filter((el) => el.category.includes(data));
    setCurrentPosts(temp);
    setActiveCategory(data);
  };

  return (
    <aside className={styles.sidebar}>
      <ul className={styles.list}>
        <li
          className={
            activeCategory === 'all'
              ? `${styles.item} ${styles.item_home} ${styles.item_active}`
              : `${styles.item} ${styles.item_home}`
          }
          onClick={() => categoryClick('all')}
        >
          <span>Все посты</span>
        </li>
        <li
          className={
            activeCategory === 'big'
              ? `${styles.item} ${styles.item_camp} ${styles.item_active}`
              : `${styles.item} ${styles.item_camp}`
          }
          onClick={() => categoryClick('big')}
        >
          <span>Большие походы</span>
        </li>
        <li
          className={
            activeCategory === 'nizh'
              ? `${styles.item} ${styles.item_deer} ${styles.item_active}`
              : `${styles.item} ${styles.item_deer}`
          }
          onClick={() => categoryClick('nizh')}
        >
          <span>Нижегородская область</span>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
