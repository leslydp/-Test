const PokemonCard = ({ pokemon, big = false }) =>{
    return (
        <div className={`pokemon-card ${big ? "big" : ""}`}>
            <img
                src={pokemon.sprites.front_default} 
                alt={pokemon.name}
            />
            <h2>{ pokemon.name }</h2>
            <p>ID: { pokemon.id }</p>
            <p>Altura: { pokemon.height }</p>
            <p>Peso: { pokemon.weight }</p>
            <p>Tipos: { pokemon.types.map(t => t.type.name).join(", ")}</p>
        </div>
    );
};

export default PokemonCard;