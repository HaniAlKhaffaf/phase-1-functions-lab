function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    if (someValue > 42)
        return someValue - 42
    else
        return 42 - someValue
}

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet

}

function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    return distanceFromHqInFeet(destination) - distanceFromHqInFeet(start)
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400)
        return 0;
    else if (distance > 400 && distance <= 2000)
        return (((distance - 400)*2)/100) ;
    else if (distance > 2000 && distance < 2500)
        return 25;
    else return 'cannot travel that far';


}
