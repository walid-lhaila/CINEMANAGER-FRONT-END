import logo from "../assets/logo.png";
import {Link} from "react-router-dom";
function NavBar() {
    return (
        <div>
            <nav className="flex justify-center justify-between items-center  text-white px-32">
                <img className="h-[100px]" src={logo} alt=""/>
                <ul className="flex justify-center gap-12 items-center font-bold font-serif ">
                    <li className="cursor-pointer relative pb-1 hover:before:w-full before:w-0 before:h-[2px] before:bg-white before:absolute before:left-0 before:bottom-0 before:transition-all before:duration-500 hover:text-amber-300 duration-300"><Link to="/home">Movie</Link></li>
                    <li className="cursor-pointer relative pb-1 hover:before:w-full before:w-0 before:h-[2px] before:bg-white before:absolute before:left-0 before:bottom-0 before:transition-all before:duration-500 hover:text-amber-300 duration-300">Reservation</li>
                </ul>
                <div className="flex justify-center gap-5 font-medium font-serif cursor-pointer">
                    <Link to="/signIn" className="bg-amber-300 text-black px-10 py-2 rounded-md hover:bg-white duration-500">Sign
                        in
                    </Link>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;