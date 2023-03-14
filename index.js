// Code your solution in this file!
function distanceFromHqInBlocks (dstInBlock) {
    const hqInBlock = 42
    if (dstInBlock > hqInBlock) {
        return dstInBlock - hqInBlock
    } else {
        return hqInBlock - dstInBlock
    }
    
}

function distanceFromHqInFeet(dstInFeet) {

    const trvDstInFeet = distanceFromHqInBlocks(dstInFeet) * 264
 
    return trvDstInFeet
 
 }

 function distanceTravelledInFeet(start, destination) {
let trvInFeet
    if (destination > start) {
        trvInFeet = (destination - start) * 264

       return trvInFeet
    } 
    else {
        trvInFeet = (start - destination) * 264
    }

    return trvInFeet
 }

 function calculatesFarePrice(start, destination) {

    let totalFeet = distanceTravelledInFeet(start, destination)
    
     if(totalFeet <= 400) {
        
        return 0

    } else if(totalFeet < 2000) {
        return (totalFeet - 400) * 0.02
        

    } else if(totalFeet < 2500) {
        
        return 25

    } else {
        return 'cannot travel that far'
    }

 }