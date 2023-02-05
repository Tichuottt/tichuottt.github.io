import {Link} from "react-router-dom";

const Products = (props) => {
    return (
        <section>
            <h1>Products page</h1>
            <ul>
                <li><Link to={'products/book'}>Book</Link></li>
                <li><Link to={'products/car'}>Car</Link></li>
                <li><Link to={'products/Plan'}>Plane</Link></li>
            </ul>
        </section>
    )
}

export default Products
