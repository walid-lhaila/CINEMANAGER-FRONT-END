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
                    <li className="cursor-pointer relative pb-1 hover:before:w-full before:w-0 before:h-[2px] before:bg-white before:absolute before:left-0 before:bottom-0 before:transition-all before:duration-500 hover:text-amber-300 duration-300">
                        <Link to="/home">Movie</Link></li>
                    <li className="cursor-pointer relative pb-1 hover:before:w-full before:w-0 before:h-[2px] before:bg-white before:absolute before:left-0 before:bottom-0 before:transition-all before:duration-500 hover:text-amber-300 duration-300">
                        <Link to="/myReservation">Reservation</Link></li>
                </ul>

                <div className="flex justify-center items-center gap-5 font-medium font-serif cursor-pointer">

                    {isLogged && (
                        <Link to="/userInfo">
                            <svg className="w-8 h-8 text-white hover:text-amber-300 duration-300" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                 viewBox="0 0 24 24">
                                <path fill-rule="evenodd"
                                      d="M17 10v1.126c.367.095.714.24 1.032.428l.796-.797 1.415 1.415-.797.796c.188.318.333.665.428 1.032H21v2h-1.126c-.095.367-.24.714-.428 1.032l.797.796-1.415 1.415-.796-.797a3.979 3.979 0 0 1-1.032.428V20h-2v-1.126a3.977 3.977 0 0 1-1.032-.428l-.796.797-1.415-1.415.797-.796A3.975 3.975 0 0 1 12.126 16H11v-2h1.126c.095-.367.24-.714.428-1.032l-.797-.796 1.415-1.415.796.797A3.977 3.977 0 0 1 15 11.126V10h2Zm.406 3.578.016.016c.354.358.574.85.578 1.392v.028a2 2 0 0 1-3.409 1.406l-.01-.012a2 2 0 0 1 2.826-2.83ZM5 8a4 4 0 1 1 7.938.703 7.029 7.029 0 0 0-3.235 3.235A4 4 0 0 1 5 8Zm4.29 5H7a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h6.101A6.979 6.979 0 0 1 9 15c0-.695.101-1.366.29-2Z"
                                      clip-rule="evenodd"/>
                            </svg>
                        </Link>

                    )} {isLogged ? (
                            <button onClick={handleLogout}
                                    className="bg-red-500 text-white px-10 py-2 rounded-md hover:bg-red-600 duration-500">
                                Log out
                            </button>
                        ) :(
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