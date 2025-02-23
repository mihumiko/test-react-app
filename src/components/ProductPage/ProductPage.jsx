import { useParams } from "react-router-dom";
import { products } from "../../data";
import './ProductPage.css'

export default function ProductPage(){
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id))

    console.log(id)
    console.log(product)

    if (!product){
        return <h2>Товар не найден</h2>;
    }

    return (
        <div className="product-page">
            <div className="container">
                <img src={product.image} alt= {product.name} />
                <h1>{product.name}</h1>
                <div className="description">
                    <h3>Описание</h3>
                    <p> 
                        Нужно добавить описание ингридиентов
                    </p>
                </div>
            </div>
            <p>Нужно добавить описание товара, йоу</p>
        </div>
    );
}