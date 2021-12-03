function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

var value1 = randomInteger(1, 6);
var value2 = randomInteger(1, 6);
var asett1 = document.getElementById("1-1");
var asett2 = document.getElementById("1-2");
var asett3 = document.getElementById("1-3");
var asett4 = document.getElementById("1-4");
var asett5 = document.getElementById("1-5");
var asett6 = document.getElementById("1-6");
var bsett1 = document.getElementById("2-1");
var bsett2 = document.getElementById("2-2");
var bsett3 = document.getElementById("2-3");
var bsett4 = document.getElementById("2-4");
var bsett5 = document.getElementById("2-5");
var bsett6 = document.getElementById("2-6");
var win1 = document.getElementById("win1")
var win2 = document.getElementById("win2")
var draw = document.getElementById("draw")
draw.style.display = (value1 == value2) ? "block" : "none";
win1.style.display = (value1 > value2) ? "block" : "none";
win2.style.display = (value2 > value1) ? "block" : "none";

if (value1 == 1) {
	asett1.style.display = "block";
} else if (value1 == 2) {
	asett2.style.display = "block";
} else if (value1 == 3) {
	asett3.style.display = "block";
} else if (value1 == 4) {
	asett4.style.display = "block";
} else if (value1 == 5) {
	asett5.style.display = "block";
} else if (value1 == 6) {
	asett6.style.display = "block";
}
if (value2 == 1) {
	bsett1.style.display = "block";
} else if (value2 == 2) {
	bsett2.style.display = "block";
} else if (value2 == 3) {
	bsett3.style.display = "block";
} else if (value2 == 4) {
	bsett4.style.display = "block";
} else if (value2 == 5) {
	bsett5.style.display = "block";
} else if (value2 == 6) {
	bsett6.style.display = "block";
}
