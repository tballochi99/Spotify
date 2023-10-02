import React from 'react';
import useFetch from '../fetch';

function Home() {
    const albums = useFetch('http://localhost:8000/albums/');
    const randomAlbum = albums && albums[Math.floor(Math.random() * albums.length)];

    return (
        <div>
            <div className="App">
                <div className="App-header">
                    <div className="random">
                        {randomAlbum && (
                            <div>
                                <a href={`/AlbumsDetails/` + randomAlbum.id}>
                                <h2>{randomAlbum.name}</h2>
                                <img src={randomAlbum.cover} alt="Album cover" />
                                <p>Release Date: {new Date(randomAlbum.release_date * 1000).toLocaleDateString()}</p>
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
