function setup() {
    angleMode(DEGREES);
    createCanvas(800, 800);
}

function draw() {
    background(0);
    translate(400, 400);
    rotate(-90);

    let hr = hour();
    let mn = minute();
    let sc = second();
    let ms = millis();

    // arc(400, 400, 600, 600, 0, end, PIE);
    // arc(400, 400, 600, 600, 0, end, OPEN);
    // arc(400, 400, 600, 600, 0, end, CHORD);

    // Second's Hand
    strokeWeight(12);
    noFill();
    stroke(249, 112, 10);
    let end1 = map(sc, 0, 60, 0, 360);
    arc(0, 0, 600, 600, 0, end1);

    push();
    rotate(end1);
    stroke(249, 112, 10);
    strokeWeight(2);
    line(0, 0, 200, 0);
    pop();

    // Min's Hand
    strokeWeight(12);
    noFill();
    stroke(114, 32, 255);
    let end2 = map(mn, 0, 60, 0, 360);
    arc(0, 0, 560, 560, 0, end2);

    push();
    rotate(end2);
    stroke(114, 32, 255);
    strokeWeight(6);
    line(0, 0, 190, 0);
    pop();

    // Hour's Hand
    strokeWeight(12);
    noFill();
    stroke(255, 120, 140);
    let end3 = map(hr % 12, 0, 12, 0, 360);
    arc(0, 0, 520, 520, 0, end3);

    push();
    rotate(end3);
    stroke(255, 120, 140);
    line(0, 0, 150, 0);
    pop();

    strokeWeight(20);
    stroke(127, 156, 243);
    arc(0, 0, 20, 20, 0, 360);


    // translate(100, 100);
    // fill(255);
    // noStroke();
    // rotate(90);
    // text(hr - 12 + ":" + mn + ":" + sc, 10, 200);
}