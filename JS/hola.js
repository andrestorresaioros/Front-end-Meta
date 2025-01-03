//comentario
/*de 
varias s
lineas */
//console.log("%cHello, World", "color: blue; font-size: 40px");
var petDog="Rex";
petDog;
console.log(petDog)
var light= "green";
if(light == "green") {
    console.log("Drive")
} else if (light == "orange") {
    console.log("Get ready")
} else if (light == "red") {
    console.log("Dont' drive")
} else {
    console.log("The car is not green, orange, or red");
}
switch(light) {
    case 'green':
        console.log("Drive");
        break;
    case 'orange':
        console.log("Get ready");
        break;
    case 'red':
        console.log("Don't drive");
        break;
    default:
        console.log('The light is not green, orange, or red');
        break;
 }
 var age = 10;
if (age >= 65) {
   console.log('You get your income from your pension')
} else if (age < 65 && age >= 18) {
   console.log('Each month you get a salary')
} else if (age < 18) {
   console.log('You get an allowance')
} else {
   console.log('The value of the age variable is not numerical')
}
var day = `Sunday`;
switch(day) {
   case 'Monday':
       console.log('Read a book');
       break;
   case 'Tuesday':
       console.log('Watch a movie');
       break;
   case 'Wednesday':
       console.log('Read a book');
       break;
   case 'Thursday':
       console.log('Play basketball');
       break;
   case 'Friday':
       console.log('Socialize');
       break;
   case 'Saturday':
       console.log('Chill');
       break;
   case 'Sunday':
       console.log('Have barbecue');
       break;
   default:
       console.log('There is no such day');
}
for (var i = 1; i <=5; i++) {
    console.log(i)
}
console.log('Counting completed!')
for (var i = 5; i >=1; i--) {
    console.log(i)
}
console.log('Counting finished!')
var i=1
while(i <=5) {
    console.log(i)
    i++
}
console.log('Counting completed!')
var i=5
while(i >=1) {
    console.log(i)
    i--
}
console.log('Counting finished!')
var i =2018
while(i <=2022) {
    console.log(i)
    i++
}
