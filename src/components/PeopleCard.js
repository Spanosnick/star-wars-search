import React, {useState} from "react";
import './FilmCard.css';
import {useDispatch, useSelector} from "react-redux";
import {toggleModalVisibility} from "../features/general/generalSlice";
import {setModalDetails} from "../features/general/generalSlice";
import {selectPeople} from "../features/people/PeopleSlice";

export function PeopleCard(props) {
    const {name,height,mass,birth_year,gender,url} = props;
    const dispatch = useDispatch();
    const allPeople = useSelector(selectPeople);

    function showDetails() {
        dispatch(toggleModalVisibility());
        const person = allPeople.find(person => person.url === url);
        dispatch(setModalDetails(person));

    }
    return (
        <div className='generalCard'>
            <h2 className='filmTitle'> {name}</h2>
            <p className='filmDirector'>Height: <span>{height}</span> </p>
            <p className='filmProducer'>Mass: <span>{mass}</span></p>
            <p className='filmReleaseDate'>Birth Year: <span>{birth_year}</span></p>
            <p className='filmReleaseDate'>Gender: <span>{gender}</span></p>
            <button onClick={showDetails}> Details </button>
        </div>
    );
}
