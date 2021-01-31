let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = Math.round(window.innerHeight*0.9);
let ctx = canvas.getContext("2d");

const parent = document.getElementById("users");
const userCount = 100;
const users = Array.from({ length: userCount }, () => new User(parent,  50));
const intersectionPoints = Array.from({ length: 10 }, () => new IntersectionPoint(canvas,ctx, 10));


function update() {
    users.forEach(user => {
       user.update();
    });
    intersectionPoints.forEach(intersectionPoint => {
        intersectionPoint.draw();
    });
}


update();
//setInterval(update, 10);-
