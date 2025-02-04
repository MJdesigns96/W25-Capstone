import ProductSmall from "../../components/ProductsSmall"
import FilterButtons from "../../components/FilterButtons";

export default function Sneakers(props) {
    let products = props.props;
    let filtered = products.filter(item => item.type === "sneaker");

    return(
        <>
            <div className="row my-5">
                <h2 className="mb-4">Categories</h2>
                <FilterButtons />
            </div>
            <div className="row text-start">
                <h2 className="mb-4">Sneakers</h2>
                <p>Sneakers, workouts, walks, and everyday wear.</p>
                <p>Our sneakers are designed to be used and still keep you looking fresh for the days ahead.</p>
                <ProductSmall props={filtered}/>
            </div>
        </>
        
    )
}