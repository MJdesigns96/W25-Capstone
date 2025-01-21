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

  console.log(props.props);
    return (
      <>
        <h2>Products</h2>
        <FilterButtons />
        <div className="row mt-5">
          <h2 className="my-4">All Products</h2>
          <ProductSmall props={props.props} />
        </div>
    
        <Outlet />
      </>
    )
  };
  
  export default Products;