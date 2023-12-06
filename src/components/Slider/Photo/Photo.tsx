import styles from './Photo.module.css';

type PropsType = {
  position: string;
  photo: string;
};

const Photo = ({ position, photo }: PropsType) => {
  return (
    <li className={styles.slider__item} style={{ left: position }}>
      <div className={styles.slider__image} style={{ backgroundImage: `url(${photo})` }}></div>
    </li>
  );
};

export default Photo;
