import './styles.css';

export function ProductInfo(props: { price: string}) {
    return (
        <div className="product-price-container">
            <span>R$</span>
            <b>{props.price}</b>
        </div>
    );
}

