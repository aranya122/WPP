var today = new Date();
var day = today.getDay();

var daylist = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturaday"]
document.querySelector(".day").innerHTML = "Today is : " + daylist[day] + ".";

var hour = today.getHours();
var minutes = today.getMinutes();
var second = today.getSeconds();

var prepand = (hour >=12) ? "PM" : " AM";

hour = (hour>=12) ? hour - 12 : hour;
if(hour === 0 && prepand === "PM"){
    if(minutes === 0 && second === 0 ){
        hour = 12;
        prepand = "Noon"
    }
    else{
        hour = 12;
        prepand = "PM"
    }
}
if(hour === 0 && prepand === "AM"){
    if(minutes === 0 && second === 0){
        hour = 12;
        prepand = "Midnight"
    }
    else {
        hour = 12;
        prepand = "AM"
    }
}
document. querySelector(".time"). innerHTML = "Current Time is  : " + hour + prepand + " : " + minutes + " : " + second;

console.log("Current Time is  : " + hour + prepand + " : " + minutes + " : " + second);