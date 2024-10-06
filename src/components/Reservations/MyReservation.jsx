import React from 'react';
import NavBar from "../NavBar.jsx";
import LatestCard from "../Home/LatestCard.jsx";
import GetMyReservations from "../Hooks/Reservations/GetMyReservations.jsx";

function MyReservation() {
    const {reservations, error, time} = GetMyReservations();
    return (
        <>
            <NavBar />
            <div className="w-[65%] h-full m-auto py-14">
                <h1 className="text-white font-bold font-serif text-4xl py-5">My Reservation</h1>
                {error ? (
                    <div className="text-red-500 font-bold text-5xl py-44 font-mono text-center flex justify-center items-center flex-col">
                        <svg className="w-16 h-16 text-red-500 text-center" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"/>
                        </svg>
                        <h1 className="py-8">{error}</h1>
                    </div>
                ) : (
                    <div className="flex flex-wrap items-center gap-5">
                        {reservations.length > 0 ? (
                            reservations.map((reservation) => (
                                <LatestCard key={reservation._id} imgSrc={reservation.sessionId.movieId.picture}
                                            time={time(reservation.sessionId.startTime)} title={reservation.sessionId.movieId.title} price={reservation.sessionId.price}/>
                        ))
                    ) : (
                        <div className="text-white font-semibold text-xl">No Reservations Found.</div>
                    )}
                </div>
                    )}
            </div>
        </>
    );
}

export default MyReservation;