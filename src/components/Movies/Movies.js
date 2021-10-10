import Header from '../Header/header';
import Footer from '../Footer/Footer';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList  from '../Movies/MoviesCardList/MoviesCardList';
import Preloader from './Preloader/Preloader';

function Movies() {
    return (
        <section className="movies">
            <Header></Header>
            <SearchForm></SearchForm>
            <MoviesCardList></MoviesCardList>
            <Preloader></Preloader>
            <Footer></Footer>
        </section>
    );
}

export default Movies;