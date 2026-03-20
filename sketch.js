let xSol = 0;
let noche = false;

function setup() {
    createCanvas(600,400);
}

function draw() {

    // fondo
    if(noche){
        background(20,20,60);
    }else{
        background(135,206,235);
    }

    // sol
    fill(255,200,0);
    circle(xSol,80,50);

    xSol++;

    if(xSol > width){
        xSol = 0;
        noche = !noche;
    }

    // nubes
    fill(255);
    ellipse(150,80,50,40);
    ellipse(180,80,50,40);
    ellipse(210,80,50,40);

    ellipse(400,60,50,40);
    ellipse(430,60,50,40);
    ellipse(460,60,50,40);


    // suelo
    fill(50,180,70);
    rect(0,300,600,100);


    // casa ROSA
    fill(255,150,200);
    rect(250,220,100,80);

    // techo
    fill(150,50,50);
    triangle(250,220,350,220,300,180);

    // puerta
    fill(80,40,20);
    rect(290,250,20,50);


    // árbol
    fill(120,70,20);
    rect(450,240,20,60);

    fill(0,150,0);
    circle(460,220,60);


    // FLOR 🌸

    // tallo
    fill(0,150,0);
    rect(100,270,5,30);

    // pétalos
    fill(255,0,150);
    circle(102,260,15);
    circle(95,265,15);
    circle(110,265,15);
    circle(102,270,15);

    // centro
    fill(255,255,0);
    circle(102,265,10);


    // texto
    fill(0);
    textSize(16);
    text("Proyecto Graficacion",10,20);

}


function mousePressed(){
    noche = !noche;
}