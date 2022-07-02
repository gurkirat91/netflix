import React from "react";

function Navbar(){
    return(
        <nav className="navbar">
            <img src="https://i.ibb.co/r5krrdz/logo.png" alt="" className="logo" />
            <div className="join-box">
                <p className="join-msg">unlimited tv shows & movies</p>
                <button className="btn join-btn">join now</button>
            </div>
        </nav>
    );
}
export default Navbar;