import ProductSmall from "../../components/ProductsSmall";
import FilterButtons from "../../components/FilterButtons";

export default function Boots(props) {
    let products = props.props;
    let filtered = products.filter(item => item.type === "boot");

    return(
        <>
            <div className="row my-5">
                <h2 className="mb-4">Categories</h2>
                <FilterButtons />
            </div>
            <div className="row text-start">
                <h2 className="mb-4">Boots</h2>
                <p>Boots, made to be resiliant and weatherproof while remaining fashionable for all to see.</p>
                <p>Statement, function, and class all wrapped in one.</p>
                <ProductSmall props={filtered}/>
            </div>
        </>
        
    )
}