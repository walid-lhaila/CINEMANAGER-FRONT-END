import { useState, useEffect } from 'react';
import axios from 'axios';

function useGetMovieDetails(movieId) {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!movieId) return;

        const fetchMovieDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:2003/api/getMovieDetails/${movieId}`);
                setMovie(response.data.messsage);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchMovieDetails();
    }, [movieId]);

    return { movie, loading, error };
}

export default useGetMovieDetails;
