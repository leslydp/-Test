import { useEffect, useState, useRef, useCallback } from "react";
import './App.css';

function App(){
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const loader = useRef(null);

  const fetchCharacters = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await res.json();
      setCharacters((prev) => {
        const nuevos = data.results.filter(
          (newChar) => !prev.some((existing) => existing.id === newChar.id)
        );
        return [...prev, ...nuevos];
      });

      if(!data.info.next){
        setHasMore(false);
      }
    } catch (error) {
      console.log("Eror al cargar los personajes", error);
      alert("Eror al cargar los personajes" + error);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, [page]);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if(target.isIntersecting && hasMore && !isLoading){
      setPage((prev) => prev + 1);
    }
  }, [hasMore, isLoading]);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleObserver, option);
    if(loader.current){
      observer.observe(loader.current);
    }

    return () => {
      if(loader.current){
        observer.unobserve(loader.current);
      }
    };
  }, [handleObserver]);

  return(
    <div className="App">
      <h1>Personajes de Rick and Morty</h1>
      <div className="grid">
        {characters.map((char) => (
          <div key={char.id} className="card">
            <img src={char.image} alt={char.name} />
            <h2>{char.name}</h2>
            <p>{char.species}</p>
          </div>
        ))}
      </div>
      {hasMore && (
        <div className="loading" ref={loader}>
          <p>{isLoading ? 'Cargando mas personajes...' : 'Scroll para cargar mas'}</p>
        </div>
      )}
    </div>
  );
}

export default App;