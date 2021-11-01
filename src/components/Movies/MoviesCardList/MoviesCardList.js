import MoviesCard from "../MoviesCard/MoviesCard";
import {moviesData} from '../MoviesData/MoviesData';

function MoviesCardList({ saved, cards }) {
    return(
        <article className="movies-card-list">
            {cards.map((card) => (
                <MoviesCard card={card} saved={saved} />
            ))}
        </article>
    );
}

export default MoviesCardList;