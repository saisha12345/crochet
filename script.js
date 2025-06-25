// script.js

document.addEventListener('DOMContentLoaded', () => {
  fetch('products.json')
    .then(response => response.json())
    .then(data => {
      const productList = document.getElementById('product-list');

      data.products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        productDiv.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p><strong>$${product.price}</strong></p>
          <button onclick="alert('You can customize this to add to cart or redirect to a payment link')">Buy Now</button>
        `;

        productList.appendChild(productDiv);
      });
    })
    .catch(error => {
      console.error('Error loading products:', error);
    });
});
