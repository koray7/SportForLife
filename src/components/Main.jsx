import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'


function Main({search, searchHandler, handleSubmit}) {
    
    const [main, setMain] = useState ([]);
    const [searchTerm, setSearchTerm] = useState("");
    
    const url = "https://sports.api.decathlon.com/sports"


    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((json) => {
// Json data
            let allSports = json.data
            let twenty = allSports.slice(0,50)
            setMain(twenty)
        })
        .catch(err => {
            console.log(err)
        })
    }, []);

    console.log(search)
    return(
        
        <div>
            <div className="maindiv">
            <h1>Find Your New Way Of Living!</h1>
            <h3>Stay fit, stay healty...</h3><br/>
            </div>
            <h4>You want to be physically active but you don't know which sports is better for you? Click on the sports that you interested in, get information about the sport and see which one can fit in your life!</h4>
            <div>
                <h1>List of Sports</h1>
            </div>
            <div className="Sportlist">
                {main.map(sport => {
                    return (
                        <Link to={`/details/${sport.id}`} key={ sport.id }>
                            {sport.attributes.name}
                        </Link>
                    )
                }
            )}
            </div>
            <div className="additional">
                <h1>For additional sports, you can always look up some more!</h1>
               
               <form className="submitform" onSubmit={handleSubmit}> 
                <input
                className="input"
                type="text" 
                placeholder="Name of the sport" 
                name="name"
                value={search} onChange={searchHandler}
                />
               <i className="SearchIcon"></i>
               <input type="submit" value="Seach" />
               </form>
            </div>
        </div>
    )
}






export default Main
