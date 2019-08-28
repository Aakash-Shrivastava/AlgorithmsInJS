var myObj = {
    name: "Aakash",
    id: 23,
    job: {
        title: "Software Developer",
        organisation: "redBus"
    },
    achievements: ["jan", "feb", "mar", "april"],
    wife: undefined
};



var arrayOfString = [];


var makeString = function (myObj) {
    var ObjValues = Object.values(myObj);
    ObjValues.forEach(function (newval) {
        if (typeof (newval) == "number" || typeof (newval) == "string") {
            arrayOfString.push(newval);
        }
        else if (typeof (newval) == "object") {
            makeString(newval);
        }
    })
    return arrayOfString.join(" ");
}


console.log(makeString(myObj));