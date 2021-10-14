import logoImage from '../../../images/logo.svg';
import { Link } from 'react-router-dom';
import '../../../vendor/index.css';

function PromoHeader() {
    return (
        <section className="promo-header">
            <img className="promo-header__logo" src={logoImage} alt={"Лого"} />
            <div>
                <Link to="/sign-up" className="promo-header__signin-link">Регистрация</Link>
                <Link to="/sign-in" className="promo-header__signup-button" >
                    Войти
                </Link>
            </div>
        </section>
    );
}

export default PromoHeader;