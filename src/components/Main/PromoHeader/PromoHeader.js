import logoImage from '../../../images/logo.svg';
import { Link } from 'react-router-dom';
import '../../../vendor/index.css';

function PromoHeader() {
    return (
        <section className="promo-header">
            <img className="promo-header__logo" src={logoImage} alt={"Лого"} />
            <div>
                <Link to="/sign-up" className="promo-header__signin-link">Регистрация</Link>
                <button className="promo-header__signup-button" type="submit">
                    Войти
                </button>
            </div>
        </section>
    );
}

export default PromoHeader;