import axios from "axios";
import {toast} from "react-toastify";

function UseDeleteRoom() {

    const deleteRoom = async (roomId) => {
        const token = localStorage.getItem("token");
        try {
            const response = await axios.delete(`http://localhost:2003/api/deleteHall/${roomId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });
            if(response.status === 200) {
                toast.success("Room Deleted Successfully");
                return roomId;
            }
        } catch (error) {
            toast.error("Cannot Delete This Room", error);
        }
    }

    return {deleteRoom};
}

export default UseDeleteRoom;