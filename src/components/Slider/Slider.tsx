import { Dispatch, SetStateAction, useState, useEffect } from 'react';
import styles from './Slider.module.css';
import Photo from './Photo/Photo';
import { PhotosType } from '../../consts/posts';

type PropsType = {
  photos: PhotosType[];
  setSlider: Dispatch<SetStateAction<boolean>>;
  width: number;
};

const Slider = ({ photos, setSlider, width }: PropsType) => {
  const [position, setPosition] = useState<number>(0);
  const [leftDisabled, setLeftDisabled] = useState<boolean>(false);
  const [rightDisabled, setRightDisabled] = useState<boolean>(false);

  useEffect(() => {
    setLeftDisabled(Math.round(position) === 0);
    setRightDisabled(Math.floor(position - (1 - photos.length) * width) === 0);
  }, [position, photos.length, width]);

  return (
    <div className={styles.slider__wrapper}>
      <button
        type="button"
        className={`${styles.button} ${styles.button__close}`}
        onClick={() => setSlider(false)}
      ></button>

      <div className={styles.slider}>
        <ul className={styles.slider__list}>
          {photos.map((el, index) => (
            <Photo
              key={index}
              position={position}
              photo={el}
              setPosition={setPosition}
              width={width}
              leftDisabled={leftDisabled}
              rightDisabled={rightDisabled}
            />
          ))}
        </ul>
        {!leftDisabled && (
          <button
            className={`${styles.button} ${styles.button__left}`}
            type="button"
            onClick={() => setPosition(position + width)}
          ></button>
        )}
        {!rightDisabled && (
          <button
            className={`${styles.button} ${styles.button__right}`}
            type="button"
            onClick={() => setPosition(position - width)}
          ></button>
        )}
      </div>
    </div>
  );
};

export default Slider;
