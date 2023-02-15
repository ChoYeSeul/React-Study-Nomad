import { Link } from "react-router-dom";

import styled from "styled-components";

function Movie(props) {
  const { coverImg, title, genres, summary, movieId } = props;
  return (
    <Container>
      <img src={coverImg} alt={title} />
      <Link to={`/movie/${movieId}`}>{title}</Link>
      <ul>
        {genres.map((genresItem, index) => {
          return <li key={`${genresItem}-${index}`}>{genresItem}</li>;
        })}
      </ul>
      <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
    </Container>
  );
}

export default Movie;

const Container = styled.div``;
