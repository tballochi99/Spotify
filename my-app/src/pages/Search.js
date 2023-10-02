import React, { useState } from 'react';
import useFetch from '../fetch';
import Artist from "../artist";
import Genre from "../genre";
import Album from "../album";

function Search() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchType, setSearchType] = useState('artist');
    const [url, setUrl] = useState('');

    const apiResponse = useFetch(url);
    const searchResults = apiResponse ? apiResponse : null;

    const handleSubmit = (e) => {
        e.preventDefault();
        setUrl(`http://localhost:8000/search?query=${searchQuery}&type=${searchType}`);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Recherche..."
                />
                <select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
                    <option value="artist">Artiste</option>
                    <option value="genre">Genre</option>
                    <option value="album">Album</option>
                </select>
                <button type="submit">Rechercher</button>
            </form>
            {searchResults && (
                <div>
                    {searchResults.genres && (
                        <div className="App">
                            <header className="App-header">
                                {searchResults.genres.map((result) => (
                                    <Genre key={result.id}
                                           onclick={`/genresDetails/` + result.id}
                                           name={result.name}/>
                                ))}
                            </header>
                        </div>
                    )}
                    {searchResults.artists && (
                        <div className="App">
                            <header className="App-header">
                                {searchResults.artists.map((result) => (
                                    <Artist key={result.id}
                                            onclick={`/ArtistsDetails/` + result.id}
                                            photo={result.photo}
                                            name={result.name}
                                            description={result.description}/>
                                ))}
                            </header>
                        </div>
                    )}
                    {searchResults.albums && (
                        <div className="App">
                            <header className="App-header">
                                {searchResults.albums.map((result) => (
                                    <Album key={result.id}
                                           onclick={`/AlbumsDetails/` + result.id}
                                           cover={result.cover} name={result.name}
                                           popularity={result.popularity}/>
                                ))}
                            </header>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Search;
