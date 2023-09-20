//Useing a class for the product to better keep track of each products
class Product { 
    constructor(name, link, price) {
      this.name = name;
      this.link = link;
      this.price = price;
    }
}
//Add the product to the localstorage when a button is pressed
function buy(){
    //featching all the relevant data about the current product
    const productName = document.getElementById('productName').textContent;
    const productLink = window.location.href;
    var button = document.getElementById('buy');
    var price = parseFloat(button.dataset.price);

    const product = new Product(productName, productLink, price);

    //adds the current product to the local storage array
    const existingProducts = JSON.parse(localStorage.getItem('products')) || [];
    existingProducts.push(product);
    localStorage.setItem('products', JSON.stringify(existingProducts));

    //User verification to make the sure they have added it
    var message = "Lagt i Varukorgen!";
    window.alert(message);
}

document.getElementById('buy').addEventListener('click', buy);