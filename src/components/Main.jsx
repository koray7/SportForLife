import { useState, useEffect } from "react";
import { Link, Navigate } from 'react-router-dom'
import React from "react";
// import ReactDOM from "react-dom";
import SearchResults from "./SearchResults";
import { Carousel } from "react-bootstrap"

function Main({ search, searchHandler, handleSubmit, result }) {

    const [sports, setSports] = useState([]);
    const url = "https://sports.api.decathlon.com/sports"
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((json) => {
                // Json data
                let allSports = json.data
                let showSports = allSports.slice(0, 100)
                setSports(showSports)
            })
            .catch(err => {
                console.log(err)
            })
    }, []);
    // const slidersports = sports.slice(0,10)

    return (

        <div>
            <div className="maindiv">
                <h1>Find Your New Way Of Living!</h1>
                <h3>Stay fit, stay healty...</h3><br />
            </div>
            <h4 className="h4">You want to be physically active but you don't know which sports is better for you? Click on the sports that you interested in, get information about the sport and see which one can fit in your life!</h4>
            <div>
                <h1 className="listOfSports">List of Sports</h1>
            </div>



            <Carousel>
                <Carousel.Item>

                    <div className="Sportlist sportsBar">
                        {sports.slice(0, 32).map(sport => {
                            return (
                                <button className="sportsButton"><Link to={`/details/${sport.id}`}
                                    style={{
                                        color: 'rgb(82, 109, 195)', textDecoration: 'none',

                                    }}
                                    key={sport.id}>
                                    {sport.attributes.name}
                                </Link></button>
                            )
                        }
                        )}
                    </div>

                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>

                    <div className="Sportlist">
                        {sports.slice(33, 65).map(sport => {
                            console.log(sport)
                            return (
                                <button className="sportsButton"><Link to={`/details/${sport.id}`}
                                    style={{ color: 'rgb(82, 109, 195)', textDecoration: 'none' }}
                                    key={sport.id}>
                                    {sport.attributes.name}
                                </Link></button>
                            )
                        }
                        )}
                    </div>

                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>

                    <div className="Sportlist">
                        {sports.slice(66, 98).map(sport => {
                            return (
                                <button className="sportsButton"><Link to={`/details/${sport.id}`}
                                    style={{ color: 'rgb(82, 109, 195)', textDecoration: 'none' }}
                                    key={sport.id}>
                                    {sport.attributes.name}
                                </Link></button>
                            )
                        }
                        )}
                    </div>

                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

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




























// function createCarousel() {
    //     const allSlides = []
    //     for (let i = 0; i < sports.length; i += 15) {
    //         let oneSlide = <div id="slides__2" class="slide">
    //             <span class="slide__text">{sports[i].attribute}</span>
    //         </div>
    //         allSlides.push(oneSlide)
    //     }
    //     // grab 15 sports at a time
    //     // put the 15 sports inside of span
    //     return allSlides
    // }