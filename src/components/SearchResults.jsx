import {useEffect, useState} from 'react'
import { useParams, Link } from "react-router-dom";
import App from '../App';

function SearchResults(props) {
console.log(props.showPage)
    return(
        <div>
            <h1>
            {props.showPage.map(sport => {
                    return (
                   <button className="sportsButton"><Link to={`/details/${sport.id}`} 
                        style={{ color: 'rgb(82, 109, 195)', textDecoration: 'none' }}
                        key={ sport.id }>
                            {sport.attributes.name}
                        </Link></button> 
                    )
                }
            )}
            </h1>
        </div>
    )
}




export default SearchResults