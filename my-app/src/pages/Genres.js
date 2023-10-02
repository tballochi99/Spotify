import Genre from "../genre";
import {useEffect, useState} from "react";

function Genres() {

    const [genre, setGenre] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8000/genres`)
            .then(res => res.json())
            .then(json => {
                if (json) {
                    setGenre(json)
                }
            });
    }, [])


    return (
        <div className="App">
            <header className="App-header">
                {
                    genre.map((genres) => {
                        return <Genre key={genres['id']}
                                      onclick={`/genresDetails/` + genres['id']}
                                      name={genres['name']}/>;
                    })
                }
            </header>
        </div>
    );
}

export default Genres;