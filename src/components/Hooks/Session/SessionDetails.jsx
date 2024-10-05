import React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";

function SessionDetails({id}) {
    const [session, setSession] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getSession = async () => {
            try {
                const response = await axios.get(`http://localhost:2003/api/getSessionById/${id}`);
                setSession(response.data.getSessionById);
            } catch (err) {
                console.log('Error Fetching sessions.', err);
                setError(err)
            }
        };
        if(id) {
            getSession();
        }
    }, [id]);

    return {
        session,
        error
    };
}

export default SessionDetails;