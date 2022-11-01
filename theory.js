$(document).ready(function() {


let calculator = {
	numberA: null,
	func: null,
	numverB: null,
	output: null,
	enter: 	null
}

console.log(calculator);

$("#1").click(function(){
	console.log("1");
	if (calculator.numberA === null) {
		calculator.numberA = 1;
		calculator.output = 1;
	}
	else {
		calculator.numverB = 1;
		calculator.output = 1;
	}
});

$("#2").click(function(){
	console.log("2");
	if (calculator.numberA === null) {
		calculator.numberA = 2;
		calculator.output = 2;
	}
	else {
		calculator.numverB = 2;
		calculator.output = 2;
	}
});

$("#plus").click(function(){
	console.log("plus");
	calculator.func = "plus";
});

$("#enter").click(function(){
	console.log("enter");

	if (calculator.func === "plus") {
		calculator.enter = calculator.numberA + calculator.numverB;
		calculator.output = calculator.enter;
	}

	output();

});

function output() {
	$("#output").text(calculator.output);
}

});