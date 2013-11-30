var body = document.getElementsByTagName('body')[0];
var myCanvas = document.createElement('canvas');

body.appendChild(myCanvas);
myCanvas.setAttribute("id", "MaiCanvasu");
myCanvas.setAttribute("width", "300px");
myCanvas.setAttribute("height", "300px");
myCanvas.innerText = " ";
var ctx = myCanvas.getContext("2d");
var animCycle = 0;

function animation(){
    drawAll();
    setInterval(function(){drawAll()}, 100);
}

function drawHouse() {
    ctx.beginPath();
    ctx.moveTo(60, 230);
    //Left Wall
    ctx.lineTo(50, 160);
    //Roof
    ctx.lineTo(200, 170);
    //Right wall
    ctx.lineTo(200, 240);
    ctx.lineTo(280, 170);
    ctx.lineTo(280, 120);
    ctx.lineTo(200, 170);
    ctx.lineTo(200, 240);
    //Floor
    ctx.lineTo(60, 230);
    ctx.lineWidth = 1;
    var grd=ctx.createLinearGradient(50, 60, 180, 0);
    grd.addColorStop(0.2,"red");
    grd.addColorStop(1,"black");
    ctx.fillStyle = grd;
    ctx.fill();
    ctx.stroke();

    //Roof
    ctx.beginPath();
    ctx.moveTo(50, 160); // top left
    //Roof Side
    ctx.lineTo(120, 100);
    ctx.lineTo(225, 60);
    ctx.lineTo(280, 120);
    ctx.lineTo(200, 170);
    //Roof Front
    ctx.lineTo(120, 100); // roof top
    ctx.lineTo(200, 170); // top right
    ctx.lineWidth = 1;
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.stroke();

    //chimney front
    ctx.beginPath();
    ctx.moveTo(200, 130);
    ctx.lineTo(225, 120);
    ctx.lineTo(225, 97);
    ctx.lineTo(200, 100);
    ctx.lineTo(200, 130);
    ctx.lineTo(170, 120);
    ctx.lineTo(170, 97);
    ctx.lineTo(200, 100);
    ctx.lineWidth = 1;
    ctx.fillStyle = "brown";
    ctx.fill();
    ctx.stroke();


    //chimney top
    ctx.beginPath();
    ctx.moveTo(170, 97);
    ctx.lineTo(200, 95);
    ctx.lineTo(220, 97);
    ctx.lineTo(200, 100);
    ctx.lineTo(170, 97);
    ctx.lineWidth = 2;
    ctx.fillStyle = "brown";
    ctx.fill();
    ctx.stroke();

    //door
    ctx.beginPath();
    ctx.moveTo(110, 234);
    ctx.lineTo(107, 191);
    ctx.lineTo(136, 193);
    ctx.lineTo(138, 236);
    ctx.lineWidth = 2;
    ctx.fillStyle = "brown";
    ctx.fill();
    ctx.stroke();
}


function drawAll(){
	ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    drawExtra();
    drawHouse();
    drawSmoke();
    if(animCycle < 50){
        animCycle++;
    }else{
        animCycle = 0;
    }
}

function drawExtra(){

    //Grass
    var x = 00;
    var y = 150;
    var w = 500;
    var h = 300;
    ctx.beginPath();
    ctx.rect(x,y,w,h);
    ctx.fillStyle = "rgba(0, 255, 0, 0.2)";
    ctx.fill();

    
    //Sky
    var x = 00;
    var y = 0;
    var w = 500;
    var h = 150;
    ctx.beginPath();
    ctx.rect(x,y,w,h);
    ctx.fillStyle = "rgba(0, 0, 255, 0.2)";
    ctx.fill();
    
    //sun
    var x = 30;
    var y = 30;
    var radius = 50;
    var startAngle = 0;
    var endAngle = 2 * Math.PI
    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle);
    ctx.fillStyle = "yellow";
    ctx.fill();

}

function drawSmoke(){
    var y = 75 - animCycle * 2;
    if(animCycle % 2 == 0){
        var x = 200 - 0.6;
    }else{
        var x = 200 + 0.6;
        
    }
    var x2 = x - 2;
    var y2 = y + 10;
    var radius = 10;
    var startAngle = 0;
    var endAngle = 2 * Math.PI;

    for (var count1 = 1; count1 < 5; count1++ ){
        for (var count = 0; count < animCycle; count++) {
            var rand = Math.random() * 10;
            x += rand;
            ctx.beginPath();
            ctx.arc(x + 0.4 * count * count1, 90 - 2 * count, radius, startAngle, endAngle);
            ctx.fillStyle = "rgba(100, 100, 100, 0.1)";
            ctx.fill();
            x -= rand;
        }
        for (var count = 0; count < animCycle; count++) {
            var rand = Math.random() * 10;
            x += rand;
            ctx.beginPath();
            ctx.arc(x + 0.5 * count * count1, 90 - 2 * count, radius, startAngle, endAngle);
            ctx.fillStyle = "rgba(100, 100, 100, 0.1)";
            ctx.fill();
            x -= rand;
        }
    }

}

/*
    for (var count = 0; count < 30; count++) {
        var rand = Math.random() * 10;
        y += rand;
        ctx.beginPath();
        ctx.arc(x, y, radius, startAngle, endAngle);
        ctx.fillStyle = "rgba(100, 100, 100, 0.5)";
        ctx.fill();
        x += animCycle * 0.1 + 0.1;
        y -= rand;    
        x2 = x;
        for (var count1 = 0; count1 < 10; count1++) {
            var rand = Math.random() * 10;
            y2 += rand;
            ctx.beginPath();
            ctx.arc(x, y2, radius, startAngle, endAngle);
            ctx.fillStyle = "rgba(100, 100, 100, 0.2)";
            ctx.fill();
            x2 += animCycle * 0.1 + 0.1
            y2 -= rand;
        }
        y2 += 2;
        for (var count1 = 0; count1 < 5; count1++) {
            var rand = Math.random() * 10;
            y2 += rand;
            ctx.beginPath();
            ctx.arc(x, y2, radius, startAngle, endAngle);
            ctx.fillStyle = "rgba(100, 100, 100, 0.2)";
            ctx.fill();
            x2 += animCycle * 0.1 + 0.1
            y2 -= rand;
        }
        y2 -= 2;
    }

    */