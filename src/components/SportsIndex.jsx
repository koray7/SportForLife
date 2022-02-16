import {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";


function SportsIndex() {

    const [sport, setSport] = useState({})
    const params = useParams()

    useEffect(() => {
        let url = `https://sports.api.decathlon.com/sports/${params.id}`
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setSport(data)
        }) .catch(console.error)

    }, [])


    return (
        <div className='sportsDetail'></div>
    )
}







export default SportsIndex