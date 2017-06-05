
var a_canvas = document.getElementById("a");
var context = a_canvas.getContext("2d");

for (i = 0; i < 6; i++) {
    for(j = 0; j < 6; j++) { 
        context.beginPath();
        context.moveTo(j*10, i*10);
        context.lineTo((j+1)*10, (i+1)*10);
        context.lineTo(j*10, (i+1)*10);
        context.closePath();
        context.lineWidth = 1;
        context.stroke();
        context.fillStyle = "blue";
        context.fill();
        
        context.beginPath();
        context.moveTo(j*10, i*10);
        context.lineTo((j+1)*10, (i+1)*10);
        context.lineTo((j+1)*10, i*10);
        context.closePath();
        context.lineWidth = 1;
        context.stroke();
        context.fillStyle = "blue";
        context.fill();
    }
}