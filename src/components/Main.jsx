import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'


function Main() {
    
    const [main, setMain] = useState ([])
    
    const url = "https://sports.api.decathlon.com/sports"

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((json) => {
            console.log("This is the json.data", json.data)
            console.log("this is the json", json)
            let allSports = json.data
            let twenty = allSports.slice(0,50)
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
               <form className="submitform"> 
               {/* onSubmit={handleSubmit} */}
                <input
                className="input"
                type="text" 
                placeholder="Name of the sport" 
                name="name"
                // value={sportsInput.name}
                // onChange={handleChange}
                />
               <input type="submit" value="Seach" />
               </form>
            </div>
        </div>
    )
}






export default Main

























{/* <Link to={`/details`}><h4>Road cycling</h4></Link>
                <Link to={`/details`}><h4>Hybrid biking</h4></Link>
                <Link to={`/details`}><h4>Swimming</h4></Link>
                <Link to={`/details`}><h4>Horse competition</h4></Link>
                <Link to={`/details`}><h4>Running</h4></Link>
                <Link to={`/details`}><h4>Soccer</h4></Link>
                <Link to={`/details`}><h4>Fitness</h4></Link>
                <Link to={`/details`}><h4>Surfing</h4></Link>
                <Link to={`/details`}><h4>Basketball</h4></Link>
                <Link to={`/details`}><h4>Standup paddleboarding</h4></Link>
                <Link to={`/details`}><h4>Tennis</h4></Link>
                <Link to={`/details`}><h4>Volleyball</h4></Link>
                <Link to={`/details`}><h4>Mountaineering</h4></Link>
                <Link to={`/details`}><h4>Snowboarding</h4></Link>
                <Link to={`/details`}><h4>Handball</h4></Link>
                <Link to={`/details`}><h4>Yoga</h4></Link>
                <Link to={`/details`}><h4>Underwater diving</h4></Link>
                <Link to={`/details`}> <h4>Rugby</h4></Link>
                <Link to={`/details`}> <h4>Hockey</h4></Link>
                <Link to={`/details`}> <h4>Football</h4></Link>
                <Link to={`/details`}> <h4>Baseball</h4></Link>
                <Link to={`/details`}> <h4>Lacrosse</h4></Link>
                <Link to={`/details`}> <h4>Netball</h4></Link>
                <Link to={`/details`}> <h4>Netball</h4></Link>
                <Link to={`/details`}> <h4>Padel</h4></Link>
                <Link to={`/details`}> <h4>Boxing</h4></Link>
                <Link to={`/details`}> <h4>Racquetball</h4></Link>
                <Link to={`/details`}> <h4>Speedball</h4></Link>
                <Link to={`/details`}> <h4>Track cycling</h4></Link>
                <Link to={`/details`}> <h4>Dance</h4></Link>
                <Link to={`/details`}> <h4>Orienteering</h4></Link>
                <Link to={`/details`}> <h4>Peteca</h4></Link>
                <Link to={`/details`}> <h4>Archery</h4></Link>
                <Link to={`/details`}> <h4>Slacklining</h4></Link>
                <Link to={`/details`}> <h4>Aeromodeling</h4></Link>
                <Link to={`/details`}> <h4>Ballooning</h4></Link> */}