let xSol = 0;
let noche = false;

function setup() {
    createCanvas(600,400);
}

function draw() {

    if(noche){
        background(20,20,60);
    }else{
        background(135,206,235);
    }

    fill(255,200,0);
    circle(xSol,80,50);

    xSol++;

    if(xSol > width){
        xSol = 0;
        noche = !noche;
    }

    fill(50,180,70);
    rect(0,300,600,100);

    fill(200,150,100);
    rect(250,220,100,80);

    fill(150,50,50);
    triangle(250,220,350,220,300,180);

    fill(80,40,20);
    rect(290,250,20,50);

    fill(120,70,20);
    rect(450,240,20,60);

    fill(0,150,0);
    circle(460,220,60);

    fill(0);
    textSize(16);
    text("Proyecto Graficacion",10,20);

}

function mousePressed(){
    noche = !noche;
}