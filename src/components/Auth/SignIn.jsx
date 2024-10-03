import logo from '../../assets/logo.png'
import backgroundImg from '../../assets/bgLogin.jpeg'
import {Link} from "react-router-dom";
import Input from "./AuthInput.jsx"
import Button from "./AuthBtn.jsx";
function SignIn() {
    return (
        <>
            <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImg}`}}>

                <div className="py-2 px-7">
                    <img className="h-[150px]" src={logo} alt=""/>
                </div>

                <div className="bg-black w-[25%] mx-auto shadow-black shadow-xl">
                    <form className="flex flex-col px-10 py-10">
                        <h1 className="text-white font-bold font-serif text-4xl py-8">Sign In</h1>
                            <Input name="email" type="email" placeholder="Email Address"/>
                        <div className="py-5">
                            <Input name="password" type="password" placeholder="Password"/>
                        </div>
                        <div>
                            <Button text="Sign In" type="submit" />
                        </div>
                        <p className="text-white font-serif font-medium text-center py-3">OR</p>
                        <Link to="/signup">
                            <Button text="Sign Up" type="submit" className="bg-white hover:bg-gray-200"/>
                        </Link>
                        <Link to="/ForgetPassword" className="text-center text-gray-200 font-serif py-5 hover:underline cursor-pointer">Forgot password?</Link>
                        <p className="text-gray-300 font-serif">New to Cinema ? <span className="text-white font-serif font-medium hover:underline cursor-pointer">Sign up now.</span></p>
                    </form>
                </div>

            </div>
        </>
    );
}

export default SignIn;