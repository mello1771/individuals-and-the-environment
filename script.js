
//variables
var suggestionList = [
  "Air-dry your clothes instead of using a dryer.",
  "Walk, bike, or use public transportation instead of driving in a car. Carpool whenever possible!",
  "Take fewer flights - consider using trains or other means of transportation.",
  "Reuse your old clothes, pasta jars, office supplies, etc!",
  "Eat more vegetables and less meat. Consider plant-based protein options.",
  "Throw away less of your food - buy and make the amount of food that you are going to eat. Compost your leftovers!",
  "Clean up trash you see anywhere you go - on the beach, in the city, on the road, etc.",
  "Consider buying secondhand clothes, books, furniture, utensils, and more. Buy only what you need!",
  "Turn off lights when you don't need them and only cool or heat your house when absolutely necessary.",
  "Educate others about how they can help!",
];

var suggestion = document.getElementById("suggestion");
var button = document.getElementById("button");
var count = 0;

//event listeners

button.addEventListener("click", displaySuggestion);

//functions

function displaySuggestion() {
  suggestion.innerHTML = suggestionList[count];
  count ++;
  if (count == suggestionList.length) {
    count = 0;
  }
}
