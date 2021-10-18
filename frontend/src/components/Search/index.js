import './search.css';

function Search({ searchQuery, setSearchQuery }) {

    return (
        <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search Events</span>
        </label>
        <input
            className="search"
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}

            type="text"
            id="header-search"
            placeholder="Search Events"
            name="s"
        />

    </form>
    )
}

export default Search;
