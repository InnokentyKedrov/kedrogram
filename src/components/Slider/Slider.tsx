import { Dispatch, SetStateAction, useState, useEffect } from 'react';
import styles from './Slider.module.css';
import Photo from './Photo/Photo';

type PropsType = {
  photos: string[];
  setSlider: Dispatch<SetStateAction<boolean>>;
  text: string;
  width: number;
};

const Slider = ({ photos, setSlider, text, width }: PropsType) => {
  const [position, setPosition] = useState<number>(0);
  const [leftDisabled, setLeftDisabled] = useState<boolean>(false);
  const [rightDisabled, setRightDisabled] = useState<boolean>(false);

  const left = () => {
    if (!leftDisabled) {
      if (position !== 0) setPosition(position + width);
      if (rightDisabled) setRightDisabled(false);
    }
  };

  const right = () => {
    if (!rightDisabled) {
      if (position !== (1 - photos.length) * width) setPosition(position - width);
      if (leftDisabled) setLeftDisabled(false);
    }
  };

  useEffect(() => {
    if (position === 0) setLeftDisabled(true);
    if (position === (1 - photos.length) * width) setRightDisabled(true);
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
          {photos.map((el, index) => {
            return <Photo key={index} position={`${position}vw`} photo={el} />;
          })}
          {!leftDisabled && (
            <button
              className={`${styles.button} ${styles.button__left}`}
              type="button"
              onClick={left}
            ></button>
          )}
          {!rightDisabled && (
            <button
              className={`${styles.button} ${styles.button__right}`}
              type="button"
              onClick={right}
            ></button>
          )}
        </ul>

        <div className={styles.image__text_wrapper}>
          <p className={styles.image__text}>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
