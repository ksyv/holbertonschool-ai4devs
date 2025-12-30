function calculateTotal(cart) {
    let total = 0;
    
    for (let i = 0; i < cart.length; i++) {
        // FIX: Parse string to float before adding
        total += parseFloat(cart[i].price); 
    }
    
    return total;
}

const myCart = [
    { item: "Book", price: "10.00" },
    { item: "Pen", price: "2.50" },
    { item: "Notebook", price: "5.00" }
];

const finalPrice = calculateTotal(myCart);
console.log("Expected Price: 17.5");
console.log("Actual Total Price: " + finalPrice);