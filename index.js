function myTime(array) {
    //New array with converted times
    var convertedTimes = [];

    //Timezone difference between current location based
    var rawTimeData = new Date().getTimezoneOffset();
    var currentZone = rawTimeData / -60;

    //Convert from each members time to users timezone
    array.members.forEach(function(element) {
        var memZone = parseInt(element["timezone"]);
        var conversionFactor = currentZone - memZone;
        convertedTimes.push(parseInt(element["availTime"]) + conversionFactor);
    });

    console.log(currentZone);
    console.log(convertedTimes);
}

var team =
        {
            "name": "Meerkat Sundial",
            "members": [
                {
                    "name": "@musecode",
                    "availTime": "8",
                    "timezone": "+1"
                },
                {
                    "name": "@nionata",
                    "availTime": "5",
                    "timezone": "-5"
                },
                 {
                    "name": "@ejour",
                    "availTime": "10",
                    "timezone": "+4"
                }
            ]
        }

myTime(team);
