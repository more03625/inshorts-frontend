import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <span className="name">
                Similar website you can find here -{" "}
                <a href="https://www.newsdb.in" target="__blank">
                    NewsDB.in
                </a>
            </span>
            <hr style={{ width: "90%" }} />
            <div className="iconContainer">

                <a href="https://linkedin.com/in/more03625" target="__blank">
                    <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a href="https://www.newsdb.in" target="__blank">
                    <i className="fas fa-link fa-2x"></i>
                </a>
            </div>
        </div>
    );
};

export default Footer;