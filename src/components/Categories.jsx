import './index.css';
import { Link } from 'react-router-dom';
import Sandal from '../assets/sandal-category.jpg';
import Boot from '../assets/boot-category.jpg';
import Sneaker from '../assets/sneaker-category.jpg';

export default function Categories() {
    return(
        <>
            <div className="col">
                <Link to="/products/sandals" style={{textDecoration: "none"}}>
                    <div className="card categoryCard px-0 pt-0">
                        <img src={ Sandal } alt="Sandal category pic" className='card-img-top' style={{height: "50vh", objectFit: "cover"}} />
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
                    <div className="card categoryCard px-0 pt-0">
                        <img src={ Boot } alt="Sandal category pic" className='card-img-top' style={{height: "50vh", objectFit: "cover"}} />
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
                    <div className="card categoryCard px-0 pt-0">
                        <img src={ Sneaker } alt="Sandal category pic" className='card-img-top' style={{height: "50vh", objectFit: "cover"}}  />
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