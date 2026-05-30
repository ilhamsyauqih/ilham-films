import { useState } from 'react'
import allMovies from "./data/movies"
import MovieList from "./components/MovieList"
import MovieCard from './components/MovieCard'
import './App.css'
import FilterBar from './components/FilterBar'

function App() {
  const [activeFilter, setActiveFilter] = useState("Semua");

  const filteredMovies = activeFilter === "Semua"
  ? allMovies
  : allMovies.filter((m) => m.genre === activeFilter);

  return (
    <div>
      <h1>Katalog Film Saya</h1>

      <FilterBar 
      activeFilter={activeFilter}
      onFilterChange={setActiveFilter}
      />

      <MovieList movies={filteredMovies} />
    </div>
  )
}

export default App
