import React from 'react'
import './sidebar.css';

const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <div className="sidebarItem">
                    <span className="sidebarTitle">About Me</span>
                    <img className="sidebarImg" src="https://cdn.siasat.com/wp-content/uploads/2021/08/Shah-Rukh-Khan.jpg" />
                    <p>Shah Rukh Khan, also known by the initialism SRK, is an Indian actor, film producer, and television personality who works in Hindi films. </p>
                </div>

                <div className="sidebarItem">
                    <span className="sidebarTitle">Categories</span>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">ABOUT</li>
                        <li className="sidebarListItem">LIFE</li>
                        <li className="sidebarListItem">MOVIE</li>
                        <li className="sidebarListItem">SRK</li>
                        <li className="sidebarListItem">MKBHD</li>
                    </ul>
                </div>
                <div className="sidebarItem">
                    <span className="sidebarTitle">Follow</span>
                    <div className="sidebarSocial">
                        <i className="sidebarIcon fab fa-facebook"></i>
                        <i className="sidebarIcon fab fa-instagram"></i>
                        <i className="sidebarIcon fab fa-twitter"></i>
                        <i className="sidebarIcon fab fa-pinterest"></i>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Sidebar;