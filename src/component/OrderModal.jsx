function OrderModal({ isOpen, cartProducts, onConfirm, onClose }) {
  if (!isOpen) return null;

  // Calculate total price
  const totalPrice = cartProducts.reduce((sum, product) => sum + (product.price * product.quantity), 0);

  const handleStartNewOrder = () => {
    onConfirm(); // Clear the cart
    onClose();   // Close the modal
  };

  return (
    <>
      {/* Modal Backdrop */}
      <div className="modal-backdrop" onClick={onClose}>
        {/* Modal Content */}
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          {/* Success Icon */}
          <div className="modal-header">
            <img 
              src="/assets/images/icon-order-confirmed.svg" 
              alt="Order confirmed" 
              className="success-icon"
            />
            <h2 className="modal-title">Order Confirmed</h2>
            <p className="modal-subtitle">We hope you enjoy your food!</p>
          </div>

          {/* Order Summary */}
          <div className="order-summary">
            <div className="order-items">
              {cartProducts.map((product) => (
                <div key={product.id} className="order-item">
                  <div className="order-item-image">
                    <img 
                      src={product.image?.thumbnail} 
                      alt={product.name}
                      className="item-thumbnail"
                    />
                  </div>
                  <div className="order-item-details">
                    <h4 className="order-item-name">{product.name}</h4>
                    <div className="order-item-pricing">
                      <span className="order-item-quantity">{product.quantity}×</span>
                      <span className="order-item-unit-price">@ ${product.price.toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="order-item-total">
                    ${(product.price * product.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            {/* Order Total */}
            <div className="order-total-section">
              <div className="order-total-row">
                <span className="order-total-label">Order Total</span>
                <span className="order-total-amount">${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Start New Order Button */}
          <button 
            onClick={handleStartNewOrder}
            className="start-new-order-btn"
          >
            Start New Order
          </button>
        </div>
      </div>
    </>
  );
}

export default OrderModal;