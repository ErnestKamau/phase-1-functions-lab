// Code your solution in this file!
function distanceFromHqInBlocks(street){
    const hqStreet = 42;
    return Math.abs(street - hqStreet);
}
distanceFromHqInBlocks(43);

function distanceFromHqInFeet(street){
    const blocks = distanceFromHqInBlocks(street);
    return blocks * 264;
}
console.log(distanceFromHqInFeet(34));



function distanceTravelledInFeet(start, destination) {
    const blocksTravelled = Math.abs(start - destination);
    return blocksTravelled * 264;
}
console.log(distanceTravelledInFeet(45, 55));


function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;  
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;   // 
  } else if (distance > 2000 && distance <= 2500) {
    return 25;   
  } else {
    return "cannot travel that far";   
  }
}
