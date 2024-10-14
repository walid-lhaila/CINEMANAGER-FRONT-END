import React, {useState} from 'react';
import SidBar from "../../components/Admin/SidBar.jsx";
import Header from "../../components/Admin/Header.jsx";
import CategoryCard from "../../components/Category/categoryCard.jsx";
import CategoryForm from "../../components/Category/categoryForm.jsx";
function Categories() {

    const [showForm, setShowForm] = useState(false);

    return (
        <div className="flex bg-white">
            <SidBar/>
            <div className="w-full">
                <Header/>

                <div className="flex justify-between items-center px-10 py-8">
                    <h1 className="text-black font-serif font-bold text-3xl">Categories</h1>
                    <div onClick={() => setShowForm(true)} className="bg-amber-500 px-10 py-2 flex items-center gap-2 rounded hover:bg-amber-400 duration-300 cursor-pointer">
                        <svg className="w-6 h-6 text-white" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap necap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M5 12h14m-7 7V5"/>
                        </svg>
                        <button className="text-white  font-bold font-serif text-lg">category</button>
                    </div>
                </div>
                <CategoryCard />
                {showForm &&
                    <CategoryForm removeForm={() => setShowForm(false)} />
                }
            </div>
        </div>
    );
}

export default Categories;