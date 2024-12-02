import React, {useState} from "react";
import './DetailsModal.css';

export function DetailsModal() {
    const [modalDisplay, setModalDisplay] = useState(false);

    function toogleModal() {
        setModalDisplay(!modalDisplay);
    }

    return (
        <div className={modalDisplay ? 'detailsModal active ' : 'detailsModal'}>
            <div className="detailsModalcontent">
                <button onClick={toogleModal} className='closeModalBtn'>X</button>
                <h2 className='detailsTitle'> Details Film</h2>
                <h3 className='detailsAttribute'>Title <span>The Hope</span></h3>
                <h3 className='detailsAttribute'>Title <span>The Hope</span></h3>
                <h3 className='detailsAttribute'>Title <span>The Hope</span></h3>
                <h3 className='detailsAttribute'>Title <span>The Hope</span></h3>
                <h3 className='detailsAttribute'>Title <span>The Hope</span></h3>
            </div>
        </div>
    );
}
