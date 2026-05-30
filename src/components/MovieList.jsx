import MovieCard from "./MovieCard";

const MovieList = ({movies}) => {
    return (
        <div className="MovieList">
            {movies.map((movie) => (
                <MovieCard 
                key={movie.id}
                title={movie.title}
                genre={movie.genre}
                rating={movie.rating}
                status={movie.status}
                year={movie.year}
                />
            ))}
        </div>
    )
}

export default MovieList;