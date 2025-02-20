import { Link } from "react-router-dom"
import Profile from "../assets/user-solid.svg"
import Cart from "../assets/cart.svg"

export default function Header() {
    //check the loggedIn status from local storage for profile redirect
    let logStatus = localStorage.getItem('loggedIn');
    let booleanValue = logStatus === "true";

    let accountRedirect;
    if (!booleanValue) {
        accountRedirect = "/accounts/login"
    } else {
        accountRedirect = "/accounts/details"
    }

    return (
        <nav className="navbar navbar-expand-lg bg-primary row sticky-top">
            <div className="container-fluid">
                <Link className="nav-link text-light me-3" to="/">
                    <h2>Shose</h2>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/products/all-products">Products</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a  className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">About</a>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link className="nav-link" to="/brand">Brand</Link>
                                </li>
                                <li>
                                    <Link className="nav-link" to="/blogs/short-blogs">Blog</Link>
                                </li>
                            </ul>
                        </li>

                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-info" type="submit">Search</button>
                    </form>
                    <div className="mx-3">
                        <Link to={accountRedirect}>
                            <img src={Profile} alt="profile icon" width={32} style={{color:"#fff"}} />
                        </Link>
                    </div>
                    <div className="mx-3">
                        <Link to='/checkout/cart'>
                            <img src={Cart} alt="shopping cart" width={32} style={{color:"#fff"}} />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}