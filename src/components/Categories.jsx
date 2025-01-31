import './index.css';
import { Link } from 'react-router-dom';

export default function Categories() {
    return(
        <>
            <div className="col">
                <Link to="/products/sandals" style={{textDecoration: "none"}}>
                    <div className="card categoryCard">
                        {/* Idea is to have a button appear when the image is hovered so the user can click and be directed to that category */}
                        <div className="card-body">
                            <h5 className="card-title">
                                Sandals
                            </h5>
                            <p className="card-text">
                                some card text to describe the category of item that is being shown
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col">
                <Link to="/products/boots" style={{textDecoration: "none"}}>
                    <div className="card categoryCard">
                        {/* Idea is to have a button appear when the image is hovered so the user can click and be directed to that category */}
                        <div className="card-body">
                            <h5 className="card-title">
                                Boots
                            </h5>
                            <p className="card-text">
                                some card text to describe the category of item that is being shown
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col">
                <Link to="/products/sneakers" style={{textDecoration: "none"}}>
                    <div className="card categoryCard">
                        {/* Idea is to have a button appear when the image is hovered so the user can click and be directed to that category */}
                        <div className="card-body">
                            <h5 className="card-title">
                                Sneakers
                            </h5>
                            <p className="card-text">
                                some card text to describe the category of item that is being shown
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}