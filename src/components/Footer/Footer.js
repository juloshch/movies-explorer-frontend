import '../../vendor/index.css';

function Footer() {
    return (
        <section className="footer">
            <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <hr className="footer__line"></hr>
            <div className="footer__bottom">
                <p className="footer__date">© 2020</p>
                <ul className="footer__links">
                    <button onClick={() => { window.location.href = 'https://practicum.yandex.ru';}}  className="footer__link">Яндекс.Практикум</button>
                    <button onClick={() => { window.location.href = 'https://github.com';}}  className="footer__link">Github</button>
                    <button onClick={() => { window.location.href = 'https://facebook.com';}}  className="footer__link">Facebook</button>
                </ul>
            </div>
        </section>
    );
}

export default Footer;