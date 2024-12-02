import React from "react";
import './FilmCard.css';

export function FilmCard(props) {
    const {title,director,producer,release_date,url} = props;
    function showDetails() {
        console.log(url);

    }
    
    return (
        <div className='generalCard'>
            <h2 className='filmTitle'> {title}</h2>
            <p className='filmDirector'>Director: <span>{director}</span> </p>
            <p className='filmProducer'>Producer: <span>{producer}</span></p>
            <p className='filmReleaseDate'>Release Date: <span>{release_date}</span></p>
            <button onClick={(url)=> showDetails(url)}> Details </button>
        </div>
    );
}
