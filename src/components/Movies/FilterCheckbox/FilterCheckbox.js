function FilterCheckbox() {
    return(
        <div className="filter-checkbox__container">
        <p className="filter-checkbox__title">Короткометражки</p>
        <label class="filter-checkbox">
            <input type="checkbox" className="filter-checkbox__input"/>
            <span class="filter-checkbox__slider round"></span>
        </label>
        </div>
    );
}

export default FilterCheckbox;