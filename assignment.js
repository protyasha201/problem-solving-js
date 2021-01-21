// https://github.com/protyasha201/problem-solving-js



//kilometer to meter converter.

function kilometerToMeter(kilometer) {
    if (kilometer >= 0) {
        meter = kilometer * 1000;
        return meter;
    }
    else {
        return "Distance can't be negative!";
    }
}


//Budget calculator.

function budgetCalculator(wactchQuantity, phoneQuantity, laptopQuantity) {
    if (wactchQuantity, phoneQuantity, laptopQuantity < 0) {
        return "Quantity can't be negative!";
    }
    if(wactchQuantity && phoneQuantity && laptopQuantity == 0){
        return "You must buy at least one product."
    }
    else{
        var totalWatchCost = wactchQuantity * 50;
        var totalPhoneCost = phoneQuantity * 100;
        var totalLaptopCost = laptopQuantity * 500;
        var totalCost = totalWatchCost + totalPhoneCost + totalLaptopCost;
        return totalCost;
    }
}


//Hotel charge calculator.

function hotelCost(stayingDays){
    var totalHotelCharge = 0;
    var remainingDays = 0;
    if(stayingDays < 0){
        return "Number of day's must be positive."
    }
    else if(stayingDays <= 10){
        totalHotelCharge = 100 * stayingDays;
    }
    else if(stayingDays <= 20){
        remainingDays = stayingDays - 10;
        totalHotelCharge = (80 * remainingDays) + 1000;
    }
    else{
        remainingDays = stayingDays - 20;
        totalHotelCharge = (50 * remainingDays) + 1800;
    }
    return totalHotelCharge;
}

var days = hotelCost(2);
console.log(days);