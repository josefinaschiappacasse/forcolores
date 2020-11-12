let sketch;

function setup() {
 sketch = createCanvas(700, 700);
 sketch.parent("p5");
 background(255);
}
//Se dibujan 3 triangulos, rojo, amarillo y azul. Se fijan dos vertices de cada uno y en vertice restante se establece como ramdom.
function draw() {
  for (i = 199; i < 200; i++) {
    stroke(255,0,0,20);
    strokeWeight(1);
    noFill();
    triangle(650, 650, random(width), random(height),30,50);}
     
    for (i = 199; i < 200; i++) {
    stroke(0,0,255, 10);
    strokeWeight(1);
    noFill();
    triangle(650, 650, random(width), random(height),30,650);}
  
  for (i = 199; i < 200; i++) {
    stroke(255,255,0, 20);
    strokeWeight(1);
    noFill();
    triangle(650, 650, random(width), random(height),650,30);}
  
}



