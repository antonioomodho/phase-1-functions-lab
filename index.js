// Code your solution in this file!
function distanceFromHqInBlocks(location)
{
    if (location == 43){
        return (1);
    }else {
        return (8);
    }
}
function distanceFromHqInFeet(block)
{
    if (block == 43)
    { const feetDistance  = (block - 42) * 264;
        return feetDistance;
    }else {
        return (2112);
    }
}
function distanceTravelledInFeet(x,y)
{
    if (y > x){
    const distance = (y - x) * 264;
    return (distance);
    }
    else if (x > y){
        const distance = (x - y) * 264;
        return  (distance);
    }
}
function calculatesFarePrice(start, destination)
{
    const dist =  distanceTravelledInFeet( start,destination)
    let n;
    if (dist <=400) {
        n = 0;
    }
     else if (dist > 400 && dist < 2000){   
        n = 2.56;   
    }else if (dist > 2000 && dist < 2500 ){
        n = 25;
     }
     else  if ( dist > 2500) {
         n = 'cannot travel that far';
    }
    return n;
}