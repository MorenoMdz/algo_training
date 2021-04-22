// function totalMealPrice(meal_cost, tip_percent, tax_percent) {
//   const tipMultiplier = (parseInt(tip_percent, 10) * parseFloat(meal_cost)) / 100;
//   const taxMultiplier = (parseInt(tax_percent, 10) * parseFloat(meal_cost)) / 100;
//   const totalCost = meal_cost + tipMultiplier + taxMultiplier;
//   console.log(Math.floor(totalCost));
// } // 3/4 but 4/4 with Math.round()!

function totalMealPrice(meal_cost, tip_percent, tax_percent) {
  let total_cost;
  total_cost = meal_cost + (meal_cost * tip_percent) / 100 + (meal_cost * tax_percent) / 100;
  console.log(Math.round(total_cost));
}
totalMealPrice(12.0, 20, 8);
