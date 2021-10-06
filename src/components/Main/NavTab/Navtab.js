import { Link } from 'react-router-dom';
import '../../../vendor/index.css';

function Navtab() {
    return (
        <section className="navtab">
            <div>
                <Link to="/" className="navtab__link">О проекте</Link>
                <Link to="/technologies" className="navtab__link">Технологии</Link>
                <Link to="/student" className="navtab__link">Студент</Link>
            </div>
        </section>
    );
}

export default Navtab;