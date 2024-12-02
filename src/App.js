import logo from './logo.svg';
import './App.css';
import {SearchBar} from "./components/SearchBar";
import {FilmCard} from "./components/FilmCard";

function App() {
    const films = [];

  return (
    <div className="App">
      <div className='mainContainer'>
          <h2 className='appTitle'>Star Wars Search</h2>
        <SearchBar/>
          {films.map((film,index) => {
                return <FilmCard key={index} {...film}/>
          })}

      </div>
    </div>
  );
}

export default App;
