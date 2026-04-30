let angulo = 0;
let escala = 1;

let estrellas = [];

function setup() {
    createCanvas(600, 400, WEBGL);

    // generar estrellas aleatorias
    for(let i = 0; i < 100; i++){
        estrellas.push({
            x: random(-500,500),
            y: random(-500,500),
            z: random(-500,500)
        });
    }
}

function draw() {

    background(180, 200, 255);

    // mover cámara con mouse
    orbitControl();

    // luces
    ambientLight(150);
    directionalLight(255,255,255, 0,0,-1);

    // ⭐ ESTRELLAS 3D
    push();
    fill(255,255,200);
    noStroke();
    for(let e of estrellas){
        push();
        translate(e.x, e.y, e.z);
        sphere(2);
        pop();
    }
    pop();


    // PISO
    push();
    rotateX(HALF_PI);
    translate(0, 200, 0);
    fill(200,255,200);
    plane(800,800);
    pop();


    // 💗 CUBO GIRANDO (principal)
    push();
    rotateX(angulo);
    rotateY(angulo);
    fill(255,150,200);
    box(100);
    pop();


    // 🔵 ESFERA
    push();
    translate(-200, 0, 0);
    fill(150,200,255);
    sphere(60);
    pop();


    // 🟠 CONO
    push();
    translate(200, 0, 0);
    rotateX(angulo);
    fill(255,200,150);
    cone(50,100);
    pop();


    // animación
    angulo += 0.02;
}


// 🎮 INTERACCION CON TECLADO
function keyPressed(){

    if(key === 'A'){
        escala += 0.1;
    }

    if(key === 'D'){
        escala -= 0.1;
    }
}