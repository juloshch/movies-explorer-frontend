import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function NotFound() {
    let history = useHistory();
    // history.goBack()   onClick={history.goBack} 
    return(
        <div className="not-found">
            <h1 className="not-found__title">404</h1>
            <p className="not-found__text">Страница не найдена</p>
            <Link className="not-found__link" onClick={() => history.goBack()}>Назад</Link>
        </div>
    );
}

export default NotFound;