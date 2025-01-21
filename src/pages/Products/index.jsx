import FilterButtons from "../../components/FilterButtons";
import { Link, Outlet} from "react-router-dom";

const Products = () => {
    return (
      <>
        <h2>Products</h2>
        <FilterButtons />
        {/* <div className="row">
            <div className="col">
                <Link className="nav-link" to="sandals">
                    <button type="button" className="btn btn-light">Sandals</button>
                </Link>
            </div>
        </div> */}
        <Outlet />
      </>
    )
  };
  
  export default Products;