import ProductSmall from "../components/ProductsSmall";
import Hero from "../components/Hero";
import Categories from "../components/Categories";

const Home = () => {
    return (
        <>  
            <div className='row my-2'>
                <h1>Home</h1>
            </div>
            <div className='row'>
                <div className='col'>
                    <div className="row">
                        <Hero />
                    </div>
                    <div className="row mb-5">
                        <Categories />
                    </div>
                    <div className='row'>
                        <ProductSmall />
                    </div>
                </div>
            </div>
        </>
);
  };
  
  export default Home;