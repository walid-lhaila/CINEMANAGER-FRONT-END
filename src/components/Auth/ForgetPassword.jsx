import React from 'react';
import backgroundImg from "../../assets/bgLogin.jpeg";
import logo from "../../assets/logo.png";
import Input from "./AuthInput.jsx"
import Button from "./AuthBtn.jsx"
function ForgetPassword() {
    return (
        <>
            <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImg}`}}>

                <div className="py-2 px-7">
                    <img className="h-[150px]" src={logo} alt=""/>
                </div>

                <div className="bg-black w-[25%] mx-auto shadow-black shadow-xl mt-24">
                    <form className="flex flex-col px-10 py-10">
                        <h1 className="text-white font-bold font-serif text-4xl py-8">Forget Password</h1>
                            <Input name="email" type="email" placeholder="Enter Your Email Address"/>
                        <div className="py-5">
                            <Button text="Send" type="submit" />
                        </div>

                    </form>
                </div>

            </div>
        </>
    );
}

export default ForgetPassword;