let xSol = 0;
let noche = false;

function setup() {
    createCanvas(600,400);
}

function draw() {

    noStroke(); // quitar bordes

    // FONDO
    if(noche){
        background(20,20,60);

        // ⭐ estrellas
        fill(255,255,150);
        circle(50,50,5);
        circle(100,70,5);
        circle(200,40,5);
        circle(300,60,5);
        circle(400,30,5);
        circle(500,80,5);
        circle(550,40,5);
        circle(250,90,5);

    }else{
        background(135,206,235);
    }


    // SOL
    fill(255,200,0);
    circle(xSol,80,50);

    xSol++;

    if(xSol > width){
        xSol = 0;
        noche = !noche;
    }


    // NUBES (sin borde)
    if(!noche){

        fill(255);

        ellipse(150,80,60,40);
        ellipse(180,70,60,50);
        ellipse(210,80,60,40);

        ellipse(400,70,60,40);
        ellipse(430,60,60,50);
        ellipse(460,70,60,40);
    }


    // SUELO
    fill(50,180,70);
    rect(0,300,600,100);


    // CASA ROSA
    fill(255,150,200);
    rect(250,220,100,80);

    fill(200,80,120);
    triangle(250,220,350,220,300,180);

    fill(80,40,20);
    rect(290,250,20,50);


    // ARBOL
    fill(120,70,20);
    rect(450,240,20,60);

    fill(0,150,0);
    circle(460,220,60);


    // FLOR
    fill(0,150,0);
    rect(100,270,5,30);

    fill(255,0,150);
    circle(102,260,15);
    circle(95,265,15);
    circle(110,265,15);
    circle(102,270,15);

    fill(255,255,0);
    circle(102,265,10);


    // TEXTO centrado rosa cursiva
    fill(255,150,200);
    textSize(20);
    textAlign(CENTER);
    textStyle(ITALIC);

    text("Graficacion Unidad 2, Felix Ramirez", width/2, 30);

}


function mousePressed(){
    noche = !noche;
}