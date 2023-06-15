import React, { useState } from 'react'
import './Homepage.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined';

function HomePage() {

  const[play, setplay] = useState(false);
  
  const movie_trailer = 'assets/Top Gun Maverick 2022 Dolby 5.1 1080p.mp4';

  return (
    <div className = 'cover'>
      <img className='featured_movie_action' style = {{display: play && 'none'}} src='assets/cropped-1600-900-1241136.png' alt=''/>
      <video className='featured_movie_action' style = {{display: !play && 'none'}} src = {movie_trailer} autoPlay muted loop/>
      <div className='movie_details'>
        <img src='assets/TOP GUN NAME LOGO.png' alt='' />
        <div className='discription'>
          <span>
            Top Gun: Maverick is a 2022 American action drama film directed by Joseph Kosinski and written by Ehren Kruger, 
            Eric Warren Singer, and Christopher McQuarrie from stories by Peter Craig and Justin Marks. The film is a sequel 
            to the 1986 film Top Gun. Tom Cruise reprises his starring role as the naval aviator Maverick.</span>
        </div>
        <div className='btn-group'>
          <button className='play_btn' onClick={() => setplay(true)}>
            <PlayArrowIcon/>
            <span>Play</span>
          </button>
          <button className='info_btn' style = {{display: play && 'none'}}>
            <InfoOutlinedIcon />
            <span>Info</span>
          </button>
          { play && <button className='stop_btn' onClick={() => setplay(false)}>
            <StopCircleOutlinedIcon />
            <span>Stop</span>
            </button>}
        </div>
      </div>
    </div>
  );
}
export default HomePage;









