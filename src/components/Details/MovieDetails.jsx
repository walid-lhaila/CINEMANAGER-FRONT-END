import React from 'react';
import NavBar from "../NavBar.jsx";
import SectionTitle from "../Home/SectionTitle.jsx";
import MovieCard from "../Home/MovieCard.jsx";
import Footer from "../Footer.jsx";
import getSession from "../Hooks/Session/GetSession.jsx";
import sessionDetails from "../Hooks/Session/SessionDetails.jsx";
import {useNavigate, useParams} from "react-router-dom";
function MovieDetails() {
            const {id} = useParams();
            const { session, error, movieTime } = sessionDetails({id});
            const {sessions} = getSession();
            const navigate = useNavigate();
            if (error) {
                return <div>Error fetching session: {error.message}</div>;
            }

            if (!session) {
                return <div>Loading...</div>;
            }

            const handleBookNow = () => {
                navigate("/Reservation", {state: {session} });
            }
    return (
        <>
            <NavBar />
            <div className="w-[65%] mx-auto pt-14">
                <video className="w-[100%] h-[600px] mx-auto" controls muted>
                    <source src={session.movieId.trailer} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>                <div className="flex  gap-10 pt-24">
                    <img className="h-[556px] w-[352px] rounded" src={session.movieId.picture} alt=""/>
                    <div className="pt-6">
                        <div className="flex justify-between items-center">
                            <h1 className="text-white font-bold font-serif text-4xl">{session.movieId.title}</h1>
                            <button onClick={handleBookNow}
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
                                <p className="text-black font-medium font-sans">{new Date(session.startTime).getFullYear()}</p>
                            </div>
                            <div className="bg-white px-6 py-2 rounded-md flex gap-2 justify-center items-center">
                                <svg className="w-5 h-5 text-black" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                     viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                </svg>
                                <p className="text-black font-medium font-sans">{movieTime(session.startTime, session.endTime)}</p>
                            </div>
                            <div className="bg-white px-6 py-2 rounded-md flex gap-2 justify-center items-center">
                                <svg className="w-5 h-5 text-black" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                     viewBox="0 0 24 24">
                                    <path fill-rule="evenodd"
                                          d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                                          clip-rule="evenodd"/>
                                </svg>
                                <p className="text-black font-medium font-sans">{session.hallId.seats}</p>
                            </div>
                        </div>
                        <p className="text-white font-medium font-serif text-lg pt-12">{session.movieId.description}</p>
                        <div className="pt-12">
                            <ul>
                                <li className="text-white font-medium font-serif text-lg">Start Date: {new Date(session.startTime).toLocaleTimeString('fr-FR', {hour: '2-digit', minute: '2-digit'}).replace(':', 'H')}</li>
                                <li className="text-white font-medium font-serif text-lg">End Date: {new Date(session.endTime).toLocaleTimeString('fr-FR', {hour: '2-digit', minute: '2-digit'}).replace(':', 'H')}
                            </li>
                                <li className="text-white font-medium font-serif text-lg py-3">Hall: {session.hallId.name}</li>
                                <li className="text-white font-medium font-serif text-lg">Price: {session.price}$</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <SectionTitle title="You may also like"/>

                <div className="flex flex-wrap justify-center items-center gap-10 py-2">

                    <div className="flex flex-wrap justify-center items-center gap-10 py-2">

                        {sessions.map((session) => (
                            <MovieCard key={session._id} img={session.movieId.picture} title={session.movieId.title} sessionId={session._id}/>
                        ))}

                    </div>

                </div>

                <Footer/>

            </div>
        </>
    );
}

export default MovieDetails;