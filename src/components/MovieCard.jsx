import React from 'react'
import { Link } from 'react-router-dom'
import FavoriteButton from './FavoriteButton'
const MovieCard = ({movie }) => {
    
    const {title, vote_average, poster_path, id} = movie
  return (
    <div className="movieCard">
       <Link to={`movie/${id}`} > <img className='moviePoster' src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" /> </Link>
        <div className="movieCardFooter">
            <div className="movieCardDetails">
                <h2 className="movieCardTitle">{title}</h2>
                <p className='movieCardRating'>{vote_average}</p>  //rating
            </div>
           <FavoriteButton movie= {movie} />
        </div>
    </div>
  )
}

export default MovieCard