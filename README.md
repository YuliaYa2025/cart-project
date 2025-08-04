# Frontend Mentor - Product list with cart solution

This is a solution to the [Product list with cart challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Add items to the cart and remove them
- Increase/decrease the number of items in the cart
- See an order confirmation modal when they click "Confirm Order"
- Reset their selections when they click "Start New Order"
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Desktop View](./screenshot-desktop.jpg)
![Mobile View](./screenshot-mobile.jpg)

*Add screenshots of your deployed solution showing both desktop and mobile views*

### Links

- Solution URL: [GitHub Repository](https://github.com/YuliaYa2025/cart-project)
- Live Site URL: [Vercel Deployment](https://cart-project-p1irfuarx-yulia-yanochkinas-projects.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/) - Build tool and development server
- Red Hat Text - Google Fonts typography
- Frontend Mentor design system (HSL color values)

### What I learned

This project helped me strengthen several key React and CSS concepts:

**State Management in React:**
```javascript
const handleUpdateQuantity = (id, newQuantity) => {
  if (newQuantity <= 0) {
    setProducts(products.map(product => 
      product.id === id 
        ? { ...product, quantity: 0, inCart: false }
        : product
    ));
  } else {
    setProducts(products.map(product => 
      product.id === id 
        ? { ...product, quantity: newQuantity, inCart: true }
        : product
    ));
  }
};
```

**Dynamic CSS classes based on state:**
```css
.product-display-card.in-cart .product-image {
  border: 2px solid hsl(14, 86%, 42%); /* Red border when in cart */
}
```

**Responsive CSS Grid:**
```css
.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

@media (max-width: 768px) {
  .products-grid {
    grid-template-columns: 1fr;
  }
}
```

**Modal Implementation:**
I learned how to create accessible modals with backdrop clicks, smooth animations, and proper focus management.

### Continued development

Areas I want to continue focusing on in future projects:

- **Accessibility improvements** - Adding proper ARIA labels, keyboard navigation, and screen reader support
- **Performance optimization** - Implementing lazy loading for images and code splitting
- **Testing** - Adding unit tests with Jest and React Testing Library
- **State management** - Exploring Redux or Zustand for more complex applications
- **Animation libraries** - Integrating Framer Motion for more sophisticated transitions

### Useful resources

- [React Documentation](https://react.dev/) - Essential for understanding hooks and state management
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/) - Helped create the responsive product grid layout
- [Frontend Mentor Community](https://www.frontendmentor.io/community) - Great for getting feedback and seeing different approaches
- [Vite Documentation](https://vitejs.dev/guide/) - Understanding the build tool and development setup
- [Google Fonts](https://fonts.google.com/specimen/Red+Hat+Text) - For implementing the Red Hat Text typography

## Author

- Website - [Yulia Yanochkina](https://www.your-site.com)
- Frontend Mentor - [@YuliaYa2025](https://www.frontendmentor.io/profile/YuliaYa2025)
- GitHub - [@YuliaYa2025](https://www.github.com/YuliaYa2025)
- LinkedIn - [Yulia Yanochkina](https://www.linkedin.com/in/yourprofile)

## Acknowledgments

Special thanks to:

- **Claude AI** - For providing guidance on React best practices, CSS implementation, and project structure
- **Frontend Mentor** - For creating this well-designed challenge with excellent assets and specifications
- **The React Community** - For extensive documentation and community support

## Getting Started

To run this project locally:

1. Clone the repository:
```bash
git clone https://github.com/YuliaYa2025/cart-project.git
cd cart-project
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

## Project Structure

```
cart-project/
├── public/
│   └── assets/
│       └── images/          # Frontend Mentor provided images
├── src/
│   ├── component/
│   │   ├── Cart.jsx         # Cart sidebar component
│   │   ├── Cart.css
│   │   ├── ProductCard.jsx  # Cart item component
│   │   ├── ProductCard.css
│   │   ├── OrderModal.jsx   # Order confirmation modal
│   │   └── OrderModal.css
│   ├── data/
│   │   └── data.json        # Product data
│   ├── App.jsx              # Main application component
│   ├── App.css
│   └── main.jsx
└── package.json
```
