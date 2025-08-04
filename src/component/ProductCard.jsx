function ProductCard({ name, quantity, price, category, onDelete, onIncrease, onDecrease }) {
    return (
        <li className="product-card">
            <div className="product-info">
                <h3 className="product-name">{name}</h3>
                <div className="product-pricing">
                    <span className="product-quantity">{quantity}×</span>
                    <span className="product-unit-price">@ ${price.toFixed(2)}</span>
                    <span className="product-line-total">${(price * quantity).toFixed(2)}</span>
                </div>
            </div>
            
            <div className="product-controls">
                <button 
                    onClick={onDelete}
                    className="delete-btn"
                    title="Remove item"
                >
                    ×
                </button>
            </div>
        </li>
    );
}

export default ProductCard;