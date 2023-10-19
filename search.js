function showSuggestions(query) {
    const suggestionsContainer = document.getElementById("suggestions");
    suggestionsContainer.innerHTML = "";

    // You can implement an AJAX request to fetch suggestions from your server/database here.
    // For simplicity, let's use a static list of suggestions.
    const staticSuggestions = ["chick", "Recipe 2", "Recipe 3", "Recipe 4"];

    staticSuggestions.forEach((suggestion) => {
        if (suggestion.toLowerCase().charAt(0).includes(query.toLowerCase())) {
            const suggestionElement = document.createElement("div");
            suggestionElement.textContent = suggestion;
            suggestionElement.className = "suggestion-item";
            suggestionElement.onclick = () => {
                document.getElementById("searchInput").value = suggestion;
                suggestionsContainer.innerHTML = ""; // Clear suggestions
            };
            suggestionsContainer.appendChild(suggestionElement);
        }
    });
}
function redirectToRecipe() {
    const query = document.getElementById("searchInput").value;

    // You can implement logic to determine the URL based on the user's search query.
    // For this example, let's assume that the recipe URLs follow a pattern like "recipe/{query}".
    const recipeURL = `check.html`;

    // Redirect to the recipe webpage.
    window.location.href = recipeURL;
}
