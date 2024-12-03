import {useDispatch, useSelector} from "react-redux";
import {fetchPeople, selectIsPeopleLoading, selectPeople, selectPeopleError, selectPeopleNextUrl} from "./PeopleSlice";
import {Spinner} from "../../components/Spinner";

import {PeopleCard} from "../../components/PeopleCard";

export function People() {
    const dispatch = useDispatch();
    const people = useSelector(selectPeople);
    const isPeopleLoading = useSelector(selectIsPeopleLoading);
    const peopleError = useSelector(selectPeopleError);
    const peopleNextUrl = useSelector(selectPeopleNextUrl);
    function loadMorePeople() {
        dispatch(fetchPeople());
    }
  return (
    <>
        {people.map((person, index) => {
            return <PeopleCard key={index} {...person} />;
        })}
        {isPeopleLoading && <Spinner />}
        {peopleNextUrl !== null && <a className='loadMoreText' onClick={loadMorePeople}>Load More Data</a>}
        {peopleError === true && (
            <h2 className="noResultsMessage">No people found please try again !</h2>
        )}

    </>
  );
}
