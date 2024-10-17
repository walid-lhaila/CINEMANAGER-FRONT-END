import React from 'react';

function CommentsCard({img, client, comment, className}) {
    return (
        <div className={` relative flex justify-between items-center w-full ${className}`}>

            <div className="flex  gap-3 w-[99%]">
                <img className="h-16 w-16 rounded-full" src={img} alt=""/>
                <div className="w-[90%]">
                    <p className="text-white font-medium font-serif text-xl py-1">{client}</p>
                    <p className="text-gray-300 font-sans text-sm">{comment}</p>
                </div>
            </div>
            <div className="hover:bg-gray-800 duration-200">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                          d="M12 6h.01M12 12h.01M12 18h.01"/>
                </svg>

            </div>
            <div className="bg-white flex flex-col w-12 h-12 absolute right-5">
                <button></button>
                <button></button>
            </div>
        </div>
    );
}

export default CommentsCard;