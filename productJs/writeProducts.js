getProducts();

function getProducts() {
    const storedProducts = JSON.parse(localStorage.getItem('products'));
  
    if (storedProducts && storedProducts.length > 0) {
      
    const parent = document.getElementById('cartContainer');



    var totPrice = 0;
    var i = 0;

      for (const product of storedProducts) {

        const newDiv = document.createElement('div');
        newDiv.className = 'item'; 
        newDiv.id = i;

        const name = document.createElement('p');
        name.textContent = `${product.name}`;

        const price = document.createElement('p');
        price.textContent = `${product.price}kr`;
        totPrice += parseFloat(product.price);

        const linkP = document.createElement('p');
        const link = document.createElement('a');
        link.textContent = `Länk`;
        link.href = `${product.link}`;
        link.target = `_blank`

        const trashBtn = document.createElement('button');
        trashBtn.id = 'trashBin';
        trashBtn.className = 'trashBin';
        trashBtn.addEventListener('click', deleteItem);
        const trashImg =  document.createElement('img');
        trashImg.src = "images/Icons/trash.svg";
        
        newDiv.appendChild(name);
        newDiv.appendChild(price);
        linkP.appendChild(link);
        newDiv.appendChild(linkP);
        trashBtn.appendChild(trashImg);
        newDiv.appendChild(trashBtn);
        parent.appendChild(newDiv);
        i++;

      }

    } 
    console.log(totPrice);
    if (totPrice === undefined){
          document.getElementById("totPrice").textContent = `Totalt: 0kr`;
    }
    else {
      document.getElementById("totPrice").textContent = `Totalt: ${totPrice}kr`;
    }
}

function deleteItem(trashBin){
  console.log(trashBin.target.parentNode.parentNode);
  var index = trashBin.target.parentNode.parentNode.id;

  var storedProducts = JSON.parse(localStorage.getItem('products'));
  delete storedProducts[index];
  let filteredArray = storedProducts.filter(item => item !== null);

  localStorage.setItem('products', JSON.stringify(filteredArray));

  const parentElement = document.getElementById('cartContainer');
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }


  getProducts();
}

