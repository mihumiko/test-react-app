import { Link } from "react-router-dom"
import { products } from "../../data"
import './ProductList.css'
export default function ProductList(){
    return (
        <div className='grid-container'>
          {products.map((product) => (
            <Link to={`/product/${product.id}`} key = {product.id} className='product'>
              <img src = {product.image} alt ={product.name} />
              <h2>{product.name}</h2>
            </Link>
          ))}
        </div>
    )
}