import Album from "../album";
import Track from "../track";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

function AlbumsDetails() {

    const [albumDetail, setAlbumDetail] = useState([]);
    const [tracks, setTracks] = useState([]);
    // const [page, setPage] = useState(1);
    const {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:8000/albums/${id}`)
            .then(res => res.json())
            .then(json => {
                if (json) {
                    setAlbumDetail(json['album'])
                    setTracks(json['tracks'])
                }
            });
    }, [id])

    return (
        <div className="App">
            <header className="App-header">
                <Album cover={albumDetail.cover} name={albumDetail.name} popularity={albumDetail.popularity} bio={albumDetail.bio} release_date={new Date(albumDetail.release_date * 1000).toLocaleDateString()} description={albumDetail.description}/>
                {tracks.map(track => (
                    <Track cover={albumDetail.cover} key={track.id} name={track.name} track_no={track.track_no} mp3={track.mp3}/>
                ))}
            </header>
        </div>
    );
}

export default AlbumsDetails;
