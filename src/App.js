import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import SportsIndex from './components/SportsIndex';
import { Route, Routes, Link, Navigate } from "react-router-dom"

function App() {
  return (
    <div className="App">
    
    <Routes>
        <Route path="/" element={ <Main /> } />
        <Route path="/details" element={ <SportsIndex /> } />
        {/* <Route path="/details/:id" element={ <SportsDetails /> } /> */}
    </Routes>
    </div>
  );
}






export default App;