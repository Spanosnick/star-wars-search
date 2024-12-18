import React, {useState} from "react";
import './DetailsModal.css';
import {useDispatch, useSelector} from "react-redux";
import {toggleModalVisibility, modalVisibility, modalDetails} from "../features/general/generalSlice";


export function DetailsModal() {
    // const [modalDisplay, setModalDisplay] = useState(false);
    const dispatch = useDispatch();
    const isModalVisible = useSelector(modalVisibility);
    const modaldetails = useSelector(modalDetails);

    function toggleModal() {
       dispatch(toggleModalVisibility());
    }

    return (
        <div className={isModalVisible ? 'detailsModal active ' : 'detailsModal'}>
            <div className="detailsModalcontent">
                <button onClick={toggleModal} className='closeModalBtn'>X</button>

                {Object.keys(modaldetails).map((key,value) => {
                    if (Array.isArray(modaldetails[key])) {
                        return (
                            <h3 className='detailsAttribute '
                                key={key}> {key} {modaldetails[key].map((array_value) =>
                                <span className='' key={array_value}>{array_value}</span>)}
                                </h3>
                        )
                    }else {
                        return (
                            <h3 className='detailsAttribute' key={key}> {key} <span>{modaldetails[key]}</span></h3>
                        )
                    }

                })}
            </div>
        </div>
    );
}
// {
//     "title": "Return of the Jedi",
//     "episode_id": 6,
//     "opening_crawl": "Luke Skywalker has returned to\r\nhis home planet of Tatooine in\r\nan attempt to rescue his\r\nfriend Han Solo from the\r\nclutches of the vile gangster\r\nJabba the Hutt.\r\n\r\nLittle does Luke know that the\r\nGALACTIC EMPIRE has secretly\r\nbegun construction on a new\r\narmored space station even\r\nmore powerful than the first\r\ndreaded Death Star.\r\n\r\nWhen completed, this ultimate\r\nweapon will spell certain doom\r\nfor the small band of rebels\r\nstruggling to restore freedom\r\nto the galaxy...",
//     "director": "Richard Marquand",
//     "producer": "Howard G. Kazanjian, George Lucas, Rick McCallum",
//     "release_date": "1983-05-25",
//     "characters": [
//     "https://swapi.dev/api/people/1/",
//     "https://swapi.dev/api/people/2/",
//     "https://swapi.dev/api/people/3/",
//     "https://swapi.dev/api/people/4/",
//     "https://swapi.dev/api/people/5/",
//     "https://swapi.dev/api/people/10/",
//     "https://swapi.dev/api/people/13/",
//     "https://swapi.dev/api/people/14/",
//     "https://swapi.dev/api/people/16/",
//     "https://swapi.dev/api/people/18/",
//     "https://swapi.dev/api/people/20/",
//     "https://swapi.dev/api/people/21/",
//     "https://swapi.dev/api/people/22/",
//     "https://swapi.dev/api/people/25/",
//     "https://swapi.dev/api/people/27/",
//     "https://swapi.dev/api/people/28/",
//     "https://swapi.dev/api/people/29/",
//     "https://swapi.dev/api/people/30/",
//     "https://swapi.dev/api/people/31/",
//     "https://swapi.dev/api/people/45/"
// ],
//     "planets": [
//     "https://swapi.dev/api/planets/1/",
//     "https://swapi.dev/api/planets/5/",
//     "https://swapi.dev/api/planets/7/",
//     "https://swapi.dev/api/planets/8/",
//     "https://swapi.dev/api/planets/9/"
// ],
//     "starships": [
//     "https://swapi.dev/api/starships/2/",
//     "https://swapi.dev/api/starships/3/",
//     "https://swapi.dev/api/starships/10/",
//     "https://swapi.dev/api/starships/11/",
//     "https://swapi.dev/api/starships/12/",
//     "https://swapi.dev/api/starships/15/",
//     "https://swapi.dev/api/starships/17/",
//     "https://swapi.dev/api/starships/22/",
//     "https://swapi.dev/api/starships/23/",
//     "https://swapi.dev/api/starships/27/",
//     "https://swapi.dev/api/starships/28/",
//     "https://swapi.dev/api/starships/29/"
// ],
//     "vehicles": [
//     "https://swapi.dev/api/vehicles/8/",
//     "https://swapi.dev/api/vehicles/16/",
//     "https://swapi.dev/api/vehicles/18/",
//     "https://swapi.dev/api/vehicles/19/",
//     "https://swapi.dev/api/vehicles/24/",
//     "https://swapi.dev/api/vehicles/25/",
//     "https://swapi.dev/api/vehicles/26/",
//     "https://swapi.dev/api/vehicles/30/"
// ],
//     "species": [
//     "https://swapi.dev/api/species/1/",
//     "https://swapi.dev/api/species/2/",
//     "https://swapi.dev/api/species/3/",
//     "https://swapi.dev/api/species/5/",
//     "https://swapi.dev/api/species/6/",
//     "https://swapi.dev/api/species/8/",
//     "https://swapi.dev/api/species/9/",
//     "https://swapi.dev/api/species/10/",
//     "https://swapi.dev/api/species/15/"
// ],
//     "created": "2014-12-18T10:39:33.255000Z",
//     "edited": "2014-12-20T09:48:37.462000Z",
//     "url": "https://swapi.dev/api/films/3/"
// },
// {
//     "title": "The Phantom Menace",
//     "episode_id": 1,
//     "opening_crawl": "Turmoil has engulfed the\r\nGalactic Republic. The taxation\r\nof trade routes to outlying star\r\nsystems is in dispute.\r\n\r\nHoping to resolve the matter\r\nwith a blockade of deadly\r\nbattleships, the greedy Trade\r\nFederation has stopped all\r\nshipping to the small planet\r\nof Naboo.\r\n\r\nWhile the Congress of the\r\nRepublic endlessly debates\r\nthis alarming chain of events,\r\nthe Supreme Chancellor has\r\nsecretly dispatched two Jedi\r\nKnights, the guardians of\r\npeace and justice in the\r\ngalaxy, to settle the conflict....",
//     "director": "George Lucas",
//     "producer": "Rick McCallum",
//     "release_date": "1999-05-19",
//     "characters": [
//     "https://swapi.dev/api/people/2/",
//     "https://swapi.dev/api/people/3/",
//     "https://swapi.dev/api/people/10/",
//     "https://swapi.dev/api/people/11/",
//     "https://swapi.dev/api/people/16/",
//     "https://swapi.dev/api/people/20/",
//     "https://swapi.dev/api/people/21/",
//     "https://swapi.dev/api/people/32/",
//     "https://swapi.dev/api/people/33/",
//     "https://swapi.dev/api/people/34/",
//     "https://swapi.dev/api/people/35/",
//     "https://swapi.dev/api/people/36/",
//     "https://swapi.dev/api/people/37/",
//     "https://swapi.dev/api/people/38/",
//     "https://swapi.dev/api/people/39/",
//     "https://swapi.dev/api/people/40/",
//     "https://swapi.dev/api/people/41/",
//     "https://swapi.dev/api/people/42/",
//     "https://swapi.dev/api/people/43/",
//     "https://swapi.dev/api/people/44/",
//     "https://swapi.dev/api/people/46/",
//     "https://swapi.dev/api/people/47/",
//     "https://swapi.dev/api/people/48/",
//     "https://swapi.dev/api/people/49/",
//     "https://swapi.dev/api/people/50/",
//     "https://swapi.dev/api/people/51/",
//     "https://swapi.dev/api/people/52/",
//     "https://swapi.dev/api/people/53/",
//     "https://swapi.dev/api/people/54/",
//     "https://swapi.dev/api/people/55/",
//     "https://swapi.dev/api/people/56/",
//     "https://swapi.dev/api/people/57/",
//     "https://swapi.dev/api/people/58/",
//     "https://swapi.dev/api/people/59/"
// ],
//     "planets": [
//     "https://swapi.dev/api/planets/1/",
//     "https://swapi.dev/api/planets/8/",
//     "https://swapi.dev/api/planets/9/"
// ],
//     "starships": [
//     "https://swapi.dev/api/starships/31/",
//     "https://swapi.dev/api/starships/32/",
//     "https://swapi.dev/api/starships/39/",
//     "https://swapi.dev/api/starships/40/",
//     "https://swapi.dev/api/starships/41/"
// ],
//     "vehicles": [
//     "https://swapi.dev/api/vehicles/33/",
//     "https://swapi.dev/api/vehicles/34/",
//     "https://swapi.dev/api/vehicles/35/",
//     "https://swapi.dev/api/vehicles/36/",
//     "https://swapi.dev/api/vehicles/37/",
//     "https://swapi.dev/api/vehicles/38/",
//     "https://swapi.dev/api/vehicles/42/"
// ],
//     "species": [
//     "https://swapi.dev/api/species/1/",
//     "https://swapi.dev/api/species/2/",
//     "https://swapi.dev/api/species/6/",
//     "https://swapi.dev/api/species/11/",
//     "https://swapi.dev/api/species/12/",
//     "https://swapi.dev/api/species/13/",
//     "https://swapi.dev/api/species/14/",
//     "https://swapi.dev/api/species/15/",
//     "https://swapi.dev/api/species/16/",
//     "https://swapi.dev/api/species/17/",
//     "https://swapi.dev/api/species/18/",
//     "https://swapi.dev/api/species/19/",
//     "https://swapi.dev/api/species/20/",
//     "https://swapi.dev/api/species/21/",
//     "https://swapi.dev/api/species/22/",
//     "https://swapi.dev/api/species/23/",
//     "https://swapi.dev/api/species/24/",
//     "https://swapi.dev/api/species/25/",
//     "https://swapi.dev/api/species/26/",
//     "https://swapi.dev/api/species/27/"
// ],
//     "created": "2014-12-19T16:52:55.740000Z",
//     "edited": "2014-12-20T10:54:07.216000Z",
//     "url": "https://swapi.dev/api/films/4/"
// },
// {
//     "title": "Attack of the Clones",
//     "episode_id": 2,
//     "opening_crawl": "There is unrest in the Galactic\r\nSenate. Several thousand solar\r\nsystems have declared their\r\nintentions to leave the Republic.\r\n\r\nThis separatist movement,\r\nunder the leadership of the\r\nmysterious Count Dooku, has\r\nmade it difficult for the limited\r\nnumber of Jedi Knights to maintain \r\npeace and order in the galaxy.\r\n\r\nSenator Amidala, the former\r\nQueen of Naboo, is returning\r\nto the Galactic Senate to vote\r\non the critical issue of creating\r\nan ARMY OF THE REPUBLIC\r\nto assist the overwhelmed\r\nJedi....",
//     "director": "George Lucas",
//     "producer": "Rick McCallum",
//     "release_date": "2002-05-16",
//     "characters": [
//     "https://swapi.dev/api/people/2/",
//     "https://swapi.dev/api/people/3/",
//     "https://swapi.dev/api/people/6/",
//     "https://swapi.dev/api/people/7/",
//     "https://swapi.dev/api/people/10/",
//     "https://swapi.dev/api/people/11/",
//     "https://swapi.dev/api/people/20/",
//     "https://swapi.dev/api/people/21/",
//     "https://swapi.dev/api/people/22/",
//     "https://swapi.dev/api/people/33/",
//     "https://swapi.dev/api/people/35/",
//     "https://swapi.dev/api/people/36/",
//     "https://swapi.dev/api/people/40/",
//     "https://swapi.dev/api/people/43/",
//     "https://swapi.dev/api/people/46/",
//     "https://swapi.dev/api/people/51/",
//     "https://swapi.dev/api/people/52/",
//     "https://swapi.dev/api/people/53/",
//     "https://swapi.dev/api/people/58/",
//     "https://swapi.dev/api/people/59/",
//     "https://swapi.dev/api/people/60/",
//     "https://swapi.dev/api/people/61/",
//     "https://swapi.dev/api/people/62/",
//     "https://swapi.dev/api/people/63/",
//     "https://swapi.dev/api/people/64/",
//     "https://swapi.dev/api/people/65/",
//     "https://swapi.dev/api/people/66/",
//     "https://swapi.dev/api/people/67/",
//     "https://swapi.dev/api/people/68/",
//     "https://swapi.dev/api/people/69/",
//     "https://swapi.dev/api/people/70/",
//     "https://swapi.dev/api/people/71/",
//     "https://swapi.dev/api/people/72/",
//     "https://swapi.dev/api/people/73/",
//     "https://swapi.dev/api/people/74/",
//     "https://swapi.dev/api/people/75/",
//     "https://swapi.dev/api/people/76/",
//     "https://swapi.dev/api/people/77/",
//     "https://swapi.dev/api/people/78/",
//     "https://swapi.dev/api/people/82/"
// ],
//     "planets": [
//     "https://swapi.dev/api/planets/1/",
//     "https://swapi.dev/api/planets/8/",
//     "https://swapi.dev/api/planets/9/",
//     "https://swapi.dev/api/planets/10/",
//     "https://swapi.dev/api/planets/11/"
// ],
//     "starships": [
//     "https://swapi.dev/api/starships/21/",
//     "https://swapi.dev/api/starships/32/",
//     "https://swapi.dev/api/starships/39/",
//     "https://swapi.dev/api/starships/43/",
//     "https://swapi.dev/api/starships/47/",
//     "https://swapi.dev/api/starships/48/",
//     "https://swapi.dev/api/starships/49/",
//     "https://swapi.dev/api/starships/52/",
//     "https://swapi.dev/api/starships/58/"
// ],
//     "vehicles": [
//     "https://swapi.dev/api/vehicles/4/",
//     "https://swapi.dev/api/vehicles/44/",
//     "https://swapi.dev/api/vehicles/45/",
//     "https://swapi.dev/api/vehicles/46/",
//     "https://swapi.dev/api/vehicles/50/",
//     "https://swapi.dev/api/vehicles/51/",
//     "https://swapi.dev/api/vehicles/53/",
//     "https://swapi.dev/api/vehicles/54/",
//     "https://swapi.dev/api/vehicles/55/",
//     "https://swapi.dev/api/vehicles/56/",
//     "https://swapi.dev/api/vehicles/57/"
// ],
//     "species": [
//     "https://swapi.dev/api/species/1/",
//     "https://swapi.dev/api/species/2/",
//     "https://swapi.dev/api/species/6/",
//     "https://swapi.dev/api/species/12/",
//     "https://swapi.dev/api/species/13/",
//     "https://swapi.dev/api/species/15/",
//     "https://swapi.dev/api/species/28/",
//     "https://swapi.dev/api/species/29/",
//     "https://swapi.dev/api/species/30/",
//     "https://swapi.dev/api/species/31/",
//     "https://swapi.dev/api/species/32/",
//     "https://swapi.dev/api/species/33/",
//     "https://swapi.dev/api/species/34/",
//     "https://swapi.dev/api/species/35/"
// ],
//     "created": "2014-12-20T10:57:57.886000Z",
//     "edited": "2014-12-20T20:18:48.516000Z",
//     "url": "https://swapi.dev/api/films/5/"
// },
// {
//     "title": "Revenge of the Sith",
//     "episode_id": 3,
//     "opening_crawl": "War! The Republic is crumbling\r\nunder attacks by the ruthless\r\nSith Lord, Count Dooku.\r\nThere are heroes on both sides.\r\nEvil is everywhere.\r\n\r\nIn a stunning move, the\r\nfiendish droid leader, General\r\nGrievous, has swept into the\r\nRepublic capital and kidnapped\r\nChancellor Palpatine, leader of\r\nthe Galactic Senate.\r\n\r\nAs the Separatist Droid Army\r\nattempts to flee the besieged\r\ncapital with their valuable\r\nhostage, two Jedi Knights lead a\r\ndesperate mission to rescue the\r\ncaptive Chancellor....",
//     "director": "George Lucas",
//     "producer": "Rick McCallum",
//     "release_date": "2005-05-19",
//     "characters": [
//     "https://swapi.dev/api/people/1/",
//     "https://swapi.dev/api/people/2/",
//     "https://swapi.dev/api/people/3/",
//     "https://swapi.dev/api/people/4/",
//     "https://swapi.dev/api/people/5/",
//     "https://swapi.dev/api/people/6/",
//     "https://swapi.dev/api/people/7/",
//     "https://swapi.dev/api/people/10/",
//     "https://swapi.dev/api/people/11/",
//     "https://swapi.dev/api/people/12/",
//     "https://swapi.dev/api/people/13/",
//     "https://swapi.dev/api/people/20/",
//     "https://swapi.dev/api/people/21/",
//     "https://swapi.dev/api/people/33/",
//     "https://swapi.dev/api/people/35/",
//     "https://swapi.dev/api/people/46/",
//     "https://swapi.dev/api/people/51/",
//     "https://swapi.dev/api/people/52/",
//     "https://swapi.dev/api/people/53/",
//     "https://swapi.dev/api/people/54/",
//     "https://swapi.dev/api/people/55/",
//     "https://swapi.dev/api/people/56/",
//     "https://swapi.dev/api/people/58/",
//     "https://swapi.dev/api/people/63/",
//     "https://swapi.dev/api/people/64/",
//     "https://swapi.dev/api/people/67/",
//     "https://swapi.dev/api/people/68/",
//     "https://swapi.dev/api/people/75/",
//     "https://swapi.dev/api/people/78/",
//     "https://swapi.dev/api/people/79/",
//     "https://swapi.dev/api/people/80/",
//     "https://swapi.dev/api/people/81/",
//     "https://swapi.dev/api/people/82/",
//     "https://swapi.dev/api/people/83/"
// ],
//     "planets": [
//     "https://swapi.dev/api/planets/1/",
//     "https://swapi.dev/api/planets/2/",
//     "https://swapi.dev/api/planets/5/",
//     "https://swapi.dev/api/planets/8/",
//     "https://swapi.dev/api/planets/9/",
//     "https://swapi.dev/api/planets/12/",
//     "https://swapi.dev/api/planets/13/",
//     "https://swapi.dev/api/planets/14/",
//     "https://swapi.dev/api/planets/15/",
//     "https://swapi.dev/api/planets/16/",
//     "https://swapi.dev/api/planets/17/",
//     "https://swapi.dev/api/planets/18/",
//     "https://swapi.dev/api/planets/19/"
// ],
//     "starships": [
//     "https://swapi.dev/api/starships/2/",
//     "https://swapi.dev/api/starships/32/",
//     "https://swapi.dev/api/starships/48/",
//     "https://swapi.dev/api/starships/59/",
//     "https://swapi.dev/api/starships/61/",
//     "https://swapi.dev/api/starships/63/",
//     "https://swapi.dev/api/starships/64/",
//     "https://swapi.dev/api/starships/65/",
//     "https://swapi.dev/api/starships/66/",
//     "https://swapi.dev/api/starships/68/",
//     "https://swapi.dev/api/starships/74/",
//     "https://swapi.dev/api/starships/75/"
// ],
//     "vehicles": [
//     "https://swapi.dev/api/vehicles/33/",
//     "https://swapi.dev/api/vehicles/50/",
//     "https://swapi.dev/api/vehicles/53/",
//     "https://swapi.dev/api/vehicles/56/",
//     "https://swapi.dev/api/vehicles/60/",
//     "https://swapi.dev/api/vehicles/62/",
//     "https://swapi.dev/api/vehicles/67/",
//     "https://swapi.dev/api/vehicles/69/",
//     "https://swapi.dev/api/vehicles/70/",
//     "https://swapi.dev/api/vehicles/71/",
//     "https://swapi.dev/api/vehicles/72/",
//     "https://swapi.dev/api/vehicles/73/",
//     "https://swapi.dev/api/vehicles/76/"
// ],
//     "species": [
//     "https://swapi.dev/api/species/1/",
//     "https://swapi.dev/api/species/2/",
//     "https://swapi.dev/api/species/3/",
//     "https://swapi.dev/api/species/6/",
//     "https://swapi.dev/api/species/15/",
//     "https://swapi.dev/api/species/19/",
//     "https://swapi.dev/api/species/20/",
//     "https://swapi.dev/api/species/23/",
//     "https://swapi.dev/api/species/24/",
//     "https://swapi.dev/api/species/25/",
//     "https://swapi.dev/api/species/26/",
//     "https://swapi.dev/api/species/27/",
//     "https://swapi.dev/api/species/28/",
//     "https://swapi.dev/api/species/29/",
//     "https://swapi.dev/api/species/30/",
//     "https://swapi.dev/api/species/33/",
//     "https://swapi.dev/api/species/34/",
//     "https://swapi.dev/api/species/35/",
//     "https://swapi.dev/api/species/36/",
//     "https://swapi.dev/api/species/37/"
// ],
//     "created": "2014-12-20T18:49:38.403000Z",
//     "edited": "2014-12-20T20:47:52.073000Z",
//     "url": "https://swapi.dev/api/films/6/"
// }
