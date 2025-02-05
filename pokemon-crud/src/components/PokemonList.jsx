import PokemonCard from "./PokemonCard"


const PokemonList = ({pokemons}) => {
    return (
        <div className="pokemon-list container">
            {pokemons.length > 0 && (
        <>
            <PokemonCard pokemon={pokemons[0]} big />
            {pokemons.slice(1).map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
        </>
    )}
        </div>
    );
};

export default PokemonList;
