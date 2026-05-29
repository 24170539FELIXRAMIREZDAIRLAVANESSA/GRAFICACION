let trail = [];

let angulo = 0;

function setup() {

    createCanvas(900, 600, WEBGL);
}

function draw() {

    background(10, 10, 30);

    orbitControl();


    // ✨ ILUMINACION

    ambientLight(60);

    directionalLight(180, 180, 255, 1, 1, -1);

    pointLight(255, 120, 220, 0, 0, 300);



    // ⭐ ESTRELLAS

    push();

    for(let i = 0; i < 100; i++){

        push();

        translate(
            sin(i * 50) * 800,
            cos(i * 100) * 800,
            sin(i * 200) * 800
        );

        ambientMaterial(255);

        noStroke();

        sphere(2);

        pop();
    }

    pop();



    // 💖 ESFERA PRINCIPAL

    let x = sin(frameCount * 0.02) * 250;
    let y = cos(frameCount * 0.03) * 120;
    let z = sin(frameCount * 0.01) * 200;

    trail.push({x, y, z});

    if(trail.length > 40){
        trail.shift();
    }



    // 🌸 GHOST FRAMES / TRAILS

    for(let i = 0; i < trail.length; i++){

        let alpha = map(i, 0, trail.length, 20, 255);

        push();

        translate(
            trail[i].x,
            trail[i].y,
            trail[i].z
        );

        specularMaterial(255,150,220, alpha);

        noStroke();

        sphere(50);

        pop();
    }



    // 💙 CUBO GIRANDO

    push();

    rotateX(frameCount * 0.01);

    rotateY(frameCount * 0.02);

    translate(-300, 0, 0);

    ambientMaterial(150,200,255);

    box(120);

    pop();



    // 💜 TOROIDE

    push();

    translate(300, 0, 0);

    rotateZ(frameCount * 0.03);

    normalMaterial();

    torus(80, 20);

    pop();



    // 🌙 PISO

    push();

    rotateX(HALF_PI);

    translate(0, 300, 0);

    ambientMaterial(80,50,120);

    plane(2000,2000);

    pop();



    // ✨ TEXTO

    push();

    translate(-350, -250, 0);

    fill(255,180,220);

    textSize(24);

    textStyle(ITALIC);

    text("Galaxy Motion Scene", 0, 0);

    pop();
}