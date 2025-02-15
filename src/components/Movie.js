import propTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImage, title, summary, genres, year }) {
    return (
        <div>
            <Link to={`/movie/${id}`}>
            <img src={coverImage} alt={title}/>
            <h2>{title} {year}</h2>
            </Link>
            <p>{summary}</p>
            <ul>
                {genres.map((g) => (
                    <li key={g}>{g}</li>
            ))}
            </ul>
        </div>
    );
}

Movie.propTypes = {
    id: propTypes.number.isRequired,
    coverImage: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired,
}

export default Movie;