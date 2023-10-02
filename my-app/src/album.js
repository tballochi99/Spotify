function Album({name, cover, popularity, onclick, release_date, description}) {
    return (
        <div className="artistSpotify albumSpotify">
            <a href={onclick}>
                <div className={'imgAlbum'}>
                    <img src={cover}></img>
                </div>
                <div>
                    <h1>{name}</h1>
                    <p>{release_date}</p>
                    <p>{popularity}</p>
                    <p>{description}</p>
                </div>
            </a>
        </div>
    );

}

export default Album;