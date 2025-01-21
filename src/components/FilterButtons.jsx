import { Link, Outlet } from "react-router-dom"

export default function FilterButtons(){
    return (
        <div className="row">
            <div className="col">
                <Link className="nav-link" to="sandals">
                    <button type="button" className="btn btn-light">Sandals</button>
                </Link>
            </div>
            <div className="col">
                <Link className="nav-link" to="boots">
                    <button type="button" className="btn btn-light">Boots</button>
                </Link>
            </div>
        </div>
    )
}