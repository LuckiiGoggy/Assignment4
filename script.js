var body = document.getElementsByTagName('body')[0];
var myCanvas = document.createElement('canvas');

body.appendChild(myCanvas);
myCanvas.setAttribute("id", "MaiCanvasu");
myCanvas.setAttribute("width", "300px");
myCanvas.setAttribute("height", "300px");
myCanvas.innerText = " ";
var ctx = myCanvas.getContext("2d");



ctx.beginPath();
ctx.moveTo(60,230);
//Left Wall
ctx.lineTo(50,160);
//Roof
ctx.lineTo(200,170);
//Right wall
ctx.lineTo(200,240);
ctx.lineTo(280,170);
ctx.lineTo(280,120);
ctx.lineTo(200,170);
ctx.lineTo(200,240);
//Floor
ctx.lineTo(60,230);
ctx.lineWidth = 1;
ctx.fillStyle = "red";
ctx.fill();
ctx.stroke();

//Roof
ctx.beginPath();
ctx.moveTo(50,160); // top left
//Roof Side
ctx.lineTo(120,100);
ctx.lineTo(225,60);
ctx.lineTo(280, 120);
ctx.lineTo(200,170);
//Roof Front
ctx.lineTo(120,100); // roof top
ctx.lineTo(200,170); // top right
ctx.lineWidth = 1;
ctx.fillStyle = "green";
ctx.fill();
ctx.stroke();

//chimney front
ctx.beginPath();
ctx.moveTo(200,130); 
ctx.lineTo(225,120);
ctx.lineTo(225,97);
ctx.lineTo(200,100);
ctx.lineTo(200,130);
ctx.lineTo(170,120);
ctx.lineTo(170,97); 
ctx.lineTo(200,100); 
ctx.lineWidth = 1;
ctx.fillStyle = "brown";
ctx.fill();
ctx.stroke();


//chimney top
ctx.beginPath();
ctx.moveTo(170,97);
ctx.lineTo(200,95);
ctx.lineTo(220,97);
ctx.lineTo(200,100);
ctx.lineTo(170,97);
ctx.lineWidth = 2;
ctx.fillStyle = "brown";
ctx.fill();
ctx.stroke();


//sun
var x = 30;
var y = 30;
var radius = 50;
var startAngle = 0;
var endAngle = 2 * Math.PI;

ctx.beginPath();
ctx.arc(x, y, radius, startAngle, endAngle);
ctx.fillStyle = "yellow";
ctx.fill();

//smoke
var x = 200;
var y = 30;
var radius = 30;
var startAngle = 0;
var endAngle = 2 * Math.PI;

ctx.beginPath();
ctx.arc(x, y, radius, startAngle, endAngle);
ctx.fillStyle = "gray";
ctx.fill();
var x = 220;
var y = 30;
var radius = 30;
var startAngle = 0;
var endAngle = 2 * Math.PI;

ctx.beginPath();
ctx.arc(x, y, radius, startAngle, endAngle);
ctx.fillStyle = "gray";
ctx.fill();
var x = 200;
var y = 40;
var radius = 30;
var startAngle = 0;
var endAngle = 2 * Math.PI;

ctx.beginPath();
ctx.arc(x, y, radius, startAngle, endAngle);
ctx.fillStyle = "gray";
ctx.fill();