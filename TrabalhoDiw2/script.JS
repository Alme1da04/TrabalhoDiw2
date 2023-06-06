function fetchProducts() {
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(products => {
      let productRow = document.getElementById('productRow');

      function filterProducts(filterText) {

        productRow.innerHTML = '';

        const filteredProducts = products.filter(product =>
          product.title.toLowerCase().includes(filterText.toLowerCase())
        );

        filteredProducts.forEach(product => {

          let cardHtml = `
                      <div class="col-md-4 mb-4">
                          <a href="product-details.html?id=${product.id}" class="card-link">
                              <div class="card h-100">
                                  <img src="${product.image}" class="card-img-top" alt="${product.title}">
                                  <div class="card-body">
                                      <h5 class="card-title">${product.title}</h5>
                                      <p class="card-text">${product.description}</p>
                                      <p class="card-price">$${product.price}</p>
                                      <button class="btn btn-primary">Comprar</button>
                                  </div>
                              </div>
                          </a>
                      </div>
                  `;

          productRow.innerHTML += cardHtml;
        });
      }

      function updateProductList() {
        const filterText = document.getElementById('filterInput').value;
        filterProducts(filterText);
      }

      filterProducts('');

      document.getElementById('filterInput').addEventListener('input', updateProductList);
    });
}

fetchProducts();





function fetchProducts() {
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(products => {
      let productRow = document.getElementById('productRow');


      for (let i = 0; i < 3; i++) {
        let product = products[i];

        let cardHtml = `
        <div class="col-md-4 mb-4">
          <a href="product-details.html?id=${product.id}" class="card-link">
            <div class="card h-100">
              <img src="${product.image}" class="card-img-top" alt="${product.title}">
              <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">${product.description}</p>
                <p class="card-price">$${product.price}</p>
                <button class="btn btn-primary">Comprar</button>
              </div>
            </div>
          </a>
        </div>
      `;

        productRow.innerHTML += cardHtml;
      }

      for (let i = 3; i < 6; i++) {
        let product = products[i];

        let cardHtml = `
        <div class="col-md-4 mb-4">
          <a href="product-details.html?id=${product.id}" class="card-link">
            <div class="card h-100">
              <img src="${product.image}" class="card-img-top" alt="${product.title}">
              <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">${product.description}</p>
                <p class="card-price">$${product.price}</p>
                <button class="btn btn-primary">Comprar</button>
              </div>
            </div>
          </a>
        </div>
      `;

        productRow.innerHTML += cardHtml;
      }
    });
}

fetchProducts();





document.addEventListener('DOMContentLoaded', function () {

  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  async function getDetalhes(id) {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();

      exibirDetalhes(data);
    } catch (error) {
      console.log('Erro ao buscar os detalhes do produto:', error);
    }
  }

  function exibirDetalhes(produto) {
    const productDetails = document.getElementById('DetalhesTop');

    const title = document.createElement('h2');
    title.textContent = produto.title;

    const image = document.createElement('img');
    image.textContent = produto.image;
    image.src = produto.image;
    image.alt = produto.title;


    const price = document.createElement('p');
    price.textContent = `Preço: $${ produto.price }`;

    const description = document.createElement('p');
    description.textContent = produto.description;

    productDetails.appendChild(title);
    productDetails.appendChild(image);
    productDetails.appendChild(price);
    productDetails.appendChild(description);

  }

  getDetalhes(productId);
});