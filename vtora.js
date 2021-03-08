function findLowestPrice(products, discounts) {
// Write your code here
    let price = 0;
    for (let i = 0; i < products; i++) {
        if (discounts === "january-sale") price = price * 0.1*10;
    }
    return price;
}

findLowestPrice([2, 3,
    10, "sale january-sale",
    200, "sale EMPTY",
    2,
    3,
    "sale", 0, 10,
    "january-sale", 1, 10])