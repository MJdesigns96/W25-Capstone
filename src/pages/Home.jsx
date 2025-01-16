import ProductSmall from "../components/ProductsSmall";
import Hero from "../components/Hero";

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
                    <div className='row'>
                        <ProductSmall />
                    </div>
                </div>
            </div>
        </>
);
  };
  
  export default Home;