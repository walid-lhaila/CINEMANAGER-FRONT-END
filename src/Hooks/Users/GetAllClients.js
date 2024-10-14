import React, {useState, useEffect} from 'react';
import axios from "axios";

function GetAllUsers() {
    const [clients, setClients] = useState([]);

    useEffect(() => {
          const getAllClients = () => {
              axios.get('http://localhost:2003/api/getAllClients')
                  .then((response) => {
                      setClients(response.data);
                  })
                  .catch((error) => {
                      console.log("cannot get Clients");
                  });
          };
          getAllClients();
    }, []);
    
    return clients;
}

export default GetAllUsers;