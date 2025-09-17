import react from "react"
import "./Navbar.css"
import { Link } from "react-router"

const Navbar = () => {
    return (
        <>
            <div className="navbar-item">
                <div className="inner-navbar">
                    <div className="logo">
                        <img src="./images/logo.png" alt="" />
                    </div>
                    <div className="navbar-items">
                        <Link to="/home"><p>Home</p></Link>

                        <Link to="/about"><p>About</p></Link>
                        <Link to="/contact"><p>Contact</p></Link>
                        <Link to="./portfolio"><p>Portfolio</p></Link>
                        <Link to="./service"><p>Services</p></Link>
                        <button className="hire">Hire Me</button>

                    </div>

                </div>
            </div>
        </>
    )
}
export default Navbar
