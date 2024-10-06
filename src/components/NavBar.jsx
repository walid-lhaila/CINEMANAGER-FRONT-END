import logo from "../assets/logo.png";
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
function NavBar() {
    const [isLogged, setIsLogged] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if(token) {
            setIsLogged(true);
        }else {
            setIsLogged(false);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLogged(false);
        navigate('/signIn');
    }
    return (
        <div>
            <nav className="flex justify-center justify-between items-center  text-white px-32">
                <img className="h-[100px]" src={logo} alt=""/>
                <ul className="flex justify-center gap-12 items-center font-bold font-serif ">
                    <li className="cursor-pointer relative pb-1 hover:before:w-full before:w-0 before:h-[2px] before:bg-white before:absolute before:left-0 before:bottom-0 before:transition-all before:duration-500 hover:text-amber-300 duration-300"><Link to="/home">Movie</Link></li>
                    <li className="cursor-pointer relative pb-1 hover:before:w-full before:w-0 before:h-[2px] before:bg-white before:absolute before:left-0 before:bottom-0 before:transition-all before:duration-500 hover:text-amber-300 duration-300"><Link to="/myReservation">Reservation</Link></li>
                </ul>
                <div className="flex justify-center gap-5 font-medium font-serif cursor-pointer">
                    {isLogged ? (
                        <button onClick={handleLogout}
                                className="bg-red-500 text-white px-10 py-2 rounded-md hover:bg-red-600 duration-500">
                            Log out
                        </button>
                        ) : (
                    <Link to="/signIn"
                          className="bg-amber-300 text-black px-10 py-2 rounded-md hover:bg-white duration-500">Sign
                        in
                    </Link>
                        )}
                </div>
            </nav>
        </div>
    );
}

export default NavBar;