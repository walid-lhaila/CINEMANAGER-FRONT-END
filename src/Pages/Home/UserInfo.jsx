import React from 'react';
import flash from "../../assets/flash.png";
import Input from "../../components/Input.jsx";
import Button from "../../components/AuthBtn.jsx"
function UserInfo() {
    return (
        <div className="flex flex-col justify-center items-center border-2 border-gray-300 shadow-xl rounded  shadow-gray-300/50 w-[55%] mt-32 mx-auto">

                <img className="h-44 w-44 rounded-full mt-10" src={flash} alt=""/>
            <form className="w-full py-12">
                <h1 className="text-white text-center text-4xl font-serif font-bold underline ">Your Informations</h1>

                <div className="flex justify-center items-center gap-5 w-full pt-10">
                    <div>
                        <label className="text-white font-serif" htmlFor="">First Name</label>
                        <Input className="text-white font-serif" name="fullName" type="text"
                               className="w-96 px-2 placeholde:text-gray-500"></Input>
                    </div>
                    <div>
                        <label className="text-white font-serif" htmlFor="">Last Name</label>
                        <Input className="text-white font-serif" name="fullName" type="text"
                               className="w-96 px-2 placeholde:text-gray-500"></Input>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-5 w-full py-5">
                    <div>
                        <label className="text-white font-serif" htmlFor="">Adress Email</label>
                        <Input className="text-white font-serif" name="email" type="email"
                               className="w-96 px-2 placeholde:text-gray-500"></Input>
                    </div>
                    <div>
                        <label className="text-white font-serif" htmlFor="">Password</label>
                        <Input className="text-white font-serif" name="password" type="password"
                               className="w-96 px-2 placeholde:text-gray-500"></Input>
                    </div>
                </div>
                <div className="flex w-[50%] mx-auto gap-5 pt-8">
                    <Button text="Submit" className="" type="submit"></Button>

                    <Button text="cancel" className="bg-gray-200 hover:bg-white duration-300" type="submit"></Button>
                </div>
            </form>

        </div>
    );
}

export default UserInfo;