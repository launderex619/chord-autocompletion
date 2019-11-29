var screenWidth = document.documentElement.clientWidth - 40;
var overflowWidth = 0;
var notas = [];
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

window.addEventListener('resize', resizeCanvas);
drawLinesCanvas();
resizeCanvas()

function resizeCanvas() {
  var suma = screenWidth + overflowWidth;
  screenWidth = document.documentElement.clientWidth - 40;
  if (suma < screenWidth) {
    overflowWidth = 0;
  }
  c.setAttribute('width', screenWidth + overflowWidth);
  drawLinesCanvas();
}

function drawLinesCanvas() {
  ctx.beginPath();
  ctx.moveTo(20, 40);
  ctx.lineTo(screenWidth + overflowWidth, 40);
  ctx.moveTo(20, 80);
  ctx.lineTo(screenWidth + overflowWidth, 80);
  ctx.moveTo(20, 120);
  ctx.lineTo(screenWidth + overflowWidth, 120);
  ctx.moveTo(20, 160);
  ctx.lineTo(screenWidth + overflowWidth, 160);
  ctx.moveTo(20, 200);
  ctx.lineTo(screenWidth + overflowWidth, 200);
  for( var i = 50; i < screenWidth + overflowWidth; i += 200){
    ctx.moveTo(i, 40);
    ctx.lineTo(i, 200);
  }
  ctx.strokeStyle = "black";
  ctx.stroke();

  //drawNotesCanvas();
}

//pendiente
function drawNotesCanvas() {
  var posXinCanvas = 60;
  notas.forEach(element => {
    switch (element.nombre) {
      case "do":
        ctx.font = "80px Roboto";
        ctx.fillText("♩", posXinCanvas, 110);
        ctx.font = "20px Roboto";
        ctx.fillText(element.nombre, posXinCanvas - 5, 130);
        break;
      case "re_b":
        ctx.font = "80px Roboto";
        ctx.fillText("♩", posXinCanvas, 110);
        ctx.font = "20px Roboto";
        ctx.fillText(element.nombre, posXinCanvas - 5, 130);
        break;
      case "re":
        ctx.font = "80px Roboto";
        ctx.fillText("♩", posXinCanvas, 90);
        ctx.font = "20px Roboto";
        ctx.fillText(element.nombre, posXinCanvas - 5, 110);
        break;
      case "mi_b":
        ctx.font = "80px Roboto";
        ctx.fillText("♩", posXinCanvas, 90);
        ctx.font = "20px Roboto";
        ctx.fillText(element.nombre, posXinCanvas - 5, 110);
        break;
      case "mi":
        ctx.font = "80px Roboto";
        ctx.fillText("♩", posXinCanvas, 70);
        ctx.font = "20px Roboto";
        ctx.fillText(element.nombre, posXinCanvas - 15, 90);
        break;
      case "fa":
        ctx.font = "80px Roboto";
        ctx.fillText("♩", posXinCanvas, 190);
        ctx.font = "20px Roboto";
        ctx.fillText(element.nombre, posXinCanvas - 5, 210);
        break;
      case "sol_b":
        ctx.font = "80px Roboto";
        ctx.fillText("♩", posXinCanvas, 190);
        ctx.font = "20px Roboto";
        ctx.fillText(element.nombre, posXinCanvas - 5, 210);
        break;
      case "sol":
        ctx.font = "80px Roboto";
        ctx.fillText("♩", posXinCanvas, 170);
        ctx.font = "20px Roboto";
        ctx.fillText(element.nombre, posXinCanvas - 5, 190);
        break;
      case "la_b":
        ctx.font = "80px Roboto";
        ctx.fillText("♩", posXinCanvas, 170);
        ctx.font = "20px Roboto";
        ctx.fillText(element.nombre, posXinCanvas - 5, 190);
        break;
      case "la":
        ctx.font = "80px Roboto";
        ctx.fillText("♩", posXinCanvas, 150);
        ctx.font = "20px Roboto";
        ctx.fillText(element.nombre, posXinCanvas - 5, 170);
        break;
      case "si_b":
        ctx.font = "80px Roboto";
        ctx.fillText("♩", posXinCanvas, 150);
        ctx.font = "20px Roboto";
        ctx.fillText(element.nombre, posXinCanvas - 5, 170);
        break;
      case "si":
        ctx.font = "80px Roboto";
        ctx.fillText("♩", posXinCanvas, 130);
        ctx.font = "20px Roboto";
        ctx.fillText(element.nombre, posXinCanvas - 5, 150);
        break;
    }
    posXinCanvas += 50;
  });
}

function addNota(nota, sonid) {
  notas.push({ nombre: nota, sonido: sonid})
  console.log(notas)
  if (notas.length * 50 > screenWidth) {
    overflowWidth += 50;
    resizeCanvas();
  }
  drawNotesCanvas()
  var scroll = document.getElementById("scrollNote");
  scroll.scrollLeft = c.scrollWidth;
}

function moveGuide(pos){
  pos = 70 + (pos*50)
  var scroll = document.getElementById("scrollNote");
  scroll.scrollLeft = pos - screenWidth;
  c.setAttribute('width', screenWidth + overflowWidth);
  drawLinesCanvas();
  drawNotesCanvas();
  drawGuide(pos);
}

function drawGuide(pos){
  ctx.beginPath();
  ctx.moveTo(pos, 35);
  ctx.lineTo(pos, 205);
  ctx.strokeStyle = "red";
  ctx.stroke();
}