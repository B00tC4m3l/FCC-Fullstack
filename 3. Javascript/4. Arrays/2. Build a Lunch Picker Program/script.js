let lunches = [];

function addLunchToEnd(arr, item){
  arr.push(item);
  console.log(`${item} added to the end of the lunch menu.`);
  return arr;
}

function addLunchToStart(arr, item){
  arr.unshift(item);
  console.log(`${item} added to the start of the lunch menu.`);
  return arr;
}

function removeLastLunch(arr){
  let item = arr.pop();
  if(item != undefined){
    console.log(`${item} removed from the end of the lunch menu.`);
  }else{
    console.log("No lunches to remove.");
  }
  return arr;
}

function removeFirstLunch(arr){
  let item = arr.shift();
  if(item != undefined){
    console.log(`${item} removed from the start of the lunch menu.`);
  }else{
    console.log("No lunches to remove.");
  }
  return arr;
}

function getRandomLunch(arr){
  if(arr.length == 0){
    console.log("No lunches available.");
    return;
  }
  let randIndex = Math.round(Math.random()*(arr.length-1));
  console.log(`Randomly selected lunch: ${arr[randIndex]}`);
}

function showLunchMenu(arr){
  if(arr.length == 0){
    console.log("The menu is empty.");
    return;
  }
  console.log(`Menu items: ${arr.join(", ")}`);
}


removeFirstLunch(["Salad", "Eggs", "Cheese"])