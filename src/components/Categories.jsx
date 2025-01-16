import './index.css';
import { Link } from 'react-router-dom';

export default function Categories() {
    return(
        <>
            <div className="col">
                <div className="card categoryCard">
                    {/* Idea is to have a button appear when the image is hovered so the user can click and be directed to that category */}
                    <div className='onHoverBtn'>
                        <Link to="/products">
                            <button type='button'>See More</button>
                        </Link>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">
                            Category title
                        </h5>
                        <p className="card-text">
                            some card text to describe the category of item that is being shown
                        </p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card categoryCard">
                    {/* Idea is to have a button appear when the image is hovered so the user can click and be directed to that category */}
                    <div className='onHoverBtn'>
                        <Link to="/products">
                            <button type='button'>See More</button>
                        </Link>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">
                            Category title
                        </h5>
                        <p className="card-text">
                            some card text to describe the category of item that is being shown
                        </p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card categoryCard">
                    {/* Idea is to have a button appear when the image is hovered so the user can click and be directed to that category */}
                    <div className='onHoverBtn'>
                        <Link to="/products">
                            <button type='button'>See More</button>
                        </Link>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">
                            Category title
                        </h5>
                        <p className="card-text">
                            some card text to describe the category of item that is being shown
                        </p>
                    </div>
                </div>
            </div>
        </>
        
    )
}