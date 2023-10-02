function Genre({name, onclick}) {
    return (
        <div className="artistSpotify genreSpotify">
            <a href={onclick}>
                <div>
                    <h1>{name}</h1>
                </div>
            </a>
        </div>
    );

}

export default Genre;