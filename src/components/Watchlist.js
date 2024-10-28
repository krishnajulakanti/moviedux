import React from 'react'
import MovieCard from './MovieCard';

function Watchlist({ movies, watchlist, toggleWatchlist }) {
  return (
    <div>
      <h1 className='title'>Watchlist</h1>
      <div className='watchlist'>
        {
          watchlist.map(id => {
            const movie = movies.find(movie => movie.id === id);
            return <MovieCard
              key={id}
              movie={movie}
              toggleWatchlist={toggleWatchlist}
              isWatchlisted={true}
            />
          })
        }
      </div>
    </div>
  )
}

export default Watchlist