import React, { useEffect, useRef, useState } from "react";
import '../../assets/styles/Header/nav.css';
import logo from '../../assets/images/logo-transparent.png';
import { IoIosArrowDown } from 'react-icons/io';
import { BsGrid3X3GapFill } from 'react-icons/bs';
import { FaSearch,FaBars } from "react-icons/fa";

const Nav = () =>{

    const [sideBarOpen, setSideBarOpen] = useState(false);

    const listRef = useRef (null);

    useEffect(() => {

    const listItems = listRef.current.querySelectorAll('li');
    listItems.forEach((li) => {
      li.addEventListener('mousemove', (e) => {
        let rect = e.target.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        li.style.setProperty('--x', x + 'px');
        li.style.setProperty('--y', y + 'px');
            });
        });        

    }, []);


    const ToggleSideBarBtn = () => {
        setSideBarOpen((prevState) => !prevState);
    }



    return (
        <nav>

            <div className="background"></div>

            <div className="navTopCont">

                <div className="logoCont">
                    <img src={logo} id="logo"/>
                </div>

                <ul className={`listCont ${sideBarOpen ? 'open' : ''}`} ref={listRef}>
                    <li>Product  <span className="chevRonDown"> <IoIosArrowDown /></span></li>
                    <li>Services  <span className="chevRonDown"> <IoIosArrowDown /></span></li>
                    <li>About Zero Overt</li>
                    <li>Support</li>
                </ul>

                <div className="extras">

                    <span className="iconCont">
                        <FaSearch style={{ transform: "rotate(90deg)" }} />
                    </span>
 
                    <span className="iconCont">
                        <BsGrid3X3GapFill />
                    </span>

                    <span className="iconCont bars" onClick = {ToggleSideBarBtn} >
                        <FaBars  />
                    </span>
                </div>

            </div>

            <div className="intro">
                <h1 id="intoText">Zero Overt Technologies Inc</h1>
                <p id="text">Turning Complex Problems into Brilliant Solutions, Zero Overt Technologies - Your Innovation Partner.</p>
                <br />
                <div className="getStarted">
                   <p id="startBtn">Get started</p>

                    <p id="learn"> <span id="arrowIcon"><IoIosArrowDown style={{ transform: "rotate(270deg)" }} /></span> <span id="t">Learn More <span id="line"></span></span></p>
                </div>
            </div>

        </nav>
    );
};

export default Nav;