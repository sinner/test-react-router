import { Link } from "react-router-dom";
import $styles from './Header.module.scss';
function Header() {
  const sort = 'email'

  return (
    <header className={$styles['header']}>
      <nav className={$styles['header__nav']}>
        <Link className={$styles['header__nav-link']} to="/">Home</Link>
        <Link className={$styles['header__nav-link']} to="/about">About</Link>
        <Link className={$styles['header__nav-link']} to="/xxx">Not Found</Link> 
        <Link className={$styles['header__nav-link']} to={`/settings?sort=${sort}`} state={{ greetings: 'Hello World!' }}>Settings</Link>
        <Link className={$styles['header__nav-link']} to="/doctors/pikachu">Pikachu</Link>
      </nav>
    </header>
  );
}

export default Header