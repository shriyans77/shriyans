function setup() {
  //cook();
  //cook('noodles');
  cook('noodles',['chings noodles','water','salt','veggies','chinese sauces']);
}

function cook(whatToCook ="nothing",ingredients = []) {
  console.log("now cooking "+whatToCook);
  if(ingredients.length>1){
    showRecipe(ingredients);
    console.log("ingredients are present");
  }else{
    console.log("missing all ingredients");
  }
}
//take ingredients
//and list the recipe for a dish
function showRecipe(collection=[]){
  for(let x=0; x<collection.length; x++){ 
 console.log(collection[x]);
  } 
}