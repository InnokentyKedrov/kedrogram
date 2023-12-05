import styles from './Header.module.css';
import Flag from '../Flag/Flag';
import { useTheme } from '../../hooks/hooks';

const Header = () => {
  const { theme, setTheme } = useTheme();

  const themeToggle = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <a
          className={`${styles.navigation__item} ${styles.navigation__item_flag}`}
          href="https://kedr-club.vercel.app"
        >
          <Flag />
        </a>
        <div className={`${styles.navigation__item} ${styles.navigation__item_paw}`}></div>
      </nav>
      <div className={styles.themes} onClick={themeToggle} />
    </header>
  );
};

export default Header;
