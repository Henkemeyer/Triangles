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

function verticesCalculation() {
    var txt;
    var answer;
    var x = [0,0,0];
    var y = [0,0,0];
    var column;
    var row;
    var position;
    var vertices = prompt("Please enter the vertices:", "[,][,][,]");
    if (vertices == null || vertices == "") {
        txt = "User cancelled the prompt.";
    } else {
        for (a = 0; a < 3; a++) { 
            position = vertices.indexOf(",");
            x[a] = vertices.substring(1, position);
            vertices = vertices.substring(position+1);
            position = vertices.indexOf("]");
            y[a] = vertices.substring(0, position);
            vertices = vertices.substring(position+1);
        }
        x.sort
        column = (Number(x[1])+Number(x[2]))/10
        
        var toty = (Number(y[0])+Number(y[1])+Number(y[2]))/10
        
        if (toty < 3) { row = "A"}
        else if (toty < 6) { row = "B"}
        else if (toty < 9) { row = "C"}
        else if (toty < 12) { row = "D"}
        else if (toty < 15) { row = "E"}
        else if (toty < 18) { row = "F"}
        
        answer = "Your Triangle is "+row+column
        window.alert(answer);
    }
}