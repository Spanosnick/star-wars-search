import React, {useState} from "react";
import {fetchFilms, fetchFilmsWithSearch} from "../features/films/FilmsSlice";
import {setActiveCategory,setSearchQuery} from "../features/general/generalSlice";
import {useDispatch, useSelector} from "react-redux";
import './SearchBar.css'
import {fetchPeople, fetchPeopleWithSearch} from "../features/people/PeopleSlice";


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
        if (selectValue === 'films' && searchValue === ''){
            dispatch(fetchFilms());
        }else if (selectValue === 'films' && searchValue !== ''){
            dispatch(fetchFilmsWithSearch(searchValue));
        }else if (selectValue === 'people' && searchValue === '') {
            dispatch(fetchPeople());
        }else if (selectValue === 'people' && searchValue !== '') {
            dispatch(fetchPeopleWithSearch(searchValue));
        }


    }

  return (
    <div className='searchBarContainer'>
        <input type='text' onChange={searchHandler}  placeholder='Leave blank if you want to get all the results '/>
        <select onChange={selectHandler} >
            <option value='films'>Films </option>
            <option value='people'>People </option>
        </select>
        <button onClick={searchWithQuery}>Search</button>
    </div>
  );
}
