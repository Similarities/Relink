const header = document.querySelector('header');
const footer = document.querySelector("footer");
const headerHeight = header.offsetHeight;
const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = Math.round(window.innerHeight - headerHeight- footer.offsetHeight);
const ctx = canvas.getContext("2d");
const parent = document.getElementById("users");
const size = 70;
const footerHeight = window.innerHeight  - footer.offsetHeight - size;
const userCount = 50;
const users = new Array();
let intersectionPoints = new Array();

function drawLine(intersectionPoint, user){
    ctx.beginPath();
    ctx.moveTo(user.position.x + size/2, user.position.y - headerHeight + size/2);
    ctx.lineTo(intersectionPoint.position.x, intersectionPoint.position.y);
    ctx.strokeStyle = '#99ebff';
    ctx.stroke();
}

function update() {
    intersectionPoints.forEach(intersectionPoint => {
        intersectionPoint.draw();
    });
    users.forEach(user => {
       let minDistance = 2000;
       let closestPoint ;
        intersectionPoints.forEach (intersectionPoint => {
            const distance = intersectionPoint.position.distance(user.position);
            if(distance<minDistance){
                minDistance = distance;
                closestPoint = intersectionPoint;
            }
        })
        
        drawLine(closestPoint, user);
        const index = Math.floor(Math.random() * intersectionPoints.length);
        const second = intersectionPoints[index];
        drawLine(second, user);

    });

}

const generateUsers = (usersMeta) => {
    const userCount2 = usersMeta.length;
    gridmap = new GridMap(size, headerHeight, canvas, userCount2);
    const intersectionCount = userCount2/7 ;

    usersMeta.forEach((userMeta) => {
        users.push(new User(userMeta, parent, canvas, size, headerHeight, footerHeight, gridmap))
    })
    intersectionPoints = Array.from({ length: intersectionCount}, () => new IntersectionPoint(canvas, ctx, 10));
    update(); 
}



fetch('http://localhost:8080/users')
    .then(response => response.json())
    .then(data => generateUsers(data['users']))
    .catch(error => console.log(error.message));