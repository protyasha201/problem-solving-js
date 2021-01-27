// https://github.com/protyasha201/problem-solving-js



//kilometer to meter converter.

function kilometerToMeter(kilometer) {
    if (kilometer >= 0) {
        meter = kilometer * 1000;
        return meter;
    }
    else {
        return "Distance can't be negative or a string!";
    }
}



//Budget calculator.

function budgetCalculator(watchQuantity, phoneQuantity, laptopQuantity) {
    if (watchQuantity < 0 || phoneQuantity < 0 || laptopQuantity < 0) {
        return "Quantity can't be negative!";
    }
    else if (watchQuantity == 0 && phoneQuantity == 0 && laptopQuantity == 0) {
        return "You must buy at least one product.";
    }
    else {
        var totalWatchCost = watchQuantity * 50;
        var totalPhoneCost = phoneQuantity * 100;
        var totalLaptopCost = laptopQuantity * 500;
        var totalCost = totalWatchCost + totalPhoneCost + totalLaptopCost;
        return totalCost;
    }
}



//Hotel cost calculator.

function hotelCost(stayingDays) {
    var totalHotelCharge = 0;
    var remainingDays = 0;
    if (stayingDays < 0) {
        return "Number of day's must be positive.";
    }
    else if (stayingDays <= 10) {
        totalHotelCharge = 100 * stayingDays;
    }
    else if (stayingDays <= 20) {
        remainingDays = stayingDays - 10;
        totalHotelCharge = (80 * remainingDays) + 1000;
    }
    else {
        remainingDays = stayingDays - 20;
        totalHotelCharge = (50 * remainingDays) + 1800;
    }
    return totalHotelCharge;
}



//Find the biggest name.

function megaFriend(names) {
    if (typeof (names) == "number") {
        return "numbers are not allowed!";
    }
    else if (typeof (names) == "undefined") {
        return "Input a string first";
    }
    else if (names == "" || names == " " || typeof (names) == "string") {
        return "strings outside an array is not allowed";
    }
    else {
        var biggestName = names[0];
        for (var i = 0; i < names.length; i++) {
            if (names[i] == " " || typeof (names[i]) == "number" || names[i] == "") {
                return "empty strings or numbers are not allowed!";
            }
            else if (names[i].length > biggestName.length) {
                biggestName = names[i];
            }
        }
        return biggestName;
    }
}