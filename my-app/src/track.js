function Track({cover, name, track_no, mp3, duration, onclick}) {
    return (
        <div className="artistSpotify albumSpotify">
            <a href={onclick}>
                <div className={'imgAlbum'}>
                    <img src={cover}></img>
                </div>
                <div>
                    <p>{track_no} | {name}</p>
                    <p>{duration}</p>
                <audio
                    controls
                    src={mp3}>
                </audio>
                </div>
            </a>
        </div>
    );

}

export default Track;