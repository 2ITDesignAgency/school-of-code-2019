// ASSIGNMENT Arrays 003
// Get the products Array you created from Exercise Arrays 001 which contains total price

// 1) Loop over the array and for each element display an HTML element, which contains the price, total price and product name

// 2) Create 2 buttons with text "Display ASC", "Display DESC". When the user clicks on the 'Display ASC' button, the list is sorted based on the price in ascending order and displayed in the screen. When the user clicks on the Display DESC, the list of products is displayed according to price in descending order.

// 3) Filter the products array, create a new array which contains only products that are cheaper than 500 and display the list in the console

// crating a for method to print for each object a difrent div tha will show in html
let productIndex = productsNew.length;
for (var i = 0; i < productIndex; i++) {
    console.log(productsNew[i]);
    document.querySelector('#here').innerHTML += `<div class="product col-md-3"><strong>Product Name:</strong> ${productsNew[i].name}<br> <strong>Price:</strong> ${productsNew[i].price} €<br> <strong>Price With VAT:</strong> ${productsNew[i].priceWithVat} €`;
}
//assinging addEventListener to the buttons
document.getElementById("asc").addEventListener("click", ascendingOrder);
document.getElementById("desc").addEventListener("click", descendingOrder);


// making a function to sort objects by price and replace the text in the original
function descendingOrder() {
    productsNew.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    let productIndex = productsNew.length;
    document.querySelector('#here').innerHTML = " ";
    
    for (var i = 0; i < productIndex; i++) {
        console.log(productsNew[i]);
                document.querySelector('#here').innerHTML += `<div class="product col-md-3"><strong>Product Name:</strong> ${productsNew[i].name}<br> <strong>Price:</strong> ${productsNew[i].price} €<br> <strong>Price With VAT:</strong> ${productsNew[i].priceWithVat} €`;
    }

}

// making a function to sort objects by price and replace the text in the original
function ascendingOrder() {
    productsNew.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    let productIndex = productsNew.length;
    document.querySelector('#here').innerHTML = " ";
    
    for (var i = 0; i < productIndex; i++) {
        console.log(productsNew[i]);
                document.querySelector('#here').innerHTML += `<div class="product col-md-3"><strong>Product Name:</strong> ${productsNew[i].name}<br> <strong>Price:</strong> ${productsNew[i].price} €<br> <strong>Price With VAT:</strong> ${productsNew[i].priceWithVat} €`;
    }
}

//making a copy of products new
let over500 = [...productsNew]
//filtering so it shows in console.log only products under 500
over500 =  over500.filter(function(over500) {
	return over500.price < 500;
});
console.log(over500);

let productover500Index = over500.length;
for (var i = 0; i < productover500Index; i++) {
    console.log(over500[i]);
    document.querySelector('#here2').innerHTML += `<div class="product col-md-3"><strong>Product Name:</strong> ${over500[i].name}<br> <strong>Price:</strong> ${over500[i].price} €<br> <strong>Price With VAT:</strong> ${over500[i].priceWithVat} €`;
}

