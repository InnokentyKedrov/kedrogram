import { useState } from 'react';
import styles from './Post.module.css';
import { PostsType } from '../../../consts/posts';
import gallery from '../../../assets/icons/gallery.svg';

const Post = ({ title, data, photos }: Omit<PostsType, 'category'>) => {
  const [hover, setHover] = useState<boolean>(false);

  const postClick: React.MouseEventHandler<HTMLLIElement> = (event) => {
    console.log('event: ', event);
  };

  return (
    <li
      className={styles.item}
      style={{ backgroundImage: `url(${photos[0].photo})` }}
      onClick={postClick}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      {photos.length > 1 && (
        <img className={styles.gallery} src={gallery} alt="Галерея фотографий." />
      )}
      {hover && <span>{title}</span>}
      {hover && <span>{data}</span>}
    </li>
  );
};

export default Post;
