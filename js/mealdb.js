const loadMeals = (mealName) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
    .then((res) => res.json())
    .then((data) => getMeals(data.meals));
};
const getMeals = (meals) => {
  const mealsContainer = document.getElementById("meal-container");
  mealsContainer.innerHTML = "";
  // console.log(meals);
  meals.forEach((meal) => {
    // console.log(meal);
    const { strMeal, strMealThumb, strInstructions, idMeal } = meal;
    // Create and append card
    const mealDiv = document.createElement("div");
    mealDiv.classList.add("col");
    mealDiv.innerHTML = `
 
            <div onclick="displayMealDetails(${idMeal})" class="card h-100">
              <img src="${strMealThumb}" class="card-img-top" alt="" />
              <div class="card-body">
                <h5 class="card-title">${strMeal}</h5>
                <p class="card-text">
                 ${strInstructions.slice(0, 200)}
                </p>
              </div>
            </div>
        
    `;
    mealsContainer.appendChild(mealDiv);
  });
};
const searchFood = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  // console.log(searchText);
  loadMeals(searchText);
  searchField.value = "";
};
const displayMealDetails = (searchID) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${searchID}`;
  // console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => loadMealDetails(data.meals[0]));
};

const loadMealDetails = (mealDetails) => {
  const { strMealThumb, strMeal, strInstructions } = mealDetails;
  const mealDetailsField = document.getElementById("detail-container");
  mealDetailsField.innerHTML = "";
  const mealDiv = document.createElement("div");
  mealDiv.classList.add("col");
  mealDiv.innerHTML = `

            <div class="card h-100">
              <img src="${strMealThumb}" class="card-img-top" alt="" />
              <div class="card-body">
                <h5 class="card-title">${strMeal}</h5>
                <p class="card-text">
                 ${strInstructions.slice(0, 200)}
                </p>
              </div>
            </div>

    `;
  mealDetailsField.appendChild(mealDiv);
  // console.log(mealDetails);
};
loadMeals("a");
