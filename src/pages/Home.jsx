import ProductSmall from "../components/ProductsSmall";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import LandingAboutUs from "../components/LandingAboutUs";
import { useEffect, useState } from "react";

const Home = (props) => {
    const [homePageProducts, setHomePageProducts] = useState([]);
    useEffect(() => {
        // console.log(props);
        setHomePageProducts(props);
    }, [props]);

    // console.log(homePageProducts.props);

    const passProductsProps = (
        homePageProducts.props != undefined ?
            <ProductSmall props = {homePageProducts.props}/> : ""
    )

    return (
        <> 
            <div className='row'>
                <div className='col'>
                    <div className="row">
                        <Hero />
                    </div>
                    <div className="row mb-5">
                        <Categories />
                    </div>
                    <div className='row mb-5'>
                        {passProductsProps}
                    </div>
                    <div className="row">
                        <LandingAboutUs />
                    </div>
                </div>
            </div>
        </>
);
  };
  
  export default Home;