import React, { useRef, useState } from 'react'
import Movies from '../movies/Movies'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './MoviesList.scss'

function MoviesLists(props) {

    const movies_wrapper_reference = useRef();
    const[slide_number, setslide_number] = useState(0);

    function sliderClick(direction){
        let movie_card_width = movies_wrapper_reference.current.getBoundingClientRect().x - 35;
        if(direction === "left" && slide_number > 0){
            movies_wrapper_reference.current.style.transform = `translateX(${232 + movie_card_width}px)`;
            setslide_number(slide_number - 1);
        }
        
        if(direction === "right" && slide_number < 4){
            movies_wrapper_reference.current.style.transform = `translateX(${-232 + movie_card_width}px)`
            setslide_number(slide_number + 1);
        }
    
    }

  return (
    <div className='List_Container'>
        <span>
            {props.title}
        </span>
        <div className='sider_movies'>
            <ArrowBackIosIcon className='slider left' onClick = {() => sliderClick("left")}/>
            <div className='Movies_Wrapper' ref={movies_wrapper_reference}>
                <Movies />
                <Movies />
                <Movies />
                <Movies />
                <Movies />
                <Movies />
                <Movies />
                <Movies />
                <Movies />
            </div>
            <ArrowForwardIosIcon className='slider right' onClick = {() => sliderClick("right")}/>
        </div>
    </div>
  )
}

export default MoviesLists