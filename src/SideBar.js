import React from 'react';

export default function SideBar() {
    const ShowSideBar = () => {
        if (document.getElementById("LeftSideBar").style.zIndex != "1") {
            if (window.innerWidth <= 800) {
                document.getElementById("LeftSideBar").style.width = "30%";
            } else {
                document.getElementById("LeftSideBar").style.width = "25%";  
            }
            document.getElementById("LeftSideBar").style.zIndex = "1";
            document.getElementById("Search").style.display = "none";
            document.getElementById("SearchBox").style.display = "block";
        } else {
            document.getElementById("LeftSideBar").style.width = "4%";
            document.getElementById("LeftSideBar").style.zIndex = "0";
            document.getElementById("Search").style.display = "block";
            document.getElementById("SearchBox").style.display = "none";
        }
    }
    return (
        <>
            <div id="LeftSideBar" >
                <div id="Sandwich" onClick={ShowSideBar}></div>
                <div id="Search" onClick={ShowSideBar}></div>
                <input id="SearchBox" type="text" placeholder='Search' />
                <div id="SearchImg"></div>
            </div>
        </>
    )
}