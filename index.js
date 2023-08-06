
function distanceFromHqInBlocks(pickupBlock) {
    const hqBlock = 42;
    return Math.abs(pickupBlock - hqBlock);
  }
console.log(distanceFromHqInBlocks(50));

function distanceFromHqInFeet(pickupBlock) {
    const blocksInFeet = distanceFromHqInBlocks(pickupBlock);
    return blocksInFeet * 264; 
  }
console.log(distanceFromHqInFeet(50));
  
function distanceTravelledInFeet(start, destination) {
    const travelled = Math.abs(destination - start);
    return travelled * 264; 
  }
console.log(distanceTravelledInFeet(34, 38));


function calculatesFarePrice(start, destination) {
    const inFeet = distanceTravelledInFeet(start, destination);
    if (inFeet <= 400) {
      return 0; 
    } else if (inFeet > 400 && inFeet <= 2000) {
      return (inFeet - 400) * 0.02; 
    } else if (inFeet > 2000 && inFeet <= 2500) {
      return 25; 
    } else {
      return 'cannot travel that far'; 
    }
  }
console.log(calculatesFarePrice(34, 55));

  
  
