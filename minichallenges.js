// Problem 1
x = 4;
y = 7;

console.log(x + y);

string1 = "This is ";
string2 = "my favorite song";

console.log(string1 + string2);

//Problem 2
var food = ["tacos", "cauliflower", "pizza", "key lime pie"];
var books =["Cosmos", "The Immortal Life of Henrietta Lacks", "Harry Potter", "The Gene"];
var interests = [food, books];

console.log(interests[0][1], interests[1][3]);

//Problem 3
var x  = x;

if(x < 100) {
	alert(x + " is less than 100");
} 
else {
	alert(x + " is greater than 100");
};

//Problem 4
function TellName(name) {
	alert("your name is " + name);
};

//Problem 5
function doorGame(prize) {
	if(prize === 1) {
		alert("You have won a car!");
	}
	else if(prize === 2) {
		alert("You have won a cruise!");
	}
	else if(prize === 3) {
		alert("You have won a trip to Disneyland!");
	}
	else {
		alert("You didn't win anything at all!");
	}
};



