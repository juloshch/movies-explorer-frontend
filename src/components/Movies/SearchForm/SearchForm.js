import findButton from '../../../images/find.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
    return (
        <section className="search">
            <div className="search-form__container">
                <form className="search-form">
                    <input className="search__field" placeholder="Фильм" type="search"/>
                    <button class="search__find-button"><img src={findButton} className="" alt="Найти"/></button>
                </form>
                <FilterCheckbox></FilterCheckbox>
                {/* <p>Короткометражки</p> */}
            </div>
            <hr className="search-form__line"></hr>
        </section>
    );
}

export default SearchForm;