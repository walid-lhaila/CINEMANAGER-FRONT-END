import React from 'react';
import SidBar from "../SidBar.jsx";
import Header from "../Header.jsx";
function Dashboard() {


    return (
            <>
                <div className="flex justify-center ">
                    <SidBar />
                    <Header />
                </div>
            </>
    );
}

export default Dashboard;