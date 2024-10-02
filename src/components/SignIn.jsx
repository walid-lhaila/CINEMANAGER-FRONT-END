import logo from '../assets/logo.png'
import backgroundImg from '../assets/bgLogin.jpeg'
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
                        <div>
                            <input className="py-4 bg-black placeholder:text-gray-200 border border-1 border-gray-200 rounded w-[100%] text-white font-serif font-medium placeholder:px-4" type="text" placeholder="Email or mobile number"/>
                        </div>
                        <div className="py-5">
                            <input className="py-4 bg-black placeholder:text-gray-200 border border-1 border-gray-200 rounded w-[100%] text-white font-serif font-medium placeholder:px-4" type="text" placeholder="Password"/>
                        </div>
                        <div>
                            <button className="text-black font-bold font-serif bg-amber-300 w-[100%] py-3 hover:bg-amber-200 duration-300">Sign In</button>
                        </div>
                        <p className="text-white font-serif font-medium text-center py-3">OR</p>
                        <div>
                            <button className="bg-white font-bold font-serif w-[100%] py-3 hover:bg-gray-200 duration-300">Sign Up</button>
                        </div>
                        <p className="text-center text-gray-200 font-serif py-5 hover:underline cursor-pointer">Forgot password?</p>
                        <p className="text-gray-300 font-serif">New to Cinema ? <span className="text-white font-serif font-medium hover:underline cursor-pointer">Sign up now.</span></p>
                    </form>
                </div>

            </div>
        </>
    );
}

export default SignIn;