import './topbar.css';

const Topbar = () => {
    return (
        <>
            <div className="top">
                <div className="topLeft">
                    <i className="topIcon fab fa-facebook"></i>
                    <i className="topIcon fab fa-instagram"></i>
                    <i className="topIcon fab fa-twitter"></i>
                    <i className="topIcon fab fa-pinterest"></i>
                </div>
                <div className="topCenter">
                    <ul className="topList">
                        <li className="topListItem">Home</li>
                        <li className="topListItem">About</li>
                        <li className="topListItem">Contact Us</li>
                        <li className="topListItem">Logout</li>
                    </ul>
                </div>
                <div className="topRight">
                    <img className="topImage" src="https://image.shutterstock.com/image-illustration/user-client-utilizer-glyph-icon-260nw-1174611454.jpg" alt="User Profile" />
                    <i className="topSearchIcon fas fa-search"></i>
                </div>
            </div>

        </>
    )
}
export default Topbar