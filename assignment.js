// https://github.com/protyasha201/problem-solving-js

function kilometerToMeter(kilometer){
    if(kilometer >= 0){
        meter = kilometer * 1000;
        return meter;
    }
    else{
        return "Distance can't be negative!";
    }
}
var kilo = kilometerToMeter(-2);
console.log(kilo);