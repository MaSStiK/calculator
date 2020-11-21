$(document).ready(function() {


let calculator = {
	A: "",
	B: "",
	func: "",
	output: null,
	enter: null
}
console.log(calculator);

$("#plus").click(function(){ // Фунция плюс
	if (!(calculator.A === "")) {
		calculator.func = "+";
		output(); // Обновление экрана
	}
});

$("#minus").click(function(){ // Фунция минус
	if (!(calculator.A === "")) {
		calculator.func = "-";
		output(); // Обновление экрана
	}
});

$("#del").click(function(){ // Фунция деления
	if (!(calculator.A === "")) {
		calculator.func = "/";
		output(); // Обновление экрана
	}
});

$("#umn").click(function(){ // Фунция умножения
	if (!(calculator.A === "")) {
		calculator.func = "*";
		output(); // Обновление экрана
	}
});

//////////////////////////////////////////////

$("#1").click(function(){ // Кнопка 1
	if (calculator.func === ""){
		calculator.A += "1";
	}
	else {
		calculator.B += "1";
	}
	output(); // Обновление экрана
});

$("#2").click(function(){ // Кнопка 2
	if (calculator.func === ""){
		calculator.A += "2";
	}
	else {
		calculator.B += "2";
	}
	output(); // Обновление экрана
});

$("#3").click(function(){ // Кнопка 3
	if (calculator.func === ""){
		calculator.A += "3";
	}
	else {
		calculator.B += "3";
	}
	output(); // Обновление экрана
});

$("#4").click(function(){ // Кнопка 4
	if (calculator.func === ""){
		calculator.A += "4";
	}
	else {
		calculator.B += "4";
	}
	output(); // Обновление экрана
});

$("#5").click(function(){ // Кнопка 5
	if (calculator.func === ""){
		calculator.A += "5";
	}
	else {
		calculator.B += "5";
	}
	output(); // Обновление экрана
});

$("#6").click(function(){ // Кнопка 6
	if (calculator.func === ""){
		calculator.A += "6";
	}
	else {
		calculator.B += "6";
	}
	output(); // Обновление экрана
});

$("#7").click(function(){ // Кнопка 7
	if (calculator.func === ""){
		calculator.A += "7";
	}
	else {
		calculator.B += "7";
	}
	output(); // Обновление экрана
});

$("#8").click(function(){ // Кнопка 8
	if (calculator.func === ""){
		calculator.A += "8";
	}
	else {
		calculator.B += "8";
	}
	output(); // Обновление экрана
});

$("#9").click(function(){ // Кнопка 9
	if (calculator.func === ""){
		calculator.A += "9";
	}
	else {
		calculator.B += "9";
	}
	output(); // Обновление экрана
});

$("#0").click(function(){ // Кнопка 0
	if (!(calculator.A === "")) { // Что бы не ставить 0 в начале
		if (calculator.func === ""){
			calculator.A += "0";
			output(); // Обновление экрана
		}
		else {
			if (!(calculator.B === "")){
				calculator.B += "0";
				output(); // Обновление экрана
			}
		}
		
	}
});

$("#enter").click(function(){ // Вывод результата
	calculator.enter = "enter";
	output(); // Обновление экрана
});

function output() { 
	if (calculator.enter === null) { // Вывод на экран текст
		$("#output").text(calculator.A + calculator.func + calculator.B);

	}

	else if ((calculator.A === "") || (calculator.B === "") || (calculator.func === "")) {
		$("#output").text("Error"); // Результат - ошибка так как не все знаки были введены
		calculator.enter = null; // Сброс значений
		calculator.A = "";
		calculator.B = "";
		calculator.func = "";
	}

	else {  // Вывод на экран результат

		if (calculator.func === "+") {
			$("#output").text(String( Number(calculator.A) + Number(calculator.B)));
		}

		else if (calculator.func === "-") {
			$("#output").text(String( Number(calculator.A) - Number(calculator.B)));
		}

		else if (calculator.func === "/") {
			$("#output").text(String( Number(calculator.A) / Number(calculator.B)));
		}

		else {
			$("#output").text(String( Number(calculator.A) * Number(calculator.B)));
		}
		
		calculator.enter = null; // Сброс значений
		calculator.A = "";
		calculator.B = "";
		calculator.func = "";
	}
	
}});
