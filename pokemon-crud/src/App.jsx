import { useState, useEffect } from 'react'
import axios from "axios"
import './App.css'
import SearchBar from './components/SearchBar'
import PokemonList from './components/PokemonList'

function App() {
  const [query, setQuery] = useState([]);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() =>{
    fetchRandomPokemons(7);
  },[]);

  const fetchPokemon = async (name) => {
    if(!name.trim()) return;
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      setPokemons([res.data]);
    } catch (error) {
      console.error("Error al obtener los datos", error);
    }
  };

  const fetchRandomPokemons = async (count) => {
    const randomIds = new Set();
    while (randomIds.size < count){
      randomIds.add(Math.floor(Math.random() * 151) + 1);
    }

    try {
      const requests = [...randomIds].map((pokeId) => axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`));
      const responses = await Promise.all(requests);
      setPokemons(responses.map((res) => res.data))
    } catch (error) {
      console.error("Error al obtener los datos", error);
    }
  };

  return (
    <div className="container">
      <SearchBar query={query} setQuery={setQuery} fetchPokemon={fetchPokemon}/>
      <PokemonList pokemons={pokemons}/>
    </div>
  );
}

export default App
