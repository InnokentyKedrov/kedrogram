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
  setCurrentTitle: Dispatch<string>;
};

const Post = ({ title, data, photos, setSlider, setCurrentPhotos, setCurrentTitle }: PropsType) => {
  const [hover, setHover] = useState<boolean>(false);

  const postClick: React.MouseEventHandler<HTMLLIElement> = () => {
    setSlider(true);
    setCurrentPhotos(photos);
    setCurrentTitle(title);
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
      {hover && <span>{title}</span>}
      {hover && <span>{data}</span>}
    </li>
  );
};

export default Post;
