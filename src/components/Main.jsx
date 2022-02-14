import { useState, useEffect } from "react";
import { Link, Navigate } from 'react-router-dom'
import React from "react";
// import ReactDOM from "react-dom";
import SearchResults from "./SearchResults";

function Main({search, searchHandler, handleSubmit, result}) {
    
    const [main, setMain] = useState ([]);

    
    
    const url = "https://sports.api.decathlon.com/sports"
    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((json) => {
// Json data
            let allSports = json.data
            let twenty = allSports.slice(0,52)
            setMain(twenty)
        })
        .catch(err => {
            console.log(err)
        })
    }, []);
    return(
        
        <div>
            <div className="maindiv">
            <h1>Find Your New Way Of Living!</h1>
            <h3>Stay fit, stay healty...</h3><br/>
            </div>
            <h4 className="h4">You want to be physically active but you don't know which sports is better for you? Click on the sports that you interested in, get information about the sport and see which one can fit in your life!</h4>
            <div>
                <h1 className="listOfSports">List of Sports</h1>
            </div>
            <div className="Sportlist">
                {main.map(sport => {
                    return (
                   <button className="sportsButton"><Link to={`/details/${sport.id}`} 
                        style={{ color: 'rgb(82, 109, 195)', textDecoration: 'none' }}
                        key={ sport.id }>
                            {sport.attributes.name}
                        </Link></button> 
                    )
                }
            )}
            </div>
            
            <div className="additional">
                <h1 className="submitText">For additional sports, you can always look up some more!</h1>
               
               <form className="submitform" onSubmit={handleSubmit}> 
                <input
                className="input"
                type="text" 
                placeholder="Name of the sport" 
                name="name"
                value={search} onChange={searchHandler}
                />
               <i className="SearchIcon"></i>
               <button className="Submit" type="submit" >Submit</button>
               </form>
            </div>
        </div>
    )
}






export default Main
