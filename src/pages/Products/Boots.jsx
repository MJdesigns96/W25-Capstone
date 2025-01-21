import ProductSmall from "../../components/ProductsSmall";

export default function Boots(props) {

    return(
        <div className="row">
            <h2>Boots</h2>
            <ProductSmall props={props.props}/>
        </div>
    )
}