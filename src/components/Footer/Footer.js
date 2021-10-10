import '../../vendor/index.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <section className="footer">
            <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <hr className="footer__line"></hr>
            <div className="footer__bottom">
                <p className="footer__date">© 2020</p>
                <ul className="footer__links">
                    <Link className="footer__link">Яндекс.Практикум</Link>
                    <Link className="footer__link">Github</Link>
                    <Link className="footer__link">Facebook</Link>
                </ul>
            </div>
        </section>
    );
}

export default Footer;