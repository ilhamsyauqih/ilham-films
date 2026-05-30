// ✅ BELAJAR PROPS: komponen ini menerima data dari luar
const MovieCard = ({title, genre, rating, status, year}) => {
    return (
        <div className="MovieCard">
            <h3>{title}</h3>
            <p>{genre} . {year}</p>
            <p>⭐ {rating}</p>
            <span>{status}</span>
        </div>
    );
}

export default MovieCard;