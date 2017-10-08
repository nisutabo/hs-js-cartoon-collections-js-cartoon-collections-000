
function dwarfRollCall(dwarves) {
  var arr = [];

  for (var i = 0; i < dwarves.length; i++){
    var dwarf = dwarves[i];
      arr.push((i + 1).toString() + '. ' + dwarf);
  }
  return arr.join(' ');
}

function summonCaptainPlanet(planeteerCalls){
  var arr = [];

  for (var i = 0; i < planeteerCalls.length; i++){
    var calls = planeteerCalls[i];
      arr.push(calls.toUpperCase() + '!' );
  }
  return arr;
}

function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i++){
    var word = words[i];

    if (word.length > 4){
      return true;
    }
  }
  return false;
}

function findTheCheese (foods) {
  var cheese = ["cheddar", "gouda", "camembert"]

  for (var i = 0; i < foods.length; i++){
    var food = foods[i];
    if (cheese.includes(food)){
      return food;
    }
  }
  return "no cheese!";
}
