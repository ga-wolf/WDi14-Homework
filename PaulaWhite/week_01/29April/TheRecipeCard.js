// Create an object to hold information on your favorite recipe.
//It should have properties for title (a string), servings (a number),
//and ingredients (an array of strings).

var recipe = {
   title: "margarita",
   serving: 1,
   ingredients: [
   "Tequila",
   "Cointreau",
   "Lime",
   "Salt",
   "Ice",
   ]

 };
 console.log("Title " + recipe.title);
 console.log ("Serves: " + recipe.serving);
 console.log ("Ingredients:");
 for (var i = 0; i < recipe.ingredients.length; i += 1){
console.log (recipe.ingredients[i]);


 }
