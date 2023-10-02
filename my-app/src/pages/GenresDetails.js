import Genre from "../genre";
import Album from "../album";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function GenresDetails() {
    const [genreDetail, setGenreDetail] = useState({});
    const [albums, setAlbums] = useState([]);
    const [albumDetails, setAlbumDetails] = useState([]);
    const {id} = useParams();
    const [loading, setLoading] = useState(false);
    // const [page, setPage] = useState(1);

    useEffect(() => {
        fetch(`http://localhost:8000/genres/${id}`)
            .then((res) => res.json())
            .then((json) => {
                if (json) {
                    setGenreDetail(json['genre']);
                    setAlbums(json['albums']);
                }
            });
    }, [id]);

    useEffect(() => {
        async function fetchAlbumDetails() {
            setLoading(true);
            const albumDetailsPromises = albums.map(async (album) => {
                const res = await fetch(`http://localhost:8000/albums/${album}`);
                const json = await res.json();
                return json["album"];
            });
            const albumDetails = await Promise.all(albumDetailsPromises);
            setAlbumDetails(albumDetails);
            setLoading(false);
        }

        fetchAlbumDetails();
    }, [albums]);


    return (
        <div className="App">
            <header className="App-header">
                <Genre name={genreDetail.name}/>
                {loading ? (
                    <Genre name={'Loading...'}/>
                ) : (albumDetails.map((albumDetail) => (
                        <Album onclick={`/AlbumsDetails/` + albumDetail.id}
                               key={albumDetail.id} cover={albumDetail.cover} name={albumDetail.name}
                               popularity={albumDetail.popularity}/>
                    ))
                )}
            </header>
        </div>
    );

}

export default GenresDetails;
