import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import SportsIndex from './components/SportsIndex';
import { Route, Routes, Link, useNavigate } from "react-router-dom"
import SportsDetails from './components/SportsDetails';
import { useState } from 'react';
import SearchResults from"./components/SearchResults"


function App() {
  let navigate = useNavigate()

  const url="https://sports.api.decathlon.com/groups"
  
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([])
  const [showPage, setShowPage] = useState([])
  
  const searchHandler = (e) => {
    setSearch(e.target.value)
    fetch(url)
    .then((res) => res.json())
    .then((json) => {
      let allSports = json.data
      let sportsCut = allSports.slice(0, 10);
      setResults(sportsCut)
      //  setResults(data.data)
  }) .catch(console.error)
}

async function handleSubmit(e) {
  e.preventDefault()
  const query = e.target.elements.name.value
  console.log(query)
  const url = `https://sports.api.decathlon.com/sports/search/${query}?coordinates=-73.5826985,45.5119864`
  fetch(url)
  .then((res) => res.json())
  .then((json) => {
  setShowPage(json)
// console.log(json)
    navigate("/details/searchResults")
    // if(.........)

})
}

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Main search={search} searchHandler={searchHandler} handleSubmit={handleSubmit} result= {results}/> } />
        <Route path="/details" element={ <SportsIndex /> } />
        <Route path="/details/:id" element={ <SportsDetails /> }/>
        <Route path="/details/searchResults" element={ <SearchResults showPage={showPage}/> } />
      </Routes>
    </div>
  );
}






export default App;