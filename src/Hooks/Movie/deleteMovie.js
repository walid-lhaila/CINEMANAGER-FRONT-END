import React from 'react';
import axios from "axios";
import {toast} from "react-toastify";

function DeleteMovie() {

    const deleteMovie = async (movieId) =>  {
        const token = localStorage.getItem("token");
        try {
            const response = await axios.delete(`http://localhost:2003/api/deleteMovie/${movieId}`,
                {
                    headers: {
                        Authorization: `bearer ${token}`,
                    }
                }
            );
            if(response.status === 200) {
                toast.success("Movie Deleted Successfully");
            }
        } catch (err) {
            toast.error("Cannot delete Movie");
        }
    }
    return {deleteMovie};
}

export default DeleteMovie;