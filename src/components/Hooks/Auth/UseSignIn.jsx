import React from 'react';
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function UseSignIn() {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:2003/api/login', {
                email: formData.email,
                password: formData.password,
            });

            if(response.data.role === 'admin') {
                console.log('Admin Logged In Successfully ', response.data);
                navigate('/');
            }else {
                console.log('Client Logged In Successfully ', response.data);
                navigate('/home');
            }
        } catch (err) {
            console.error("There was an error creating the account", err);
        }
    };

    return {
        handleChange,
        handleSubmit,
        formData,
        error
    };
}

export default UseSignIn;