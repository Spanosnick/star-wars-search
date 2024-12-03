import {FilmCard} from "../../components/FilmCard";
import {Spinner} from "../../components/Spinner";
import {useDispatch, useSelector} from "react-redux";
import {fetchFilms, selectFilms, selectFilmsError, selectIsFilmsLoading} from "./FilmsSlice";
import {useEffect} from "react";

export function Films() {
    const films = useSelector(selectFilms);

    const isFilmsLoading = useSelector(selectIsFilmsLoading);
    const filmsError = useSelector(selectFilmsError);

    return (
    <>
        {films.map((film, index) => {
            return <FilmCard key={index} {...film}/>
        })}
        {isFilmsLoading && <Spinner/>}
        {filmsError === true  && <h2 className='noResultsMessage'>No films found please try again !</h2>}
    </>
  );
}
