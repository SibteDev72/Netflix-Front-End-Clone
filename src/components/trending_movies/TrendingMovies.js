import React from 'react'
import './TrendingMovies.scss'
import { useState } from 'react';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import { PlayArrow, ThumbDownAltOutlined } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';

function TrendingMovies({ trendingNumber }) {

    const[hovered, sethovered] = useState(false);
    const movie_trailer = 'assets/Top Gun Maverick 2022 Dolby 5.1 1080p.mp4';

  return (
    <div className='trending_movies'
    onMouseEnter = {() => sethovered(true)}
    onMouseLeave = {() => sethovered(false)}
    >
      <div className='trending_title'>
        <span className='title_number'>{trendingNumber}</span>  
        <img className='title_img' src='assets/title_tren.jpg' alt='' />
      </div>
      
      {hovered && (
        <> 
          <video className='movie_trailer' src = {movie_trailer} autoPlay muted loop />
          <div className='movie_info'>
            <div className='info_icons'>
              <PlayArrow className='play_icon'  />
              <AddIcon className='icons' />
              <ThumbUpOutlinedIcon className='icons' />
              <ThumbDownAltOutlined className='icons' />
            </div>
            <div className='movie_details'>
              <span className='length'>2h 11m</span>
              <span className='age_limit'>16+</span>
              <span className='year'>2022</span>
              <span className='quality'>4K</span>
            </div>  
            <div className='movie_description'>
              <span>
                Top Gun: Maverick is a 2022 American action drama film directed by Joseph Kosinski and written by Ehren Kruger.
              </span>
            </div>
            <div className='movie_genre'>
              ACTION / THRILER
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default TrendingMovies