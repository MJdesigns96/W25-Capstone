import ProductSmall from "../../components/ProductsSmall";
import FilterButtons from "../../components/FilterButtons";

export default function AllProducts(props) {
    let products = props.props;

    return(
        <>
            <div className="row my-5">
                <h2 className="mb-4">Categories</h2>
                <FilterButtons />
            </div>
            <div className="row text-start">
                <h2 className="my-4">All Products</h2>
                <p>Below you will find our collection of footwear products to fit your every need and function.</p>
                <ProductSmall props={products} />
            </div>
        </>
    )
}