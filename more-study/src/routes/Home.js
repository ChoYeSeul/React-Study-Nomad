// useEffect는 화면이 다 그려지고 나서 그 이후 실행된다.
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movieList, setMovieList] = useState([]);
  const getMovieList = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    );
    const json = await response.json();
    setMovieList(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovieList();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        movieList.map((item) => {
          return (
            <Movie
              key={item.id}
              movieId={item.id}
              coverImg={item.medium_cover_image}
              title={item.title}
              genres={item.genres}
              summary={item.summary}
            />
          );
        })
      )}
    </div>
  );
}

Movie.prototype = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Home;
