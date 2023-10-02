import Album from "../album";
import {useEffect, useState} from "react";

function Albums() {

    const [album, setAlbum] = useState([]);

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
        fetch(`http://localhost:8000/albums?page=${page}&limit=10`)
            .then(res => res.json())
            .then(json => {
                if (json) {
                    setAlbum(json)
                }
            });
    }, [page])


    return (
        <div className="App">
            <header className="App-header">
                {
                    album.map((albums) => {
                        return <Album key={albums['id']}
                                      onclick={`/AlbumsDetails/` + albums['id'] }
                                      cover={albums['cover']} name={albums['name']}
                                      popularity={albums['popularity']}/>;
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

export default Albums;