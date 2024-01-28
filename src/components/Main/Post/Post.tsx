import { Dispatch, useState } from 'react';
import styles from './Post.module.css';
import gallery from '../../../assets/icons/gallery.svg';
import { PhotosType } from '../../../consts/posts';

type PropsType = {
  title: string;
  data: string;
  photos: PhotosType[];
  setSlider: Dispatch<boolean>;
  setCurrentPhotos: Dispatch<PhotosType[]>;
};

const Post = ({ title, data, photos, setSlider, setCurrentPhotos }: PropsType) => {
  const [hover, setHover] = useState<boolean>(false);

  const postClick: React.MouseEventHandler<HTMLLIElement> = () => {
    setSlider(true);
    setCurrentPhotos(photos);
  };

  return (
    <li
      className={styles.item}
      style={{ backgroundImage: `url(${photos[0].src})` }}
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
      <span className={hover ? styles.item__text_hover : styles.item__text_hidden}>{title}</span>
      <span className={hover ? styles.item__text_hover : styles.item__text_hidden}>{data}</span>
    </li>
  );
};

export default Post;
