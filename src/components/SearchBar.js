import React, {useState} from "react";
import {fetchFilms,fetchWithSearchQuery} from "../features/films/filmsSlice";
import {setActiveCategory,setSearchQuery} from "../features/general/generalSlice";
import {useDispatch, useSelector} from "react-redux";


export function SearchBar() {
    const [searchValue,setSearchValue] =  useState('');
    const [selectValue, setSelectValue] = useState('films');
    const dispatch = useDispatch();



     function searchHandler(e){
         const value = e.target.value;
         setSearchValue(value);
         dispatch(setSearchQuery(value));
     }

    function selectHandler(e){
        const value = e.target.value;
        setSelectValue(value);
    }

    function searchWithQuery(){
        dispatch(setActiveCategory(selectValue));
         if (searchValue === ''){
             dispatch(fetchFilms());
         }else {
           dispatch(fetchWithSearchQuery(searchValue));
         }

    }

  return (
    <div className='searchBarContainer'>
        <input type='text' onChange={searchHandler}  placeholder='Leave blank if you want to get all the results '/>
        <select onChange={selectHandler} >
            <option value='films'>Films </option>
            <option value='people'>People </option>
            <option value='planets'>Planet </option>
            <option value='species'>Species </option>
            <option value='starships'>Starships </option>
            <option value='vehicles'>Vehicles </option>
        </select>
        <button onClick={searchWithQuery}>Search</button>
    </div>
  );
}
