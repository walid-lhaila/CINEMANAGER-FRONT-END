import React, {useState, useEffect} from 'react';
import axios from "axios";

function GetAllClients() {
    const [clients, setClients] = useState([]);

    useEffect(() => {
          const getAllClients = () => {
              const token = localStorage.getItem("token");
              console.log(token);
              axios.get('http://localhost:2003/api/getAllClients', {
                  headers: {
                      'Cache-Control': 'no-cache',
                      Authorization: `bearer ${token}`,
                  }
              })
                  .then((response) => {
                      setClients(response.data);
                  })
                  .catch((error) => {
                      console.log("cannot get Clients");
                  });
          };
          getAllClients();
    }, []);

    return{
        clients
    }
}

export default GetAllClients;