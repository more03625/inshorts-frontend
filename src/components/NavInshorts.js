import HamburgerDrawer from './HamburgerDrawer'
import './navinshorts.css'
const NavInshorts = ({ setCategory }) => {
    return (
        <>
            <div className="nav">
                <div className="icon">
                    <HamburgerDrawer setCategory={setCategory} />
                </div>
                <img className="headerLogo" src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" alt="inshorts-logo" />
            </div>
        </>
    )
}

export default NavInshorts;