function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    if(meter<0){
      return "distance cannot be negative"
    }
    return meter;
}
var distance = kilometerToMeter(12);
console.log(distance)


function budgetCalculator(watch, phone, laptop) {
    var budget = (watch * 50) + (phone * 100) + (laptop * 500);
    if(budget<=0){
      return "You have not purchased anything"
    }
    return budget;
}
var total = budgetCalculator(1 ,5 ,2);
console.log(total);


function hotelCost(day){
    var cost = 0;
    if(day <= 10){
        cost = day * 100;
    } else if (day <= 20) {
        var firstpart = 10 * 100;
        var remining = day - 10;
        var secondPart = remining * 80;
        cost = firstpart + secondPart;
    } else {
        var firstpart = 10 * 100;
        var secondPart = 10 * 80;
        var remining = day - 20;
        var thirdPart = remining * 50;
        cost = firstpart + secondPart + thirdPart;
    }
    if(day<=0){
        return "NO DAY FOUND"
      }
    return cost;
}
    var totalCost = hotelCost(26);
    console.log(totalCost);



 

function megaFriend(friend) {
    var name = friend;
    var longestName = name[0];
    for(var i = 1; i < friend.length; i++){
      if(name[i].length > longestName.length){
      longestName = name[i];
      }
    }
    return longestName;
  }
  var result = megaFriend(["rana","jamil","akash","abulkasem"]);
  console.log(result);
