const FilterBar = ({activeFilter, onFilterChange}) => {
    const genres = ["Semua", "Sci-Fi", "Animasi", "Thriller"];

    return (
        <div className="filter-bar">
            {genres.map((genre)=>(
                <button 
                key={genre}
                onClick={()=> onFilterChange(genre)}
                className={activeFilter === genre ? "active" : ""}
                >
                    {genre}
                </button>
            ))}
        </div>
    )
}

export default FilterBar;