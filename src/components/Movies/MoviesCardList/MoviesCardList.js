import MoviesCard from "../MoviesCard/MoviesCard";
import {moviesData} from '../MoviesData/MoviesData';

function MoviesCardList() {
    return(
        <article className="movies-card-list">
            {moviesData.map((card) => (
                <MoviesCard card={card}/>
            ))}
        </article>
    );
}

export default MoviesCardList;