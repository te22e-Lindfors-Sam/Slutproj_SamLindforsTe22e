getProducts();

function getProducts() {
    const storedProducts = JSON.parse(localStorage.getItem('products'));
  
    if (storedProducts && storedProducts.length > 0) {
      
    const parent = document.getElementById("cartContainer");
    var totPrice = 0;

      for (const product of storedProducts) {

        const newDiv = document.createElement('div');
        newDiv.className = 'item'; 

        const name = document.createElement('p');
        name.textContent = `${product.name}`;

        const price = document.createElement('p');
        price.textContent = `${product.price}`;
        totPrice += parseFloat(product.price);

        const linkP = document.createElement('p');
        const link = document.createElement('a');
        link.textContent = `Länk`;
        link.href = `${product.link}`;
        link.target = `_blank`
        
        newDiv.appendChild(name);
        newDiv.appendChild(price);
        linkP.appendChild(link);
        newDiv.appendChild(linkP);
        parent.appendChild(newDiv);

      }
      document.getElementById("totPrice").textContent = `Totalt: ${totPrice}kr`
    } 
  }