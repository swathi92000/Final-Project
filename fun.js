 // Ingredient quantities and prices
 const ingredientData = {
    "rice": { quantity: 2, price: 2.00 },
    "chicken": { quantity: 500, price: 5.00 },
    "yogurt": { quantity: 0.5, price: 1.50 },
    // Add more ingredients with quantities and prices
};

function updateIngredients() {
    const peopleCount = document.getElementById("peopleCount").value;

    // Update ingredient quantities based on the number of people
    for (const ingredient in ingredientData) {
        const quantitySpan = document.getElementById(ingredient + "Quantity");
        const priceSpan = document.getElementById(ingredient + "Price");
        const ingredientInfo = ingredientData[ingredient];

        quantitySpan.textContent = (ingredientInfo.quantity * peopleCount).toFixed(2);
        priceSpan.textContent = (ingredientInfo.price * peopleCount).toFixed(2);
    }

    // Calculate and update the total cost
    let totalCost = 0;
    for (const ingredient in ingredientData) {
        const ingredientInfo = ingredientData[ingredient];
        totalCost += ingredientInfo.price * peopleCount;
    }

    const totalCostSpan = document.getElementById("totalCost");
    totalCostSpan.textContent = totalCost.toFixed(2);
}

function removeIngredient(button, ingredientName) {
    const row = button.parentNode.parentNode;
    row.remove();

    // Deduct the cost of the removed ingredient from the total cost
    const ingredientInfo = ingredientData[ingredientName];
    const peopleCount = document.getElementById("peopleCount").value;
    const removedCost = ingredientInfo.price * peopleCount;

    const totalCostSpan = document.getElementById("totalCost");
    totalCostSpan.textContent = (parseFloat(totalCostSpan.textContent) - removedCost).toFixed(2);

    updateIngredients();
}

// Initialize the ingredient quantities and total cost
updateIngredients();