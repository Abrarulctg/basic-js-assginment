
//   https://github.com/Abrarulctg/basic-js-assginment


// kilometerToMeter
function kilometerToMeter(distance) {
    if (distance < 0) {
        var meter = "Distance cannot be Negative.";
    }
    else {
        var meter = distance * 1000;
    }
    return meter;
}

// var result = kilometerToMeter(10);
// console.log(result);







// budgetCalculator
function budgetCalculator(gadgetOne, gadgetTwo, gadgetThree) {
    if (gadgetOne < 0 || gadgetTwo < 0 || gadgetThree < 0 ) {
        var budget = "Gadget Quantity cannot be Negative.";
    }
    else {
        var gadgetOnePrice = gadgetOne * 50;
        var gadgetTwoPrice = gadgetTwo * 100;
        var gadgetThreePrice = gadgetThree * 500;
        var budget = gadgetOnePrice + gadgetTwoPrice + gadgetThreePrice;
    }
    return budget;
}
// var result = budgetCalculator(1, 1, 1);
// console.log(result);







// hotelCost
function hotelCost(days) {
    if (days < 0) {
        var cost = "Days cannot be Negative";
    }
    else if (days <= 10) {
        var cost = days * 100;
    }
    else if (days <= 20) {
        var firstTenDaysCost = 10 * 100;
        var remainingDaysCost = (days - 10) * 80;
        var cost = firstTenDaysCost + remainingDaysCost;
    }
    else {
        var firstTenDaysCost = 10 * 100;
        var secondTenDaysCost = 10 * 80;
        var remainingDaysCost = (days - 20) * 50;
        var cost = firstTenDaysCost + secondTenDaysCost + remainingDaysCost;
    }
    return cost;
}
// var result = hotelCost(500)
// console.log(result);





// megaFriend
function megaFriend(friends){
    var largeName = 0;
    for (var i=0; i< friends.length; i++){
        if(friends[i].length > largeName){
            var largeName = friends[i].length;
            var largest = friends[i];
        }
    }
    return largest;
}

// var res = megaFriend(["abrar","Sihab", "AbuBakarSiddiq", "Abul Kalam"]);
// console.log(res);