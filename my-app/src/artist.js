function Artist({name, description, photo, bio, onclick}) {
    return (
        <div className="artistSpotify">
            <a href={onclick}>
                <div className={'imgArtist'}>
                    <img src={photo}></img>
                </div>
                <div>
                    <h1>{name}</h1>
                    <p>{description}</p>
                    <p>{bio}</p>
                </div>
            </a>
        </div>
    );

}

export default Artist;