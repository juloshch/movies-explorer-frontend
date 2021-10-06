import { Link } from 'react-router-dom';
import headerLogo from '../../images/header-logo.svg';
import profileLink from '../../images/link-to-profile.svg';

function Header() {
    return (
        <section className="header">
            <img className="header__logo" src={headerLogo} alt={"Лого"} ></img>
            <div className="header__links">
                <Link to="/movies" className="header__link">Фильмы</Link>
                <Link to="/saved-movies" className="header__saved-movies-link">Сохранённые фильмы</Link>
                <Link to="/profile" className="header__profile-link"><img src={profileLink} className="" alt="ссылка на профиль пользователя"></img></Link>
            </div>
        </section>
    );
}

export default Header;