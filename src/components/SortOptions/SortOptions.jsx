const SortOptions = ({ setCurrentSortType, sortType }) => {
    const options = ['stars', 'forks'];

    const onSortOptionChangeHandler = (event) => {
        setCurrentSortType(event.target.value);
    }

    return (
        <select onChange={onSortOptionChangeHandler} value={sortType}>
            <option>Sort By</option>
            {options.map((option, index) => {
                return (
                    <option key={index} >
                        {option}
                    </option>
                )
            })}
        </select>
    );
}

export default SortOptions;