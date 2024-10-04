import React from 'react';
import NavBar from "../NavBar.jsx";
import SectionTitle from "../Home/SectionTitle.jsx";
import MovieCard from "../Home/MovieCard.jsx";
import Footer from "../Footer.jsx";
import jocker from "../../assets/jocker.jpeg";
import jocker2 from "../../assets/jocker2.jpeg";
import img10 from "../../assets/nightagent.png";
import img11 from "../../assets/hypnotic.png";
import img12 from "../../assets/blackNight.png";
import img13 from "../../assets/bookClub.png";
import img14 from "../../assets/from.png";
import img15 from "../../assets/sisu.png";
import img8 from "../../assets/ghosted.png";
import img9 from "../../assets/jhonwik.png";
function MovieDetails() {
    return (
        <>
            <NavBar />
            <div className="w-[65%] mx-auto pt-14">
                <img className="w-[80%] h-[600px] mx-auto" src={jocker}/>
                <div className="flex  gap-10 pt-24">
                    <img className="h-[556px] w-[352px] rounded" src={jocker2} alt=""/>
                    <div className="pt-6">
                        <div className="flex justify-between items-center">
                            <h1 className="text-white font-bold font-serif text-4xl">JOCKER</h1>
                            <button
                                className="bg-amber-300 text-black font-medium px-12 py-3 rounded-lg hover:bg-amber-400 duration-300">Book
                                Now
                            </button>
                        </div>
                        <div className="pt-16 flex items-center gap-10">
                            <div className="bg-white px-6 py-2 rounded-md flex gap-2 justify-center items-center">
                                <svg className="w-5 h-5 text-black" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                     viewBox="0 0 24 24">
                                    <path fill-rule="evenodd"
                                          d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                                          clip-rule="evenodd"/>
                                </svg>
                                <p className="text-black font-medium font-sans">2023</p>
                            </div>
                            <div className="bg-white px-6 py-2 rounded-md flex gap-2 justify-center items-center">
                                <svg className="w-5 h-5 text-black" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                     viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                </svg>
                                <p className="text-black font-medium font-sans">50:38</p>
                            </div>
                            <div className="bg-white px-6 py-2 rounded-md flex gap-2 justify-center items-center">
                                <svg className="w-5 h-5 text-black" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                     viewBox="0 0 24 24">
                                    <path fill-rule="evenodd"
                                          d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                                          clip-rule="evenodd"/>
                                </svg>
                                <p className="text-black font-medium font-sans">100</p>
                            </div>
                        </div>
                        <p className="text-white font-medium font-serif text-lg pt-12">In a ruined and toxic future, a
                            community exists in a giant underground silo that plunges
                            hundreds of stories deep. There, men and women live in a society full of regulations they
                            believe are meant to protect them.</p>
                        <div className="pt-12">
                            <ul>
                                <li className="text-white font-medium font-serif text-lg">Start Date : 10/24/2025</li>
                                <li className="text-white font-medium font-serif text-lg py-3">Capacity: Comfortable
                                </li>
                                <li className="text-white font-medium font-serif text-lg">Price: 86$</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <SectionTitle title="You may also like"/>

                <div className="flex flex-wrap justify-center items-center gap-10 py-2">

                    <MovieCard img={img10} title="The Night Agent"/>
                    <MovieCard img={img11} title="Hypnotic"/>
                    <MovieCard img={img12} title="Black Night"/>
                    <MovieCard img={img13} title="Book Club"/>
                    <MovieCard img={img14} title="From" />
                    <MovieCard img={img15} title="Sisu" />
                    <MovieCard img={img8} title="Ghosted" />
                    <MovieCard img={img9} title="John Wick: Ch..." />

                </div>

                <Footer />

            </div>
        </>
    );
}

export default MovieDetails;