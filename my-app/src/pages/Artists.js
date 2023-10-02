import Artist from "../artist";
import React, {useEffect, useState} from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";

function Artists() {

    const [artist, setArtist] = useState([]);

    const [page, setPage] = useState(1);

    function prevPage() {
        if (page === 1) {
            return;
        }
        setPage(page - 1);
    }

    function nextPage() {
        setPage(page + 1);
    }

    useEffect(() => {
        fetch(`http://localhost:8000/artists?page=${page}&limit=10`)
            .then(res => res.json())
            .then(json => {
                if (json) {
                    setArtist(json)
                }
            });
    }, [page])


    return (
        <div className="App">
            <header className="App-header">
                {
                    artist.map((artists) => {
                        return <Artist key={artists['id']}
                                       onclick={`/ArtistsDetails/` + artists['id']}
                                       photo={artists['photo']}
                                       name={artists['name']}
                                       description={artists['description']}/>;
                    })
                }
                <div className={'nav'}>
                    <button onClick={prevPage}>⬅️</button>
                    <p>Page {page}</p>
                    <button onClick={nextPage}>➡️</button>
                </div>
            </header>
        </div>
    );
}

export default Artists;