function calculateTotal(cart) {
    let total = 0;
    
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price; 
    }
    
    return total;
}

const myCart = [
    { item: "Book", price: "10.00" },
    { item: "Pen", price: "2.50" },
    { item: "Notebook", price: "5.00" }
];

const finalPrice = calculateTotal(myCart);
console.log("Total Price should be 17.50");
console.log("Actual Total Price: " + finalPrice);