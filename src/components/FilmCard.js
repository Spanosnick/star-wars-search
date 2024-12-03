import React, {useState} from "react";
import './FilmCard.css';
import {useDispatch, useSelector} from "react-redux";
import {toggleModalVisibility} from "../features/general/generalSlice";
import { selectFilms} from "../features/films/filmsSlice";
import {setModalDetails} from "../features/general/generalSlice";

export function FilmCard(props) {
    const {title,director,producer,release_date,url} = props;
    const dispatch = useDispatch();
    const allFilms = useSelector(selectFilms);

    function showDetails() {
        dispatch(toggleModalVisibility());
        const details = allFilms.find((film) => film.url ===  url);
        dispatch(setModalDetails(details));

    }
    return (
        <div className='generalCard'>
            <h2 className='filmTitle'> {title}</h2>
            <p className='filmDirector'>Director: <span>{director}</span> </p>
            <p className='filmProducer'>Producer: <span>{producer}</span></p>
            <p className='filmReleaseDate'>Release Date: <span>{release_date}</span></p>
            <button onClick={showDetails}> Details </button>
        </div>
    );
}
