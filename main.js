var canvas= new fabric.Canvas("canbutt");
player_y = 10;
player_x = 10;
block_height = 30;
block_width = 30;
player_object = "";
block_object = "";

function player_update()
{
    fabric.Image.fromURL("player.png",function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object)
    })
}
function block_update(Img)
{
    fabric.Image.fromURL(Img,function(Img){
        block_object = Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object)
    })
}

window.addEventListener("keydown",keybutt)
function keybutt(e)
{
    keypressed = e.keyCode;
    if(keypressed == "38"){
        up()
    }
    if(keypressed == "40"){
        down()
    }
    if(keypressed == "37"){
        left()
    }
    if(keypressed == "39"){
        right()
    }
    if(keypressed == "67"){
        block_update("cloud.jpg")
    }
    if(keypressed == "68"){
        block_update("dark_green.png")
    }
    if(keypressed == "71"){
        block_update("ground.png")
    }
    if(keypressed == "76"){
        block_update("light_green.png")
    }
    if(keypressed == "82"){
        block_update("roof.jpg")
    }
    if(keypressed == "84"){
        block_update("trunk.jpg")
    }
    if(keypressed == "85"){
        block_update("unique.png")
    }
    if(keypressed == "87"){
        block_update("wall.jpg")
    }
    if(keypressed == "89"){
        block_update("yellow_wall.png")
    }
    if(e.shiftKey == true && keypressed == "80")
    {
        block_width = block_width +10;
        block_height  = block_height +10;
        document.getElementById("buttspan").innerHTML = block_width;
        document.getElementById("buttspan2").innerHTML = block_height;
    }
    if(e.shiftKey == true && keypressed == "77")
    {
        block_width = block_width -10;
        block_height  = block_height -10;
        document.getElementById("buttspan").innerHTML = block_width;
        document.getElementById("buttspan2").innerHTML = block_height;
    }
}
