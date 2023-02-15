import { Link } from "react-router-dom";

function Movie(props) {
  const { coverImg, title, genres, summary, movieId } = props;
  return (
    <>
      <img src={coverImg} alt={title} />
      <Link to={`/movie/${movieId}`}>{title}</Link>
      <ul>
        {genres.map((genresItem, index) => {
          return <li key={`${genresItem}-${index}`}>{genresItem}</li>;
        })}
      </ul>
      <p>{summary}</p>;
    </>
  );
}

export default Movie;
