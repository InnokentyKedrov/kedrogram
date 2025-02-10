import { useEffect, useState } from 'react';
import styles from './TextButton.module.css';

const TextButton = ({alt, position}: {alt: string; position: number}) => {
  const [active, setActive] = useState<boolean>(false);
  const onClick = () => {setActive(!active)};

  useEffect(() => {
    if (active) setActive(false);
  }, [position]);

  return (
    <div className={styles.slider__button_wrapper}>
      {alt && <button className={
        active
          ? `${styles.slider__button_text} ${styles.slider__button_text_active}`
          : `${styles.slider__button_text} ${styles.slider__button_text_disable}`
        }
          type='button'
          onClick={onClick}
        />
      }
      <p className={
        active
          ? `${styles.slider__text} ${styles.slider__text_active}`
          : `${styles.slider__text} ${styles.slider__text_disable}`
        }
      >
        {alt}
      </p>
    </div>
  )
};

export default TextButton;
