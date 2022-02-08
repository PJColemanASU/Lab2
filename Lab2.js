var name = "Suzy";
var selection = "Q";
console.log(name);
console.log(selection);
console.log(name + selection);

 var count = 10;
 var cost = 2.50;

 count + cost

var array = [];
var array1 = [ 1, 3, 5 ];

var course = {
  name: "GHY 3814: Interactive Cartography and Web Mapping",
  year: 2020,
  univ: "AppState"
};

console.log(course.name);
console.log(course.name + course.year)

var myFunction = functionName(argument) {

};

function multiply_this(a,b) {
  return a*b;
}

var newCar = {
  make: "Tesla",
  model: "Model 3",
  color: "Red"
  start: function(){
    console.log("Car started!");
  }
}

console.log(newCar);
console.log(newcar.make);

newCar.start();

notice = "web mapping";
console.log(notice)
var notice;

var notice;
notice = "web mapping";
console.log(notice)

var carName = "Tesla";

function functionName() {

}

function fucntionName() {
  var carName = "Tesla";
}

var car = {
  make: "Tesla",
  model: "Model 3",
  year: 2020,
  color: "Red",
  start: function(){
    console.log("Car started!");
  }
};

car.start()

var car = {
  make: "Tesla",
  model: "Model 3",
  year: 2020,
  color: "Red"
};

 car.color;
"Red"
 car.color = "Silver";

 car.color;
"Silver"

var number = 100;

if(number == 99){
  console.log("True")
} else {
  console.log("False")
};

var number = 100;

if(number == 100){
  console.log("Number is 100");
} else if (number < 100){
  console.log("Number is less than 100.");
} else {
  console.log("Number is greater than 100.");
};

var directory = {"employees":[
  {"firstName":"John", "lastName":"Doe"},
  {"firstName":"Anna", "lastName":"Smith"},
  {"firstName":"Peter", "lastName":"Jones"}
]}

console.log(directory.employees)
console.log(directory.employees[1]);
console.log(directory.employees[1].firstName);

var dataset = {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [41.2, 174.7]
  },
  "properties": {
    "name": "Wellington, New Zealand"
  }
}

console.log(dataset);
console.log(dataset.type);
console.log(dataset.geometry.coordinates);
console.log(dataset.properties);

var directory = {"employees":[
  {"firstName":"John", "lastName":"Doe"},
  {"firstName":"Anna", "lastName":"Smith"},
  {"firstName":"Peter", "lastName":"Jones"}
]}

var data = directory.employees;
console.log(data);


for(var i in data){
  fName = data[i].firstName;
  lname = data[i].lastName;
}

document.getElementById("foo").addEventListener("click", displayDate);


function displayDate() {
  document.getElementById("foo").innerHTML = Date();
}
