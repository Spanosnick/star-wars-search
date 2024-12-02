import logo from './logo.svg';
import './App.css';
import {SearchBar} from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <div className='mainContainer'>
          <h2 className='appTitle'>Star Wars Search</h2>
        <SearchBar />

      </div>
    </div>
  );
}

export default App;
