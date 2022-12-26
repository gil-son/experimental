import './styles.css';

export function ProductInfo(props: { price: string}) {
    return (
        <div className="product-price-container">
            <span>R$</span>
            {props.price}
        </div>
    );
}

