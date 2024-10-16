import React from 'react';

function MoviesCard({img, title, category, created,}) {
    return (
        <div className="card relative py-2 w-[20%]">
            <div className="cursor-pointer flex justify-center  duration-700">
                <img className="w-[300px] h-[300px]" src={img} alt=""/>
            </div>
            <div className="bg-white shadow-lg w-[87%] mx-auto mt-[-20px] relative">
                <div className="px-8 py-6">
                    <h1 className="text-lg text-black font-bold font-mono">{title}</h1>
                    <div className="py-2 flex gap-3">
                        <div className="flex items-center gap-1">
                            <svg className="w-4 h-4 text-orange-500" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                 viewBox="0 0 24 24">
                                <path
                                    d="M18.045 3.007 12.31 3a1.965 1.965 0 0 0-1.4.585l-7.33 7.394a2 2 0 0 0 0 2.805l6.573 6.631a1.957 1.957 0 0 0 1.4.585 1.965 1.965 0 0 0 1.4-.585l7.409-7.477A2 2 0 0 0 21 11.479v-5.5a2.972 2.972 0 0 0-2.955-2.972Zm-2.452 6.438a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
                            </svg>
                            <p className="text-xs text-gray-500">{category}</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <svg className="w-4 h-4 text-orange-500" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                 viewBox="0 0 24 24">
                                <path fill-rule="evenodd"
                                      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                                      clip-rule="evenodd"/>
                            </svg>
                            <p className="text-xs text-gray-500">{created}</p>
                        </div>
                    </div>
                    <div className="flex gap-3 mt-1">
                        <button className="text-gray-500 bg-gray-200 text-sm px-3 py-1 hover:text-white hover:bg-orange-500 duration-500 font-medium">Détails</button>
                        <button className="text-gray-500 bg-gray-200 text-sm px-3 py-1 hover:text-white hover:bg-orange-500 duration-500 font-medium">Get Ticket</button>
                    </div>
                </div>
            </div>
        </div>);
}

export default MoviesCard;