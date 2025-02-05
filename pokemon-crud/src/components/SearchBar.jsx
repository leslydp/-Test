
const SearchBar = ({query, setQuery, fetchPokemon}) => {
    return(
        <div className="search-bar">
            <input 
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar Pokemon"
            />
            <button onClick={() => fetchPokemon(query)}>
                Buscar
            </button>
        </div>
    );
};

export default SearchBar;

