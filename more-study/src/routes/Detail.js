import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(true);
  const [loadingMessage, setLoadingMessage] = useState("Loading...");
  const [movieData, setMovieData] = useState([]);
  const getMovie = async () => {
    const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}`);
    const json = await response.json();
    if (json.status_message === "Query was successful") {
      setMovieData(json.data.movie);
      setLoading(false);
    } else {
      setLoadingMessage("Please try again");
    }
    console.log(json, "test");
  };

  useEffect(() => {
    if (movieId) getMovie();
  }, [movieId]);

  return (
    <>
      {loading ? (
        <h1>{loadingMessage}</h1>
      ) : (
        <div>
          hello
          {/* <img src={} */}
        </div>
      )}
    </>
  );
}

export default Detail;
