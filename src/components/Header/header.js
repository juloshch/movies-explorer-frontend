import { Link } from 'react-router-dom';
import headerLogo from '../../images/header-logo.svg';
import profileLink from '../../images/link-to-profile.svg';
import menuIcon from '../../images/header-menu-icon.svg';
import React from 'react';

function Header( {isNavMenuOpen, handleMenuOpen, handleMenuClose} ) {
    


    return (
        <section className="header">
            <img className="header__logo" src={headerLogo} alt="Лого"></img>
            <div className="header__links">
                <Link to="/movies" className="header__link">Фильмы</Link>
                <Link to="/saved-movies" className="header__link">Сохранённые фильмы</Link>
                <Link to="/profile" className="header__link header__profile-link"><img src={profileLink} alt="ссылка на профиль пользователя"></img></Link>
            </div>
            <div className="header__menu-button" onClick={handleMenuOpen} > 
                <img className="header__menu-button" src={menuIcon} alt="меню"></img>
            </div>
            
        </section>
        
    );
}

export default Header;