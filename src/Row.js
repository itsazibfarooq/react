import React from 'react'
import axios from './axios.js';

const imgUrl = 'https://image.tmdb.org/t/p/original/';

function Row(props) {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const response = await axios.get(props.fetchUrl);
      setMovies(response.data.results);
      return response;
    }
    fetchData();
  }, [props.fetchUrl]);

  return (
    <div className='row'>
      <h2>{props.title}</h2>

      <div className='row__posters'>
        {movies.map((item) => (
          <img
            key={item.id}
            className={`row__poster ${props.isLargeRow && 'row__posterLarge'}`}
            src={`${imgUrl}${props.isLargeRow ? item.poster_path : item.backdrop_path}`}
            alt={item.name}>
          </img>
        ))}
      </div>
    </div>
  )
}

export default Row
