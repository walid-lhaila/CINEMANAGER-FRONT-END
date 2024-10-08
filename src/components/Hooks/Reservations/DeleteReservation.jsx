import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function useDeleteReservation() {
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if(success) {
            setShowSuccessMessage(true);
            const timer = setTimeout(() => {
                setShowSuccessMessage(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [success])

    useEffect(() => {
        if(error) {
            setShowErrorMessage(true);
            const timer = setTimeout(() => {
                setShowErrorMessage(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [error]);

    const deleteReservation = async (reservationId) => {
        try {
            const response = await axios.delete(`http://localhost:2003/api/deleteReservation/${reservationId}`);
            if (response.status === 200) {
            setSuccess("Reservations Deleted Successfully.");
            navigate("/home");
            }
        } catch (error) {
            setError( "Cannot delete this reservation");
        }
    };

    return { deleteReservation, error, success, showErrorMessage, showSuccessMessage };
}

export default useDeleteReservation;
