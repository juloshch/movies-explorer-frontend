import { Link } from 'react-router-dom';
import profileLink from '../../images/link-to-profile.svg';
import closeIcon from '../../images/header-menu-close-image.svg';


function Navigation({ isOpen, onClose }) {
    console.log(isOpen)
    return (
        <section>
            <div className={`nav-wrapper ${isOpen ? 'nav-wrapper_is-opened' : ''}`}>
                <div className={`nav-menu ${isOpen ? 'nav-menu_is-opened' : ''}`} >
                    <button className="nav-menu__close-button" onClick={onClose}>
                        <img className="nav-menu__close-icon" src={closeIcon} alt="крестик"></img>
                    </button>
                    <div className="nav__menu_links">
                        <div className="nav__menu_links_top">
                            <Link to="/" className="nav__menu_link nav__menu_link-to-main">Главная</Link>
                            <Link to="/movies" className="nav__menu_link nav__menu_link-to-films">Фильмы</Link>
                            <hr className="nav__menu-line"></hr>
                            <Link to="/saved-movies" className="nav__menu_link nav__menu_link-to-saved-movies">Сохранённые фильмы</Link>
                        </div>
                        <div>
                            <Link to="/profile" className="nav__menu_link nav__menu_profile-link"><img src={profileLink} className="" alt="ссылка на профиль пользователя"></img></Link> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Navigation;