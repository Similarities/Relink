let canvas = document.querySelector('canvas');
canvas.width = 1700;
canvas.height = 800;
let ctx = canvas.getContext("2d");



let xGrid = 10;
let yGrid =10;
let cellSize = 10;
let data_x = [];
let data_y = [];
let user_coordinate_x = [];
let user_coordinate_y = [];



function intersectionPointList(number){
    for (i=0; i<=number; i++){

        var_x = Math.round(Math.random()*canvas.width*0.86);
        var_y = Math.round(Math.random()*canvas.height*0.86);

        data_x.push(var_x)
        data_y.push(var_y)
    
    }

}


function generate_user_coordinates(number){
    for (i=0; i<=number; i++){

        var_x = Math.round(Math.random()*canvas.width);
        var_y = Math.round(Math.random()*canvas.height);

        user_coordinate_x.push(var_x)
        user_coordinate_y.push(var_y)
    
    }
    

    for (i=0; i<= user_coordinate_x.length; i++){
        ctx.beginPath();
        ctx.arc(user_coordinate_x[i], user_coordinate_y[i], 20, 0, Math.PI*2, true);
        ctx.moveTo(user_coordinate_x[i], user_coordinate_y[i]);
        ctx.strokeStyle = 'red';
        ctx.fill();
        i += 1;
        ctx.stroke();
    }

    return user_coordinate_x, user_coordinate_y;

}




function drawIntersectionPoint(data_x, data_y)
{
    for (i=0; i<=data_x.length; i++)
    {

        var_x = data_x[i];

        var_y = data_y[i];
        ctx.beginPath();
        ctx.moveTo(var_x, var_y)
        ctx.arc(var_x, var_y,5, 0, Math.PI*2, true);
        ctx.strokeStyle = 'blue';
        ctx.stroke();
        i += 1;

    }    
    
}


function drawConnection(data_x, data_y, user_x, user_y){

        for (i=0; i<= user_x.length; i++)
        {

            partner_1 =Math.round( Math.random()*data_x.length);
            partner_2 = Math.round( Math.random()*data_x.length);
            ctx.beginPath();
            ctx.moveTo(user_x[i], user_y[i]);
            ctx.lineTo(data_x[partner_1], data_y[partner_1]);
            ctx.arc(data_x[partner_1], data_y[partner_1],5, 0, Math.PI*2);
            ctx.moveTo(user_x[i], user_y[i]);
            ctx.arc(data_x[partner_2], data_y[partner_2],5, 0, Math.PI*2);
            ctx.arc(var_x, var_y,5, 0, Math.PI*2, true);
            ctx.strokeStyle = 'gray';
            ctx.stroke();
            i += 1;

        }

}

intersectionPointList(50);

generate_user_coordinates(100);

drawConnection(data_x, data_y, user_coordinate_x, user_coordinate_y);

console.log(data_x.length, 'number of intersection points');





