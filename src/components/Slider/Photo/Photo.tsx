import { Dispatch, useState } from 'react';
import styles from './Photo.module.css';
import { PhotosType } from '../../../consts/posts';
import TextButton from './TextButton/TextButton';

type PropsType = {
  position: number;
  photo: PhotosType;
  setPosition: Dispatch<number>;
  width: number;
  leftDisabled: boolean;
  rightDisabled: boolean;
};

const Photo = ({ position, photo, setPosition, width, leftDisabled, rightDisabled }: PropsType) => {
  const [startPosition, setStartPosition] = useState<number>(0);
  const [offsetPosition, setOffsetPosition] = useState<number>(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartPosition(e.touches[0].clientX);
    setOffsetPosition(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const currentPosition = e.touches[0].clientX;
    const offset = offsetPosition - currentPosition;
    const moveBack = offset < 0;
    const moveForward = offset > 0

    if ((!rightDisabled && moveForward) || (!leftDisabled && moveBack)) {
      setOffsetPosition(currentPosition);
      setPosition(position - (offset / width) * 100);
    }
  };

  const handleTouchEnd = () => {
    const prevSlide = Math.floor(position / 100) * 100;
    const nextSlide = (Math.floor(position / 100) + 1) * 100;
    if (Math.abs(startPosition - offsetPosition) >= width / 3) {
      (startPosition - offsetPosition > 0) ? setPosition(prevSlide) : setPosition(nextSlide);
    } else {
      (startPosition - offsetPosition > 0) ? setPosition(nextSlide) : setPosition(prevSlide);
    }
  };

  return (
    <li className={styles.slider__item} style={{ transform: `translateX(${position}%)` }}>
      {photo.src.split('.')[1] === 'jpg' ? (
        <div
          className={styles.slider__image}
          style={{ backgroundImage: `url(${photo.src})` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        ></div>
      ) : (
        <video className={styles.slider__image} src={`${photo.src}`} controls></video>
      )}
      <TextButton alt={photo.alt} position={position} />
    </li>
  );
};

export default Photo;
