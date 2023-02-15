import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(true);
  const [loadingMessage, setLoadingMessage] = useState("Loading...");
  const [movieData, setMovieData] = useState([]);
  const [isDescriptionIntro, setDescriptionIntro] = useState(true);
  const getMovie = async () => {
    const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}`);
    const json = await response.json();
    if (json.status_message === "Query was successful") {
      setMovieData(json.data.movie);
      setLoading(false);
    } else {
      setLoadingMessage("Please try again");
    }
    console.log(movieData, "test");
  };

  useEffect(() => {
    if (movieId) getMovie();
  }, [movieId]);

  return (
    <>
      {loading ? (
        <h1>{loadingMessage}</h1>
      ) : (
        <>
          <img
            src={movieData.background_image_original}
            alt={`${movieData.imdb_code}-background-img`}
          />
          <img src={movieData.large_cover_image} alt={`${movieData.imdb_code}-large-cover-img`} />

          <h1>{movieData.title || "(Movie Title)"}</h1>
          <span> RunTime : {movieData.runtime}min</span>

          {movieData.description_intro !== movieData.description_full ? (
            <div
              onClick={() => {
                setDescriptionIntro(!isDescriptionIntro);
              }}
            >
              <p>{isDescriptionIntro ? movieData.description_intro : movieData.description_full}</p>
            </div>
          ) : (
            <p>{movieData.description_full || "(Movie Description)"}</p>
          )}
        </>
      )}
    </>
  );
}

export default Detail;
