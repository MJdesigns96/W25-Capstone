import ProductSmall from "../../components/ProductsSmall"
import FilterButtons from "../../components/FilterButtons";

export default function Sandals(props) {
    let products = props.props;
    let filtered = products.filter(item => item.type === "sandal");

    return(
        <>
            <div className="row my-5">
                <h2 className="mb-4">Categories</h2>
                <FilterButtons />
            </div>
            <div className="row text-start">
                <h2 className="mb-4">Sandals</h2>
                <p>Sandals, made for the days when you don't need to go anywhere quick.</p>
                <p>Feel the sun, wind, and sand on your feet.</p>
                <ProductSmall props={filtered}/>
            </div>
        </>
    )
}