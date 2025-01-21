import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <div className="col bg-secondary-subtle pt-3">
            <div className="row my-5">
                <div className="col">
                    <div className="row">
                        <h2>Shipping</h2>
                    </div>
                    <div className="row">
                        <h5>45 Day Returns</h5>
                        <p>Use our online portal to process your return within 45 days of purchase.</p>
                        <h5>Free Worldwide Delivery</h5>
                        <p>Free worldwide delivery on orders over $95 USD.</p>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <h2>Site</h2>
                    </div>
                    <Link to="/">
                        <h5>Brand</h5>
                    </Link>
                    <Link to="/products">
                        <h5>Products</h5>
                    </Link>
                    <Link to="/about">
                        <h5>About</h5>
                    </Link>
                </div>
                <div className="col">
                    <div className="row">
                        <h2>Socials</h2>
                    </div>
                    <div className="row">
                        <a href="/">Social Link 1</a>
                    </div>
                    <div className="row">
                        <a href="/">Social Link 2</a>
                    </div>
                    <div className="row">
                        <a href="/">Social Link 3</a>
                    </div>
                </div>
            </div>
            <div className="row">
                <p>CopyRight &copy;2025 information and privacy policies and things.</p>
            </div>
        </div>
    )
}