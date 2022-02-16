import { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom";
import App from '../App';


function SearchResults(props) {
    console.log(props.showPage)
    return (
        <div className='resultPage'>
            <div className='groupOfSports'><h1 className='exampleText'>Here is some examples of Sports</h1></div>
            <h1 className='searchResults'>
                {props.showPage.map(sport => {
                    return (

                        <button className="sportsButton">
                            <Link to={`/details/${sport.id}`}
                                style={{ color: 'rgb(82, 109, 195)', textDecoration: 'none' }}
                                key={sport.id}>
                                {sport.attributes.name}
                            </Link>
                        </button>
                    )
                }
                )}
                <form action="/" className="inline">
                    <button className="homeButton">Home Page</button>

                    <div className='testConcept'>
                        <h5 className='test'>Do you want to take a quick test to see which sport is better for you?
                        </h5>
                        <a className='click' href="https://www.bbc.com/news/uk-28062001" target="_blank">Click Here!</a>
                    </div>
                </form>

            </h1>
        </div>
    )
}



export default SearchResults