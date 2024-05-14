function calculateTotal(cart) {
    let total = 0;

    for (let item of cart) {
        total += item.price;
    }

    return total;
}

const cart = [
    { price: 10.99 },
    { price: 5.99 },
    { price: 29.99 }
];
console.log(calculateTotal(cart));  
