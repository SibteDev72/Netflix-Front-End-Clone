import React from 'react'
import './TrendingMoviesList.scss'
import { useRef, useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TrendingMovies from '../trending_movies/TrendingMovies';

function TrendingMoviesList(props) {

    const movies_wrapper_reference = useRef();
    const[slide_number, setslide_number] = useState(0);

    function sliderClick(direction){
        let movie_card_width = movies_wrapper_reference.current.getBoundingClientRect().x - 35;
        if(direction === "left" && slide_number > 0){
            movies_wrapper_reference.current.style.transform = `translateX(${230 + movie_card_width}px)`;
            setslide_number(slide_number - 1);
        }
        
        if(direction === "right" && slide_number < 5){
            movies_wrapper_reference.current.style.transform = `translateX(${-230 + movie_card_width}px)`
            setslide_number(slide_number + 1);
        }
    
    }

  return (
    <div className='List_Container'>
        <span>
            {props.title}
        </span>
        <div className='trending_sider_movies'>
            <ArrowBackIosIcon className='slider left' onClick = {() => sliderClick("left")}/>
            <div className='Movies_Wrapper' ref={movies_wrapper_reference}>
                <TrendingMovies trendingNumber = '1' />
                <TrendingMovies trendingNumber = '2' />
                <TrendingMovies trendingNumber = '3' />
                <TrendingMovies trendingNumber = '4' />
                <TrendingMovies trendingNumber = '5' />
                <TrendingMovies trendingNumber = '6' />
                <TrendingMovies trendingNumber = '7' />
                <TrendingMovies trendingNumber = '8' />
                <TrendingMovies trendingNumber = '9' />
                <TrendingMovies trendingNumber = '9' />
            </div>
            <ArrowForwardIosIcon className='slider right' onClick = {() => sliderClick("right")}/>
        </div>
    </div>
  )
}

export default TrendingMoviesList