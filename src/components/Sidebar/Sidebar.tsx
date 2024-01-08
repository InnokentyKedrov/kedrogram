import { Dispatch, useState } from 'react';
import { PostsType, posts } from '../../consts/posts';
import styles from './Sidebar.module.css';

type PropsType = {
  setCurrentPosts: Dispatch<PostsType[]>;
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
        <li className={styles.item} onClick={() => categoryClick('all')}>
          <svg
            className={
              activeCategory === 'all'
                ? `${styles.item__image} ${styles.item__image_active}`
                : styles.item__image
            }
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M22.849,7.68l-.869-.68h.021V2h-2v3.451L13.849,.637c-1.088-.852-2.609-.852-3.697,0L1.151,7.68c-.731,.572-1.151,1.434-1.151,2.363v13.957H9V15c0-.551,.448-1,1-1h4c.552,0,1,.449,1,1v9h9V10.043c0-.929-.42-1.791-1.151-2.363Zm-.849,14.32h-5v-7c0-1.654-1.346-3-3-3h-4c-1.654,0-3,1.346-3,3v7H2V10.043c0-.31,.14-.597,.384-.788L11.384,2.212c.363-.284,.869-.284,1.232,0l9,7.043c.244,.191,.384,.478,.384,.788v11.957Z"
              fill="currentColor"
            />
          </svg>
          <span>Все посты</span>
        </li>
        <li className={styles.item} onClick={() => categoryClick('big')}>
          <svg
            className={
              activeCategory === 'big'
                ? `${styles.item__image} ${styles.item__image_active}`
                : styles.item__image
            }
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M12-.013.408,19.6A2.914,2.914,0,0,0,2.917,24H21.083a2.914,2.914,0,0,0,2.509-4.4ZM9,22l3-5.081L15,22Zm12.88-.461a.9.9,0,0,1-.794.461H17.326L12,12.987,6.674,22H2.917a.913.913,0,0,1-.787-1.378L12,3.919l9.87,16.7A.9.9,0,0,1,21.877,21.539Z"
              fill="currentColor"
            />
          </svg>
          <span>Большие походы</span>
        </li>
        <li className={styles.item} onClick={() => categoryClick('nizh')}>
          <svg
            className={
              activeCategory === 'nizh'
                ? `${styles.item__image} ${styles.item__image_active}`
                : styles.item__image
            }
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="m23.442,7.067c-.304-.308-1.38-1.355-2.719-2.14.785-.731,1.276-1.772,1.276-2.927,0-.552-.447-1-1-1s-1,.448-1,1c0,1.103-.897,2-2,2h-.5c-1.379,0-2.5-1.122-2.5-2.5v-.5c0-.552-.447-1-1-1s-1,.448-1,1v.5c0,.924.28,1.784.76,2.5h-1.26c-1.379,0-2.5-1.122-2.5-2.5v-.5c0-.552-.447-1-1-1s-1,.448-1,1v.5c0,2.481,2.019,4.5,4.5,4.5h1.308c-.616.942-.808,1.988-.808,2.586v.914c0,.276-.225.5-.5.5h-6.331c-1.12,0-2.172.44-2.962,1.239-.062.063-2.931,3.071-2.931,3.071-.381.399-.366,1.032.033,1.414.193.185.442.276.69.276.264,0,.526-.104.724-.31l.35-.367c.118.936.362,1.645.616,2.383.101.294.207.6.31.939v2.354c0,1.654,1.346,3,3,3s3-1.346,3-3v-1h3v1c0,1.654,1.346,3,3,3s3-1.346,3-3v-2.115c.627-.746,2-2.695,2-5.485v-2.007l2.099-.24c1.084-.135,1.901-1.06,1.901-2.153,0-.511-.072-1.441-.558-1.933Zm-1.58,2.1l-2.089.238c-1.011.115-1.773.97-1.773,1.987v2.007c0,2.669-1.684,4.37-1.697,4.384-.193.188-.303.446-.303.717v2.5c0,.552-.448,1-1,1s-1-.448-1-1v-2c0-.553-.447-1-1-1h-5c-.553,0-1,.447-1,1v2c0,.552-.448,1-1,1s-1-.448-1-1v-2.5c0-.096-.014-.19-.04-.281-.125-.427-.255-.804-.379-1.162-.316-.921-.566-1.648-.58-2.863-.007-.582.217-1.132.628-1.548.412-.416.958-.645,1.54-.645h6.331c1.379,0,2.5-1.122,2.5-2.5v-.914c0-.265.08-2.586,2.867-2.586,1.15,0,2.893,1.221,4.066,2.386.034.129.066.39.066.614,0,.085-.063.158-.138.167Z"
              fill="currentColor"
            />
          </svg>
          <span>Нижегородская область</span>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
