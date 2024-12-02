import React from "react";

export function SearchBar() {
  return (
    <div className='searchBarContainer'>
        <input type='text' placeholder='Leave blank if you want to get all the results '/>
        <select>
            <option value='films'>Films </option>
            <option value='people'>People </option>
            <option value='planets'>Planet </option>
            <option value='species'>Species </option>
            <option value='starships'>Starships </option>
            <option value='vehicles'>Vehicles </option>
        </select>
        <button>Search</button>
    </div>
  );
}
