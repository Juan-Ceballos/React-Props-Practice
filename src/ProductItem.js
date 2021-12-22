const ProductItem = (props) => {
    const {name, price} = props 
    return (
        <li>
            {name} - ${price}
        </li>
    )
}

export default ProductItem