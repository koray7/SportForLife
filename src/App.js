import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import SportsIndex from './components/SportsIndex';
import { Route, Routes, Link, Navigate } from "react-router-dom"
import SportsDetails from './components/SportsDetails';
import { useState } from 'react';
import react from 'react';



function App() {
  
  const url="https://sports.api.decathlon.com/groups"
  
  const [search, setSearch] = useState ("")
  const [results, setResults] = useState([])
  const searchHandler = (e) => {
  
    setSearch(e.target.value)

  }

function handleSubmit(e) {
  e.preventDefault()
  fetch(url)
  .then((res) => res.json())
  .then((data) => {
      console.log(data)
      setResults(data.data)
  }) .catch(console.error)

}

console.log(results)
  return (
    <div className="App">
    
    <Routes>
        <Route path="/" element={ <Main search={search} searchHandler={searchHandler} handleSubmit={handleSubmit}/> } />
        <Route path="/details" element={ <SportsIndex /> } />
        <Route path="/details/:id" element={ <SportsDetails /> }/>
        {/* <Route path="/details/:id" element={ <SearchBar /> } /> */}
    </Routes>
    </div>
  );
}






export default App;