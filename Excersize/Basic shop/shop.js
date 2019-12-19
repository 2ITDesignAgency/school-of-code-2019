let URL = "https://api.myjson.com/bins/v5fhg";

function handleReponse(res) {
  //   console.log("Success", res);
  return res.json(); // => Promise
}

function handleError(err) {
  //   console.error("Fetch error", err);
}

function handleData(data) {
  // setting price for products
  let productPrice1 = data.product[0].price;
  let productPrice2 = data.product[1].price;
  let productPrice3 = data.product[2].price;
  let productPrice4 = data.product[3].price;
  let productPrice5 = data.product[4].price;
  // console.log(productPrice1);
  let i;
  for (i = 0; i < data.product.length; i++) {
    let productBox = `<div class="col-4 col-sm-4 co-md-4 col-lg-3 single-product">
      <img src="${data.product[i].imgUrl}" alt=""><br>
        <p class="product-title">${data.product[i].name}</p><br>${data.product[i].price}€<br>
        <button onclick="addPrice${i}(); " type="button" id="product${i}" class="addtocart btn btn-dark btn-md btn-block" value="${data.product[i].price}">Add to Cart</button>
        </div>`;
    // console.log(productBox);
    document.querySelector(".product").innerHTML += productBox;
  }
}

fetch(URL)
  .then(handleReponse)
  .then(handleData)
  .catch(handleError);

let totalItems = 0;
let totalCost = 0;



function addPrice0() {
  totalCost = document.getElementById("price").innerText;
  let amount = document.getElementById("product0").getAttribute("value");
  let price = document.querySelector("#price");
  price.innerHTML = `${parseFloat(totalCost) + parseFloat(amount)}`;
  document.querySelector("#items").innerHTML = ++totalItems;
}

function addPrice1() {
    totalCost = document.getElementById("price").innerText;
    let amount = document.getElementById("product1").getAttribute("value");
    let price = document.querySelector("#price");
    price.innerHTML = `${parseFloat(totalCost) + parseFloat(amount)}`;
    document.querySelector("#items").innerHTML = ++totalItems;
}

function addPrice2() {
    totalCost = document.getElementById("price").innerText;
    let amount = document.getElementById("product2").getAttribute("value");
    let price = document.querySelector("#price");
    price.innerHTML = `${parseFloat(totalCost) + parseFloat(amount)}`;
    document.querySelector("#items").innerHTML = ++totalItems;
}

function addPrice3() {
    totalCost = document.getElementById("price").innerText;
    let amount = document.getElementById("product3").getAttribute("value");
    let price = document.querySelector("#price");
    price.innerHTML = `${parseFloat(totalCost) + parseFloat(amount)}`;
    document.querySelector("#items").innerHTML = ++totalItems;
}

function addPrice4() {
    totalCost = document.getElementById("price").innerText;
    let amount = document.getElementById("product4").getAttribute("value");
    let price = document.querySelector("#price");
    price.innerHTML = `${parseFloat(totalCost) + parseFloat(amount)}`;
    document.querySelector("#items").innerHTML = ++totalItems;
}
