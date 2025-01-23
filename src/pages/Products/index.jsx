import FilterButtons from "../../components/FilterButtons";
import { Link, Outlet} from "react-router-dom";
import ProductSmall from "../../components/ProductsSmall";
import { useState, useEffect } from "react";

const Products = (props) => {
  const [productPageProps, setProductPageProps] = useState([]);
  useEffect(() => {
          // console.log(props);
          setProductPageProps(props.props);
      }, [props]);

  // console.log(props.props);
    return (
      <>
        <div className="row my-5">
          <h2 className="mb-4">Categories</h2>
          <FilterButtons />
        </div>
        
        <Outlet />
      </>
    )
  };
  
  export default Products;