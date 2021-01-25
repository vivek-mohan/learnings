function evaluateDriveQuality(make, currentMileage, hasAccidentHistory) {
    console.log("inside evaluateDriveQuality js function")

    //var lowMClub = ["FORD","GENERAL MOTORS"];
    var midMClub = ["BMW","DAIMLER","AUDI","VOLKSWAGEN"];
    var highMClub = ["ACURA","LEXUS","TOYOTA","HONDA"];
    var thresholdMileage;

    if(hasAccidentHistory) return "FAIR";

    if(_.contains(highMClub, make)) {
        thresholdMileage = 200000;
    } 
    else if(_.contains(midMClub,make)) {
        thresholdMileage = 150000;
    }
    else { //lowMClub
        thresholdMileage = 100000;
    }

    if(currentMileage >= 0.7 * thresholdMileage) {
        return "FAIR"
    }
    else {
        return "GOOD"
    }
}