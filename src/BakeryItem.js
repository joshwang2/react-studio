// import "./BakeryItem.css";

function BakeryItem(props) {

    return(
        <div className="BakeryItem">
            <h3>{props.item.name}</h3>
            <p>{props.item.description}</p>
            <p>{props.item.price}</p>
            <img alt="" src={props.item.image} />
            <button onClick={() => {props.addToCart(props.item)}}>Add to cart!</button>
        </div>
    )
}

export default BakeryItem;