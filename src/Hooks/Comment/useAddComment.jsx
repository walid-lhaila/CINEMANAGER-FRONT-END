import React from 'react';
import {toast} from "react-toastify";
import axios from "axios";

function UseAddComment() {

    const addComment = async (movieId, comment) => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.post(`http://localhost:2003/api/createComment/${movieId}`,
                {comment},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
        );
            toast("comment send successfully");
            return response.data;
        } catch (err) {
            toast(err, "Failed Comment");
        }
    };

    return { addComment };
}

export default UseAddComment;