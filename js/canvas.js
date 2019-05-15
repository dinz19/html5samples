var canvasRef = document.getElementById("mycanvas");
var ctx = canvasRef.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(300,300);


ctx.font = "44px serif";
ctx.strokeText("Hello Canvas", 10, 200);

ctx.fillStyle = "rgba(200,0,0,0.5)";
ctx.fillRect(50,50,100,100);


ctx.fillStyle = "rgba(0,200,0,0.5)";
ctx.fillRect(75,75,100,150)

//ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(170, 50, 50, 10, 0, 180, true);

ctx.stroke();
ctx.fill();
