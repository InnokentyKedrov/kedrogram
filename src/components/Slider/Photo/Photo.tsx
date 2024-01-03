import { Dispatch, SetStateAction, useState } from 'react';
import styles from './Photo.module.css';

type PropsType = {
  position: number;
  photo: string;
  setPosition: Dispatch<SetStateAction<number>>;
  width: number;
  leftDisabled: boolean;
  rightDisabled: boolean;
};

const Photo = ({ position, photo, setPosition, width, leftDisabled, rightDisabled }: PropsType) => {
  const [touchStart, setTouchStart] = useState<number>(0);
  const [pos1, setPos1] = useState<number>(0);
  const [pos2, setPos2] = useState<number>(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.touches[0].clientX);
    setPos1(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const currentPosition = e.touches[0].clientX;
    if (
      (!rightDisabled && pos1 - currentPosition > 0) ||
      (!leftDisabled && pos1 - currentPosition < 0)
    ) {
      setPos2(pos1 - currentPosition);
      setPos1(currentPosition);
      if (Math.abs(touchStart - currentPosition) <= width) setPosition(position - pos2);
    }
  };

  const handleTouchEnd = () => {
    if (Math.abs(touchStart - pos1) >= width / 2) {
      if (touchStart - pos1 > 0) setPosition(Math.floor(position / width) * width);
      else setPosition((Math.floor(position / width) + 1) * width);
    } else {
      if (touchStart - pos1 > 0) setPosition((Math.floor(position / width) + 1) * width);
      else setPosition(Math.floor(position / width) * width);
    }
  };

  return (
    <li className={styles.slider__item} style={{ transform: `translateX(${position}px)` }}>
      <div
        className={styles.slider__image}
        style={{ backgroundImage: `url(${photo})` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      ></div>
    </li>
  );
};

export default Photo;
