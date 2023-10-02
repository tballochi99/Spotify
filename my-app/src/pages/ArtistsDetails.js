import Artist from "../artist";
import Album from "../album";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

function ArtistsDetails() {

    const [artistDetail, setArtistDetail] = useState([]);
    const [albums, setAlbums] = useState([]);
    // const [page, setPage] = useState(1);
    const {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:8000/artists/${id}`)
            .then(res => res.json())
            .then(json => {
                if (json) {
                    setArtistDetail(json)
                }
            });
        fetch(`http://localhost:8000/albums/`)
            .then(res => res.json())
            .then(json => {
                if (json) {
                    const filteredAlbums = json.filter(album => album.artist_id === parseInt(id));
                    setAlbums(filteredAlbums);
                }
            });
    }, [id])

    return (
        <div className="App">
            <header className="App-header">
                <Artist key={artistDetail.id} photo={artistDetail.photo} name={artistDetail.name} description={artistDetail.description} bio={artistDetail.bio}/>
                {
                    albums.map((album) => {
                        return <Album key={album['id']}
                                      onclick={`/AlbumsDetails/${album['id']}`}
                                      cover={album['cover']} name={album['name']}
                                      popularity={album['popularity']}/>;
                    })
                }
            </header>
        </div>
    );
}

export default ArtistsDetails;
