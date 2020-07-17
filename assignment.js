//feetToMile
function feetToMile(feet){
    var mile=feet*0.00019;
    return mile;
}
var resultMile=feetToMile(156);
console.log(resultMile);

//woodCalculator
function woodCalculator(chair,table,bed){
    var chairCount=chair*1;
    var tableCount=table*3;
    var bedCount=bed*5;
    var totalWood=chairCount+tableCount+bedCount;
    return totalWood;
}
var coverage=woodCalculator(12,13,15);
console.log(coverage);

//brickCalculator
function brickCalculator(numberOfFloor) {
    if(numberOfFloor <1){
        console.log('Number of Floor cannot be zero or negative'); 
        var bricks = 'Invalid Value'; 
    }
    if(numberOfFloor >= 1 && numberOfFloor <=10){
        var bricks = numberOfFloor * 15 * 1000;  
    } 
    else if(numberOfFloor >= 11 && numberOfFloor <=20){
        var totalBricks1 = 10 * 15 * 1000; 
        var floorRemain = numberOfFloor % 10; 
        var totalBricks2 = floorRemain * 12 * 1000; 
        var bricks = totalBricks1 + totalBricks2;  
    }
    else if ( numberOfFloor > 20){
        var totalBricks1 = 10 * 15 * 1000; 
        var totalBricks2 = 10 * 12 * 1000; 
        var floorRemain = numberOfFloor - 20; 
        var totalBricks3 = floorRemain * 10 * 1000; 
        var bricks = totalBricks1 + totalBricks2 + totalBricks3;  
    }
    return bricks; 
}
var floor = 36; 
var calculateBrick = brickCalculator(floor); 
console.log('Required Brick: ', calculateBrick);

//tinyFriend
function tinyFriend(names){
    var tiniest=names[0];
    for(var i =0; i<names.length;i++){
        var currentNumber=names[i];
        if(currentNumber<tiniest && currentNumber.length!=0 && currentNumber!=''){
            tiniest=currentNumber;
        }

    }
    return tiniest;
}
var tiniestNumber=tinyFriend(["purna","priyanka","tanzila","nisu",""]);
console.log(tiniestNumber);