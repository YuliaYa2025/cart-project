import { useState } from "react";
import './App.css'
import ProductCard from "./component/ProductCard"
import Cart from "./component/Cart"
import OrderModal from "./component/OrderModal"
import ProductsData from './data/data.json';

function App() {
  // Initialize products from data.json with additional cart properties
  const [products, setProducts] = useState(
    ProductsData.map((product, index) => ({
      id: index + 1,
      name: product.name,
      category: product.category,
      price: product.price,
      image: product.image,
      quantity: 0, // Start with 0 quantity (not in cart yet)
      inCart: false
    }))
  );

  const [newProduct, setNewProduct] = useState("");
  const [newQuantity, setNewQuantity] = useState(1);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const handleAddProduct = () => {
    if (newProduct.trim() === "") return;

    const newCustomProduct = {
      id: Date.now(),
      name: newProduct,
      quantity: Number(newQuantity),
      price: 0, // Default price for manually added products
      category: "Custom",
      inCart: true
    };
    setProducts([...products, newCustomProduct]);
    setNewProduct("");
    setNewQuantity(1);
  };

  const handleDeleteProduct = (id) => {
    const filteredProducts = products.filter((product) => product.id !== id);
    setProducts(filteredProducts);
  };

  const handleAddProductToCart = (id) => {
    setProducts(products.map(product => 
      product.id === id 
        ? { ...product, quantity: product.quantity + 1, inCart: true }
        : product
    ));
  };

  // Updated function to handle quantity updates from Cart component
  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      // Remove product if quantity is 0 or less
      setProducts(products.map(product => 
        product.id === id 
          ? { ...product, quantity: 0, inCart: false }
          : product
      ));
    } else {
      // Update quantity
      setProducts(products.map(product => 
        product.id === id 
          ? { ...product, quantity: newQuantity, inCart: true }
          : product
      ));
    }
  };

  const handleRemoveProductFromCart = (id) => {
    setProducts(products.map(product => 
      product.id === id 
        ? { ...product, quantity: Math.max(0, product.quantity - 1), inCart: product.quantity > 1 }
        : product
    ));
  };

  // Function to handle order confirmation
  const handleConfirmOrder = () => {
    setIsOrderModalOpen(true);
  };

  // Function to handle starting a new order (clear cart)
  const handleStartNewOrder = () => {
    setProducts(products.map(product => ({ 
      ...product, 
      quantity: 0, 
      inCart: false 
    })));
    setIsOrderModalOpen(false);
  };

  // Function to close modal without clearing cart
  const handleCloseModal = () => {
    setIsOrderModalOpen(false);
  };

  // Filter products that are in cart (quantity > 0)
  const cartProducts = products.filter(product => product.quantity > 0);

  return (
    <>
      <div className="app-container">
        <div className="app-content">
          {/* Products Section */}
          <div className="products-section">
            <h1>Desserts</h1>
            
            <div className="products-grid">
              {products.map((product) => (
                <div key={product.id} className={`product-display-card ${product.inCart ? 'in-cart' : ''}`}>
                  <div className="product-image-container">
                    <img 
                      src={product.image?.desktop || product.image?.thumbnail} 
                      alt={product.name}
                      className="product-image"
                    />
                    
                    {/* Add to Cart or Quantity Controls */}
                    {product.quantity === 0 ? (
                      <button 
                        onClick={() => handleAddProductToCart(product.id)}
                        className="add-to-cart-btn"
                      >
                        <img src="/assets/images/icon-add-to-cart.svg" alt="Add to cart" />
                        Add to Cart
                      </button>
                    ) : (
                      <div className="quantity-control-overlay">
                        <button 
                          onClick={() => handleRemoveProductFromCart(product.id)}
                          className="quantity-btn decrease"
                        >
                          <img src="/assets/images/icon-decrement-quantity.svg" alt="Decrease quantity" />
                        </button>
                        <span className="quantity-display">{product.quantity}</span>
                        <button 
                          onClick={() => handleAddProductToCart(product.id)}
                          className="quantity-btn increase"
                        >
                          <img src="/assets/images/icon-increment-quantity.svg" alt="Increase quantity" />
                        </button>
                      </div>
                    )}
                  </div>
                  
                  <div className="product-details">
                    <p className="product-category">{product.category}</p>
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-price">${product.price?.toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Manual Add Product Section - Hide in production */}
            <div className="add-product-section" style={{ display: 'none' }}>
              <h2>Add Custom Product</h2>
              <div className="input-row">
                <input 
                  type="text" 
                  placeholder="Enter product name"
                  value={newProduct} 
                  onChange={(e) => setNewProduct(e.target.value)}
                />
                <input 
                  type="number" 
                  value={newQuantity} 
                  onChange={(e) => setNewQuantity(e.target.value)}
                />
                <button onClick={handleAddProduct}>Add Product</button>
              </div>
            </div>
          </div>

          {/* Cart Section */}
          <div className="cart-section">
            <Cart 
              cartProducts={cartProducts}
              onUpdateQuantity={handleUpdateQuantity}
              onRemoveProduct={handleDeleteProduct}
              onConfirmOrder={handleConfirmOrder}
            />
          </div>
        </div>

        {/* Order Confirmation Modal */}
        <OrderModal 
          isOpen={isOrderModalOpen}
          cartProducts={cartProducts}
          onConfirm={handleStartNewOrder}
          onClose={handleCloseModal}
        />
      </div>
    </>    
  );
}

export default App;