const canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');

//optiene las dimenciones de la pantalla actual
const window_height = window.innerHeight;
const window_width = window.innerWidth;

//el canvas tiene las mismas dimenciones que la pantalla
canvas.height = window_height;
canvas.width = window_width;

canvas.style.backgroundColor = '#ff8';

class Circle {
    constructor(x, y, radius, color, text, speed) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.text = text;

        this.speed = speed;

        this.dx = 1 * this.speed;
        this.dy = 1 * this.speed;
    }
    draw(context) {
        context.beginPath();

        context.strokeStyle = this.color;
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.font = '20px Arial';
        context.fillText(this.text, this.x, this.y);

        context.lineWidth = 2;
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.stroke();
        context.closePath();
    }
    update(context) {
        //context.clearRect(0, 0, window_width, window_height);

        this.draw(context);

        //Si el circulo supera el margen derecho entonces se mueve a la izquierda
        if ((this.x + this.radius) > window_width) {
            this.dx = -this.dx;
        }

        //Si el circulo supera el margen izquierdo entonces se mueve a la derecha
        if ((this.x - this.radius) < 0) {
            this.dx = -this.dx;
        }

        //Si el circulo supera el margen superior entonces se mueve a abajo
        if ((this.y + this.radius) > window_height) {
            this.dy = -this.dy;
        }

        //Si el circulo supera el margen inferior entonces se mueve a arriba
        if ((this.y - this.radius) < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;
    }
}

/*let arrayCircle = [];

 for  (let i=0; i<10; i++){

    let randomX = Math.random() * window_width;
    let randomY = Math.random() * window_height;
    let randomRadius = Math.floor(Math.random() * 100 + 20);

    let miCirculo = new Circle(randomX, randomY, randomRadius, 'red', i+1);

    //agrega el objeto al array
    arrayCircle.push(miCirculo);
    arrayCircle[i].draw(ctx);
} */

/* let randomX = Math.random() * window_width;
let randomY = Math.random() * window_height;
let randomRadius = Math.floor(Math.random() * 100 + 20);

let miCirculo = new Circle(randomX, randomY, randomRadius, 'red', 'tec1', 3);
miCirculo.draw(ctx);

let miCirculo2 = new Circle(randomX, randomY, randomRadius, 'green', 'tec2', 5);
miCirculo2.draw(ctx);

let updateCircle = function () {
    requestAnimationFrame(updateCircle);
    ctx.clearRect(0, 0, window_width, window_height);
    miCirculo.update(ctx);
    miCirculo2.update(ctx);
} */

// Número de círculos que deseas crear
const nCircles = 10;

let circles = [];

for (let i = 0; i < nCircles; i++) {
    let randomX = Math.random() * window_width;
    let randomY = Math.random() * window_height;
    let randomRadius = Math.floor(Math.random() * 100 + 20);
    let randomSpeed = Math.floor(Math.random() * 10 + 1);

    let miCirculo = new Circle(randomX, randomY, randomRadius, 'blue', 'tec' + (i + 1), randomSpeed);
    circles.push(miCirculo);
}

let updateCircle = function () {
    requestAnimationFrame(updateCircle);
    ctx.clearRect(0, 0, window_width, window_height);
    circles.forEach(circle => {
        circle.update(ctx);
    });
}

updateCircle();

/*let miCirculo2 = new Circle(270,270,50,'green', 'pachuca');
miCirculo2.draw(ctx); */
