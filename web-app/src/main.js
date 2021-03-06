const header = document.querySelector('header');
const footer = document.querySelector("footer");
const headerHeight = header.offsetHeight;
const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = Math.round(window.innerHeight - headerHeight- footer.offsetHeight);
const ctx = canvas.getContext("2d");
const parent = document.getElementById("users");
const size = 100;
const users = new Array();
let intersectionPoints = new Array();

function drawLine(intersectionPoint, user){
    ctx.beginPath();
    ctx.moveTo(user.position.x + size/2, user.position.y - headerHeight + size/2);
    ctx.lineTo(intersectionPoint.position.x, intersectionPoint.position.y);
    ctx.strokeStyle = 'gray';
    ctx.stroke();
}

function update() {
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

    });
}

const generateUsers = (usersMeta) => {
    const userCount = usersMeta.length;
    const intersectionCount = userCount / 4;
    usersMeta.forEach((userMeta) => {
        users.push(new User(userMeta, parent, canvas, size, headerHeight))
    })
    intersectionPoints = Array.from({ length: intersectionCount}, () => new IntersectionPoint(canvas, ctx, 10));
    update();
}

fetch('http://localhost:8080/users')
    .then(response => response.json())
    .then(data => generateUsers(data['users']))
    .catch(error => console.log(error.message));
