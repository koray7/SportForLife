import {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";


function SportsDetails() {
    const [sports, setSports] = useState()
    const params = useParams()

    useEffect(() => {
        let url = `https://sports.api.decathlon.com/sports/${params.id}`
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setSports(data.data)
        }) .catch(console.error)

    }, [])


if(!sports) {
    return(
        <h1>Loading</h1>
    )
}
    return(
        <div className='onlySport'>
            <h1 className='sportsHeader'>~{sports.attributes.name}~</h1>
            <h1 className='sportsInfo'>{sports.attributes.description}</h1>
            <img className='icon' src={sports.attributes.icon}/>
            
            <form action="/" className="inline">
            <button className="homeButton">Home Page</button>
            </form>

        </div>
    )
}





export default SportsDetails