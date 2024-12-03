import './App.css';
import {SearchBar} from "./components/SearchBar";
import {FilmCard} from "./components/FilmCard";
import {useEffect, useState} from "react";
import {fetchFilms} from "./features/films/FilmsSlice";
import {useDispatch, useSelector} from "react-redux";
import {selectFilms, selectFilmsError, selectIsFilmsLoading, selectFilmsNextUrl} from "./features/films/FilmsSlice";
import {Spinner} from "./components/Spinner";
import {DetailsModal} from "./components/DetailsModal";
import {Films} from "./features/films/Films";
import {selectActiveCategory} from "./features/general/generalSlice";
import {People} from "./features/people/People";


function App() {
    let films = useSelector(selectFilms);
    const dispatch = useDispatch();
    const isFilmsLoading = useSelector(selectIsFilmsLoading);
    const filmsError = useSelector(selectFilmsError);
    const activeCategory = useSelector(selectActiveCategory);
    const [loading, setLoading] = useState(false);

    // useEffect to fetch films
    // useEffect(() => {
    //     dispatch(fetchFilms());
    // }, []);
    const handleScroll = (e) => {
        const { scrollTop, scrollHeight, clientHeight } = e.target.scrollingElement;

        if (scrollHeight - scrollTop <= clientHeight + 20) { // Buffer of 100px

            if (!loading) {
                console.log('Reached bottom of page');
                // setLoading(true);

            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); // Cleanup
    }, [loading]);



    return (
        <div className="App">
            <div className='mainContainer'>
                <h2 className='appTitle'>Star Wars Search</h2>
                <SearchBar/>
                {activeCategory === 'films' && <Films/>}
                {activeCategory === 'people' && <People/>}
                <DetailsModal/>
            </div>
        </div>
    );
}

export default App;
