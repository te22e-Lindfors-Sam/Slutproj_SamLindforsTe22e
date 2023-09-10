class Product {
    constructor(name, link, price) {
      this.name = name;
      this.link = link;
      this.price = price;
    }
}

function buy(){
    const productName = document.getElementById('productName').textContent;
    const productLink = window.location.href;
    var button = document.getElementById('buy');
    var price = parseFloat(button.dataset.price);

    const product = new Product(productName, productLink, price);

    const existingProducts = JSON.parse(localStorage.getItem('products')) || [];
    existingProducts.push(product);
    localStorage.setItem('products', JSON.stringify(existingProducts));
}

document.getElementById('buy').addEventListener('click', buy);