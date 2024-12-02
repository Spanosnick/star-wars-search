import './App.css';
import {SearchBar} from "./components/SearchBar";
import {FilmCard} from "./components/FilmCard";
import {useEffect, useState} from "react";
import {fetchFilms} from "./features/films/filmsSlice";
import {useDispatch, useSelector} from "react-redux";
import {selectFilms, selectFilmsError, selectIsFilmsLoading, selectFilmsNextUrl} from "./features/films/filmsSlice";
import {Spinner} from "./components/Spinner";
import {DetailsModal} from "./components/DetailsModal";


function App() {
    let films = useSelector(selectFilms);
    const dispatch = useDispatch();
    const isFilmsLoading = useSelector(selectIsFilmsLoading);
    const filmsError = useSelector(selectFilmsError);

    // useEffect to fetch films
    // useEffect(() => {
    //     dispatch(fetchFilms());
    // }, []);


    return (
        <div className="App">
            <div className='mainContainer'>
                <h2 className='appTitle'>Star Wars Search</h2>
                <SearchBar/>
                {films.map((film, index) => {
                    return <FilmCard key={index} {...film}/>
                })}
                {isFilmsLoading && <Spinner/>}
                {filmsError === true  && <h2 className='noResultsMessage'>No films found please try again !</h2>}
                <DetailsModal/>
            </div>
        </div>
    );
}

export default App;
