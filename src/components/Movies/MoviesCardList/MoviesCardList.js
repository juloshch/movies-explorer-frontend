import MoviesCard from "../MoviesCard/MoviesCard";
import {moviesData} from '../MoviesData/MoviesData';

function MoviesCardList({ saved }) {
    return(
        <article className="movies-card-list">
            {moviesData.filter(m => (!saved || (saved && m.isLiked))).map((card) => (
                <MoviesCard card={card} saved={saved} />
            ))}
        </article>
    );
}

export default MoviesCardList;