function Cart({ cartProducts, onUpdateQuantity, onRemoveProduct, onConfirmOrder }) {
    // Calculate total items and total price
    const totalItems = cartProducts.reduce((sum, product) => sum + product.quantity, 0);
    const totalPrice = cartProducts.reduce((sum, product) => sum + (product.price * product.quantity), 0);
  
    return (
      <div className="cart">
        <div className="cart-header">
          <h2 className="cart-title">Your Cart ({totalItems})</h2>
        </div>
  
        {cartProducts.length === 0 ? (
          <div className="empty-cart">
            <img 
              src="/assets/images/illustration-empty-cart.svg" 
              alt="Empty cart" 
              className="empty-cart-image"
            />
            <p className="empty-cart-text">Your added items will appear here</p>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="cart-items">
              {cartProducts.map((product) => (
                <div key={product.id} className="cart-item">
                  <div className="cart-item-details">
                    <h3 className="cart-item-name">{product.name}</h3>
                    <div className="cart-item-pricing">
                      <span className="cart-item-quantity">{product.quantity}×</span>
                      <span className="cart-item-unit-price">@ ${product.price.toFixed(2)}</span>
                      <span className="cart-item-total">${(product.price * product.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => onRemoveProduct(product.id)}
                    className="remove-item-btn"
                    title="Remove item"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
  
            {/* Order Total */}
            <div className="order-total">
              <div className="total-row">
                <span className="total-label">Order Total</span>
                <span className="total-amount">${totalPrice.toFixed(2)}</span>
              </div>
            </div>
  
            {/* Carbon Neutral Notice */}
            <div className="carbon-neutral">
              <img 
                src="/assets/images/icon-carbon-neutral.svg" 
                alt="Carbon neutral" 
                className="carbon-icon"
              />
              <span className="carbon-text">
                This is a <strong>carbon-neutral</strong> delivery
              </span>
            </div>
  
            {/* Confirm Order Button */}
            <button 
              onClick={onConfirmOrder}
              className="confirm-order-btn"
              disabled={cartProducts.length === 0}
            >
              Confirm Order
            </button>
          </>
        )}
      </div>
    );
  }
  
  export default Cart;