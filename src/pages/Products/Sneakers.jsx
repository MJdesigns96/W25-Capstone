import ProductSmall from "../../components/ProductsSmall"

export default function Sneakers(props) {
    return(
        <div className="row">
            <h2>Sneakers</h2>
            <ProductSmall props={props.props}/>
        </div>
    )
}