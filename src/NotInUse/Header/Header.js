import './header.css'
const Header = () => {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImage"
                src="https://wallpaperaccess.com/full/1079288.jpg"
                alt="headerImage"
            />
        </div>
    )
}
export default Header;