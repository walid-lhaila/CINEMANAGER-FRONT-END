import backgroundImg from "../../assets/bgLogin.jpeg";
import logo from "../../assets/logo.png";
import {Link} from "react-router-dom";
import Input from "./AuthInput.jsx"
import Button from "./AuthBtn.jsx"
function SignUp() {
    return (
        <>
            <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImg}`}}>

                <div className="py-2 px-7">
                    <img className="h-[150px]" src={logo} alt=""/>
                </div>

                <div className="bg-black w-[25%] mx-auto shadow-black shadow-xl">
                    <form className="flex flex-col px-10 py-10">
                        <h1 className="text-white font-bold font-serif text-4xl py-8">Sign Up</h1>
                        <div className="py-5">
                            <Input name="fullName" type="text" placeholder="Full Name"/>
                        </div>
                            <Input name="email" type="email" placeholder="Email Address"/>
                        <div className="py-5">
                            <Input name="password" type="password" placeholder="Password"/>
                        </div>
                        <div>
                            <Button text="Sign Up" type="submit" />
                        </div>
                        <p className="text-white font-serif font-medium text-center py-3">OR</p>
                        <Link to="/signin">
                            <Button text="Sign In" type="submit" className="bg-white hover:bg-gray-200"/>
                        </Link>

                    </form>
                </div>

            </div>
        </>
    );
}

export default SignUp;