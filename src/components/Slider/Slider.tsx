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

  useEffect(() => {
    setLeftDisabled(position === 0);
    setRightDisabled(position === (1 - photos.length) * width);
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
            return (
              <Photo
                key={index}
                position={position}
                photo={el}
                setPosition={setPosition}
                width={width}
                leftDisabled={leftDisabled}
                rightDisabled={rightDisabled}
              />
            );
          })}
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
        </ul>

        <div className={styles.image__text_wrapper}>
          <p className={styles.image__text}>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
