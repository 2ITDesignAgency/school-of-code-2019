// ASSIGNMENT Arrays 001
const products = [
    { price: 200, name: "iPhone" },
    { price: 300, name: "Nokia" },
    { price: 250, name: "Samsung" },
    { price: 150, name: "Xiaomi" },
    { price: 400, name: "Nexus" },
    { price: 500, name: "Sony" },
    { price: 500, name: "Huawei" },
    { price: 270, name: "Motorola" }
];

// making a copy of an array and adding a new property with .map method
const  productsNew = products.map(x => {
    x.priceWithVat = Number(x.price) * 1.23;
    return x
})

console.log(productsNew);

// Create a new array which contains the products, but each product object contains a new property 'total' which contains the total value (price + VAT 23%)