import { Dispatch, SetStateAction, useState } from 'react';
import styles from './Post.module.css';
import gallery from '../../../assets/icons/gallery.svg';

type PropsType = {
  text: string;
  title: string;
  data: string;
  photos: string[];
  setSlider: Dispatch<SetStateAction<boolean>>;
  setCurrentPhotos: Dispatch<string[]>;
  setCurrentText: Dispatch<string>;
};

const Post = ({
  text,
  title,
  data,
  photos,
  setSlider,
  setCurrentPhotos,
  setCurrentText,
}: PropsType) => {
  const [hover, setHover] = useState<boolean>(false);

  const postClick: React.MouseEventHandler<HTMLLIElement> = () => {
    setSlider(true);
    setCurrentPhotos(photos);
    setCurrentText(text);
  };

  return (
    <li
      className={styles.item}
      style={{ backgroundImage: `url(${photos[0]})` }}
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
