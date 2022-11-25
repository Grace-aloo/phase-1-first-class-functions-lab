// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = (function(){
    return drivers.slice(0,2);
})
console.log (returnFirstTwoDrivers())
const returnLastTwoDrivers = (function(){
    return drivers.slice(2,4);
})
console.log (returnLastTwoDrivers());
const selectingDrivers =[returnFirstTwoDrivers,returnLastTwoDrivers];
console.log (selectingDrivers [0]);
function createFareMultiplier(num1) {
    return function (fare){
        return fare * num1;
    }
}
const fareDoubler = (function(fare){
    return fare * 2
})
const fareTripler =(function(fare){
    return fare * 3;
})
console.log(fareDoubler());
console.log (fareTripler());
function selectDifferentDrivers (Drivers,y){
if (y === returnFirstTwoDrivers){

    return returnFirstTwoDrivers()
}
else if( returnLastTwoDrivers === y){
    
        return returnLastTwoDrivers()
    }
}
