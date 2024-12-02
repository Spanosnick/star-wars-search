import React from "react";

export function FilmCard(props) {
    const {title,director,producer,release_date,url} = props;
    return (
        <div className='generalCard'>
            <h2>Title:{title}</h2>
            <p>Director{director}</p>
            <p>Producer:{producer}</p>
            <p>Release Date:{release_date}</p>
            <button>Details{url}</button>
        </div>
    );
}
