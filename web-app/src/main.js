const header = document.querySelector('header');
const footer = document.querySelector("footer");
const headerHeight = header.offsetHeight;
const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = Math.round(window.innerHeight - headerHeight- footer.offsetHeight);
const ctx = canvas.getContext("2d");


function randomPosition() {
    const x = Math.round(Math.random() * canvas.width);
    const y = Math.round(Math.random() * (canvas.height - size - 2)) + headerHeight;
    return new Position(x, y);
}

const parent = document.getElementById("users");
const userCount = 50;
const size = 50;
const intersectionCount = userCount/4;
const users = Array.from({ length: userCount }, () => new User(parent, size, randomPosition()));
const intersectionPoints = Array.from({ length: intersectionCount}, () => new IntersectionPoint(canvas,ctx, 10));

function overlapCorrection(){
    users.forEach (user =>{
        users.forEach( other => {
            if(user !== other){
                if(user.collide(other)){
                    user.setPosition(randomPosition());
                };              
            }
        })
    })
}

function drawLine(intersectionPoint, user){
    ctx.beginPath();
    ctx.moveTo(user.position.x + size/2, user.position.y - headerHeight + size/2);
    ctx.lineTo(intersectionPoint.position.x, intersectionPoint.position.y);
    ctx.strokeStyle = 'gray';
    ctx.stroke();
}



function update() {
    overlapCorrection();
    overlapCorrection();
    overlapCorrection();
    intersectionPoints.forEach(intersectionPoint => {
        intersectionPoint.draw();
    });
    users.forEach(user => {
       let minDistance = 10000;
       let closestPoint ;
        intersectionPoints.forEach (intersectionPoint => {
            const distance = intersectionPoint.position.distance(user.position);
            if(distance<minDistance){
                minDistance = distance;
                closestPoint = intersectionPoint;
            }   
        })
        drawLine(closestPoint, user);
        index = Math.floor(Math.random() * intersectionPoints.length);
        const second = intersectionPoints[index];
        drawLine(second, user);
        user.update();
    });
}


update();
//setInterval(update, 10);-
