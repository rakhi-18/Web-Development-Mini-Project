let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

ctx.fillStyle = "lightblue";
ctx.fillRect(20, 20, 120, 80);

ctx.beginPath();
ctx.arc(220, 60, 40, 0, 2 * Math.PI);
ctx.fillStyle = "lightgreen";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(50, 150);
ctx.lineTo(350, 150);
ctx.strokeStyle = "red";
ctx.lineWidth = 3;
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(150, 260);
ctx.lineTo(250, 260);
ctx.fillStyle = "orange";
ctx.fill();
ctx.closePath();
