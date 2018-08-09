/* Global Variables
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d")
    var timer;
    var map = [];
*/
var map = blueprint_map();
function blueprint_map(){
return [[{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true}],
[{wall:true,wallFade:1,indestructable:true},{bomb:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{wall:true,wallFade:1},{wall:true,wallFade:1},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{wall:true,wallFade:1},{wall:true,wallFade:1},{wall:true,wallFade:1},{wall:true,wallFade:1},{wall:true,wallFade:1},{dot:true},{dot:true},{dot:true},{wall:true,wallFade:1,indestructable:true}],
[{wall:true,wallFade:1,indestructable:true},{dot:true},{wall:true,wallFade:1},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1},{wall:true,wallFade:1},{dot:true},{dot:true},{dot:true},{dot:true},{wall:true,wallFade:1},{wall:true,wallFade:1},{wall:true,wallFade:1},{wall:true,wallFade:1},{bomb:true},{wall:true,wallFade:1},{wall:true,wallFade:1},{wall:true,wallFade:1},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{powerUp:true},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1,indestructable:true}],
[{wall:true,wallFade:1,indestructable:true},{dot:true},{wall:true,wallFade:1},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1},{wall:true,wallFade:1},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{wall:true,wallFade:1},{wall:true,wallFade:1},{wall:true,wallFade:1},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1},{wall:true,wallFade:1},{wall:true,wallFade:1},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1,indestructable:true}],
[{wall:true,wallFade:1,indestructable:true},{dot:true},{dot:true},{powerUp:true},{dot:true},{wall:true,wallFade:1},{wall:true,wallFade:1},{dot:true},{dot:true},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1},{wall:true,wallFade:1},{wall:true,wallFade:1},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1},{wall:true,wallFade:1},{wall:true,wallFade:1},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1,indestructable:true}],
 [{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1},{wall:true,wallFade:1},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{wall:true,wallFade:1},{dot:true},{dot:true},{dot:true},{wall:true,wallFade:1},{wall:true,wallFade:1},{wall:true,wallFade:1},{wall:true,wallFade:1},{wall:true,wallFade:1},{dot:true},{dot:true},{dot:true},{wall:true,wallFade:1,indestructable:true}],
[{wall:true,wallFade:1,indestructable:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{wall:true,wallFade:1},{dot:true},{dot:true},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true,centerBlocks:true},{wall:true,wallFade:1,indestructable:true,centerBlocks:true},{wall:true,wallFade:1,indestructable:true,centerBlocks:true},{dot:true},{wall:true,wallFade:1},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{wall:true,wallFade:1},{dot:true},{dot:true},{dot:true},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1,indestructable:true}],
[{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1},{wall:true,wallFade:1},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1,indestructable:true,centerBlocks:true},{dot:false},{dot:false},{dot:false},{wall:true,wallFade:1,indestructable:true,centerBlocks:true},{dot:true},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1},{wall:true,wallFade:1},{wall:true,wallFade:1,indestructable:true}],
[{wall:true,wallFade:1,indestructable:true},{dot:true},{dot:true},{dot:true},{dot:true},{wall:true,wallFade:1},{wall:true,wallFade:1},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{wall:true,wallFade:1,indestructable:true,centerBlocks:true},{dot:false},{dot:false},{dot:false},{wall:true,wallFade:1,indestructable:true,centerBlocks:true},{dot:true},{dot:true},{dot:true},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1,indestructable:true}],
[{wall:true,wallFade:1,indestructable:true},{dot:true},{wall:true,wallFade:1},{wall:true,wallFade:1},{dot:true},{dot:true},{dot:true},{dot:true},{wall:true,wallFade:1},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1,indestructable:true,centerBlocks:true},{wall:true,wallFade:1,indestructable:true,centerBlocks:true},{dot:false},{wall:true,wallFade:1,indestructable:true,centerBlocks:true},{wall:true,wallFade:1,indestructable:true,centerBlocks:true},{dot:true},{wall:true,wallFade:1},{dot:true},{dot:true},{bomb:true},{wall:true,wallFade:1},{dot:true},{dot:true},{dot:true},{wall:true,wallFade:1},{dot:true},{powerUp:true},{dot:true},{wall:true,wallFade:1,indestructable:true}],
[{wall:true,wallFade:1,indestructable:true},{dot:true},{wall:true,wallFade:1},{wall:true,wallFade:1},{wall:true,wallFade:1},{wall:true,wallFade:1},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1},{dot:true},{dot:true},{wall:true,wallFade:1},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{wall:true,wallFade:1},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1},{wall:true,wallFade:1},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1},{wall:true,wallFade:1},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1},{wall:true,wallFade:1,indestructable:true}],
[{wall:true,wallFade:1,indestructable:true},{dot:true},{dot:true},{dot:true},{dot:true},{wall:true,wallFade:1},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1},{wall:true,wallFade:1},{wall:true,wallFade:1},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1},{wall:true,wallFade:1},{wall:true,wallFade:1},{wall:true,wallFade:1},{dot:true},{dot:true},{dot:true},{wall:true,wallFade:1},{dot:true},{dot:true},{dot:true},{wall:true,wallFade:1},{dot:true},{dot:true},{dot:true},{wall:true,wallFade:1,indestructable:true}],
[{wall:true,wallFade:1,indestructable:true},{dot:true},{wall:true,wallFade:1},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1},{wall:true,wallFade:1},{dot:true},{powerUp:true},{wall:true,wallFade:1},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{wall:true,wallFade:1},{dot:true},{dot:true},{dot:true},{wall:true,wallFade:1},{dot:true},{dot:true},{dot:true},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1,indestructable:true}],
[{wall:true,wallFade:1,indestructable:true},{dot:true},{dot:true},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1},{wall:true,wallFade:1},{wall:true,wallFade:1},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1},{wall:true,wallFade:1},{wall:true,wallFade:1},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1},{wall:true,wallFade:1},{wall:true,wallFade:1},{wall:true,wallFade:1},{wall:true,wallFade:1},{wall:true,wallFade:1},{wall:true,wallFade:1},{wall:true,wallFade:1},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1,indestructable:true}],
[{wall:true,wallFade:1,indestructable:true},{powerUp:true},{dot:true,bomb:true},{wall:true,wallFade:1},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{wall:true,wallFade:1},{dot:true},{dot:true},{dot:true},{wall:true,wallFade:1},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{powerUp:true},{dot:true},{dot:true},{dot:true},{wall:true,wallFade:1,indestructable:true}],
[{wall:true,wallFade:1,indestructable:true},{dot:true},{wall:true,wallFade:1},{wall:true,wallFade:1},{wall:true,wallFade:1},{wall:true,wallFade:1},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1},{wall:true,wallFade:1},{wall:true,wallFade:1},{wall:true,wallFade:1},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1},{wall:true,wallFade:1},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1},{wall:true,wallFade:1},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1},{wall:true,wallFade:1},{dot:true},{wall:true,wallFade:1,indestructable:true}],
[{wall:true,wallFade:1,indestructable:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{wall:true,wallFade:1},{bomb:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{dot:true},{wall:true,wallFade:1,indestructable:true}],
[{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true},{wall:true,wallFade:1,indestructable:true}]];
}
var bombText = "B";
var dotCounter = 0; //268
var powerUpCounter = 0; //6
var playerSpawned = false;
function redraw(){
    ctx.clearRect(0, 0, cw, ch);
    draw_map(player);
}
function draw_map(player){
    var cordinates_map = []
    for(var x = 0; x < (parseInt(ch)/map_cell_size); x++){
        cordinates_map.push([])
        for(var y = 0; y < (parseInt(cw)/map_cell_size); y++){
            draw_grid(x,y,cordinates_map);
            var type = null;
            if(player.x == x && player.y == y) {
                type = "player";
            }else {
                // ctx.fillStyle = "black";
            }

            if(map[x][y].wall == true){
                ctx.rect((y*map_cell_size), (x*map_cell_size), map_cell_size, map_cell_size);
                ctx.fillStyle = "rgb(0,0,255," + map[x][y].wallFade + ")";
                ctx.fill();
            }else if(map[x][y].dot == true){
                ctx.arc(y*map_cell_size + map_cell_size/2,x*map_cell_size + map_cell_size/2,5,0,2*Math.PI);
                ctx.fillStyle="tan";
                ctx.fill();
                

            }else if(map[x][y].powerUp == true){
                ctx.arc(y*map_cell_size + map_cell_size/2,x*map_cell_size + map_cell_size/2,9,0,2*Math.PI);
                ctx.fillStyle="white";
                ctx.fill();
            }else if(map[x][y].dot == false || map[x][y].powerUp == false || map[x][y].bomb == false){
                ctx.rect((y*map_cell_size), (x*map_cell_size), map_cell_size, map_cell_size);
                ctx.fillStyle = "black";
                ctx.fill();
            }
            if(map[x][y].bomb == true){ 
                var x1 = x*map_cell_size + map_cell_size/2;
                var y1 = y*map_cell_size + map_cell_size/2;
                var width= 1;
                ctx.beginPath()
  				ctx.arc(y1,x1,10,0,2*Math.PI)
  				ctx.fillStyle = "grey"
  				ctx.fill();
                ctx.stroke();
        
                ctx.fillStyle = "red"
                ctx.font = "15px Arial";
                if(map[x][y].bombText == undefined){
                    ctx.fillText(("B"),(y1),(x1+4));
                }else {
                    ctx.fillText((map[x][y].bombText),(y1),(x1+4));
                }
                
                ctx.textAlign="center";
                ctx.closePath();
            }
            if(x>0 && y>0){
                if(map[x-1][y-1].detonate == true){
                    if(map[x-1][y-1].playerSpawned == false || map[x-1][y-1].playerSpawned == undefined){
                        ctx.beginPath();
                        ctx.rect(((y+1)*map_cell_size),((x+1)*map_cell_size),(-3*map_cell_size),(-3*map_cell_size));
                        ctx.fillStyle = "rgb(255,0,0,"+map[x-1][y-1].colorFade+")";
                        ctx.fill();
                        ctx.closePath();
                    }else if(map[x-1][y-1].playerSpawned == true){
                        ctx.beginPath();
                        ctx.rect(((y+1)*map_cell_size),((x+1)*map_cell_size),(-3*map_cell_size),(-3*map_cell_size));
                        ctx.fillStyle = "rgb(0,255,127,"+map[x-1][y-1].colorFade+")";
                    
                        ctx.fill();
                        ctx.closePath(); 
                    }
                }
            }
            if(map[x][y].bombDropInit == true){
                ctx.beginPath();
                ctx.rect((y*map_cell_size), (x*map_cell_size), map_cell_size, map_cell_size);
                ctx.fillStyle="rgb(112,128,144," + map[x][y].bombDropOpacity +")";
                ctx.fill();
            }
            ///////////////////////////////////////////GRID NUMBERS/////////////////////////////////////////////////
            // ctx.fillStyle = "lightblue"
            // ctx.font = "10px Arial";
            // ctx.fillText(("("+y+","+x+")"),(y*map_cell_size)+20,(x*map_cell_size)+24);
            // ctx.textAlign="center";
        }
    }
    //alert(dotCounter + " -- "+ powerUpCounter);
    return cordinates_map;
}
function draw_grid(x,y,cordinates_map){ 
    ctx.beginPath();
    // bordered cell
    if(map[x][y].wall == false){
        //ctx.rect((y*map_cell_size), (x*map_cell_size), map_cell_size, map_cell_size);
    }
    
    ctx.strokeStyle = map_cell_border_color;
    ctx.stroke();
    // throw in a cell
    cordinates_map[x].push({xValue:x,yValue:y,type:null});
}
function canvas_draw_map(){}
function Player(xPos, yPos, _color){
    this.wallCheck = {north:false,east:false,south:false,west:false}
    this.bombUsed = false;
    this.degree = 0;
    this.stopped = true;
    this.spd = 0.20;
    this.x = xPos;
    this.y = yPos;
    this.oldx = xPos;
    this.oldy = yPos;
    this.color = _color;
    this.xDirection = 0;
    this.yDirection = 0;
    this.score = 0;
    this.dir = -10 // dir is the offset that will be added to pctOpen on every interval
    this.pctOpen = 100; //percentOpen
    this.radius = 15;
    this.bombCounter = 0;
    this.dead = false;
    this.center = {x:this.x*40+20,y:this.y*40+20};
    this.life = 3;
    this.drawPacman = function() {
        // Convert percentOpen to a float
        var fltOpen = this.pctOpen / 100;
        ctx.save();
        // An arc which stops at a specific percent to allow for the open mouth to be drawn
        ctx.beginPath();
        ctx.translate(this.x*map_cell_size+20, this.y*map_cell_size+20)
        ctx.rotate(this.degree*Math.PI / 180)
        ctx.arc(0, 0, this.radius, (fltOpen * 0.2) * Math.PI, (2 - fltOpen * 0.2) * Math.PI);
        // The line leading back to the center and then closing the path to finish the open mouth.
        ctx.lineTo(0, 0);
        // Fill pacman's head yellow
        ctx.fillStyle = "#FF0";
        ctx.fill();
        ctx.closePath();
        ctx.translate(0,0)
        ctx.restore();
    };
    this.wallFinder = function(){
        //console.log(button)
        //console.log(Math.round(this.y*map_cell_size) +"=="+ parseInt(Math.round(this.y)*map_cell_size)+"        "+button)
        if(map[Math.round(this.y)-1][Math.round(this.x)].wall == true){
            this.wallCheck.north = true;
        }else{
            //console.log(Math.floor(this.y*map_cell_size) +"=="+ parseInt(Math.floor(this.y)*map_cell_size)+"        "+button)
            if(Math.round(this.x*map_cell_size) == parseInt(Math.round(this.x)*map_cell_size) && Math.round(this.y*map_cell_size) == parseInt(Math.round(this.y)*map_cell_size) && button == "up"){
                player_settings(-90, 0, -1, false);
                button = "";
            }else if(button == "up" && player.yDirection == 1){
                player_settings(-90, 0, -1, true);
                button = "";
            }
            this.wallCheck.north = false;
        }
        if(map[Math.round(this.y)+1][Math.round(this.x)].wall == true){
            this.wallCheck.south = true;
        }else{
            if(Math.round(this.x*map_cell_size) == parseInt(Math.round(this.x)*map_cell_size) && Math.round(this.y*map_cell_size) == parseInt(Math.round(this.y)*map_cell_size) && button == "down"){
                player_settings(90, 0, 1, false);
                button = "";
            }else if(button == "down" && player.yDirection == -1){
                player_settings(90, 0, 1, true);
                button = "";
            }
            this.wallCheck.south = false;
        }
        if(map[Math.round(this.y)][Math.round(this.x)+1].wall == true){
            this.wallCheck.east = true;
        }else{
            if(Math.round(this.x*map_cell_size) == parseInt(Math.round(this.x)*map_cell_size) && Math.round(this.y*map_cell_size) == parseInt(Math.round(this.y)*map_cell_size) && button == "east"){
                player_settings(0, 1, 0, false);
                button = "";
            }else if(button == "east" && player.xDirection == -1){
                player_settings(0, 1, 0, true);
                button = "";
            }
            this.wallCheck.east = false;
        }
        if(map[Math.round(this.y)][Math.round(this.x)-1].wall == true){
            this.wallCheck.west = true;
        }else{
            if(Math.round(this.x*map_cell_size) == parseInt(Math.round(this.x)*map_cell_size) && Math.round(this.y*map_cell_size) == parseInt(Math.round(this.y)*map_cell_size) && button == "west"){
                player_settings(180, -1, 0, false);
                button = "";
            }else if(button == "west" && player.xDirection == 1){
                player_settings(180, -1, 0, true);
                button = "";
            }
            this.wallCheck.west = false;
        }
        if(Math.round(this.x*map_cell_size) == parseInt(Math.round(this.x)*map_cell_size) && Math.round(this.y*map_cell_size) == parseInt(Math.round(this.y)*map_cell_size)){
            /* for if statement above
                this statement is used to check the center of the cell
                used to remove the button pressed everytime we hit the center of the cell
             */
            button = ""; // removes button pressed
          
            // console.log(map[Math.round(this.y)][Math.round(this.x)].dot);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////            
            if (map[Math.round(this.y)][Math.round(this.x)].dot == true){// checks if theres a dot
                map[Math.round(this.y)][Math.round(this.x)].dot = false; // removes the dot
  // alert( map[Math.round(this.y)][Math.round(this.x)].dot);
                this.score += 1; // adds score
                dotCounter += 1; 
                // console.log(this.score);
            }
            if(map[Math.round(this.y)][Math.round(this.x)].powerUp == true){// powerup
                map[Math.round(this.y)][Math.round(this.x)].powerUp = false;// removes powerup
                this.score+= 100;// adds to score
                powerUpCounter += 1;
                vunerablePhase = true;
                //flip ghost motion
                //switch ghost state
            }
            if(map[Math.round(this.y)][Math.round(this.x)].bomb == true && map[Math.round(this.y)][Math.round(this.x)].bombUsed == undefined && this.bombCounter == 0){
                map[Math.round(this.y)][Math.round(this.x)].bomb = false;// removes powerup
                this.bombCounter = 1;
                console.log(this.bombCounter)
            }
            for(var i =0; i<3; i++){
                for(var j= 0; j<3; j++){
                    if(map[Math.round(this.y-1+i)][Math.round(this.x-1+j)].colorFade >0){
                        //alert("hit");
                        player.dead = true;

                    }
                }
            }
            
            // if(map[Math.round(this.y)][Math.round(this.x)].colorFade >0){
            //     alert("hit");
            // }
    
    };
    this.movementStopper = function(){
        if(this.yDirection == -1 && this.wallCheck.north == true){
            if(this.y*map_cell_size > parseInt(Math.floor(this.y)*map_cell_size)+20){
                this.yDirection = 0;
                this.y = Math.round(this.y)
                this.stopped = true;
            }
        }else if(this.yDirection == 1 && this.wallCheck.south == true){
            if(this.y*map_cell_size < parseInt(Math.floor(this.y)*map_cell_size)+20){
                this.yDirection = 0;
                this.y = Math.round(this.y)
                this.stopped = true;
            }
        }else if(this.xDirection == -1 && this.wallCheck.west == true){
            if(this.x*map_cell_size > parseInt(Math.floor(this.x)*map_cell_size)+20){
                this.xDirection = 0;
                this.x = Math.round(this.x)
                this.stopped = true;
            }
        }else if(this.xDirection == 1 && this.wallCheck.east == true){
            if(this.x*map_cell_size < parseInt(Math.floor(this.x)*map_cell_size)+20){
                this.xDirection = 0;
                this.x = Math.round(this.x)
                this.stopped = true;
            }
        }
    }
}
}

function Ghost(color,xPos,yPos,radius,map_cell_size,startTime,random) {
    var _this = this;
    this.directionFacing = {north:false,east:false,south:false,west:false};
    this.x = xPos;
    this.y = yPos;
    this.previousX = this.x;
    this.previousY = this.y;
    this.initialHeight1 = radius * 1.6667;
    this.initialHeight2 = radius * 1.1915;
    this.height1 = this.initialHeight1;
    this.height2 = this.initialHeight2;	
    this.closedSet = [];
    this.spd = 0.2;
    this.xDirection = 0;
    this.yDirection = 0;
    this.leftRight = false;
    this.color = color;
    this.index = 0;
    this.center = {x:this.x*40+20,y:this.y*40+20};
    this.startTime = startTime;
    this.randomness = random;
    this.mouthPoint1 = radius;
	this.mouthPoint2 = radius * 0.7;
    this.drawGhost = function() {
        
        
        if(vunerablePhase){
            var xM = this.x*map_cell_size+20;
            var yM = this.y*map_cell_size+20;
            ctx.beginPath();
            ctx.arc(xM,yM,radius,0,Math.PI, true);
            var offset = radius/3
            ctx.lineTo(xM-radius,yM+this.height1);
            ctx.lineTo(xM-(2*offset),yM+this.height2);
            ctx.lineTo(xM-offset,yM+this.height1);
            ctx.lineTo(xM,yM+this.height2);
            ctx.lineTo(xM+offset,yM+this.height1);
            ctx.lineTo(xM+(2*offset),yM+this.height2);
            ctx.lineTo(xM+radius,yM+this.height1);
            ctx.fillStyle = "green";
            ctx.fill();
            // alert("test");
            // ctx.fillStyle = this.color;
            // //ctx.clearRect(0, 0, canvas.width, canvas.height);
            // ctx.beginPath();
            // ctx.arc(this.x,this.y,this.radius,0,Math.PI, true);
            // var offset = this.radius/3;
            // ctx.lineTo(this.x-this.radius,this.y+this.height1);
            // ctx.lineTo(this.x-(2*this.offset),this.y+this.height2);
            // ctx.lineTo(this.x-this.offset,this.y+this.height1);
            // ctx.lineTo(this.x,this.y+this.height2);
            // ctx.lineTo(this.x+this.offset,this.y+this.height1);
            // ctx.lineTo(this.x+(2*this.offset),this.y+this.height2);
            // ctx.lineTo(this.x+this.radius,this.y+this.height1);
            // ctx.fill();
            // ctx.beginPath();
            // ctx.fillStyle = "white";
            // var eyeWidth = (this.radius/3);
            // ctx.fillRect(this.x-(this.radius/2),this.y,this.eyeWidth,this.eyeWidth);
            // ctx.fillRect(this.x+(this.radius/2)-this.eyeWidth,this.y,this.eyeWidth,this.eyeWidth);
            // ctx.beginPath();
            // ctx.lineTo(this.x-(this.radius*3/4),this.y+this.mouthPoint1);
            // ctx.lineTo(this.x-(this.radius/2),this.y+this.mouthPoint2);
            // ctx.lineTo(this.x-(this.radius/4),this.y+this.mouthPoint1);
            // ctx.lineTo(this.x,this.y+this.mouthPoint2);
            // ctx.lineTo(this.x+(this.radius/4),this.y+this.mouthPoint1);
            // ctx.lineTo(this.x+(this.radius/2),this.y+this.mouthPoint2);
            // ctx.lineTo(this.x+(this.radius*3/4),this.y+this.mouthPoint1);
            // ctx.strokeStyle = "white";
            // ctx.lineWidth = 3
            // ctx.stroke();
        }else{
            var xM = this.x*map_cell_size+20;
            var yM = this.y*map_cell_size+20;
            ctx.beginPath();
            ctx.arc(xM,yM,radius,0,Math.PI, true);
            var offset = radius/3
            ctx.lineTo(xM-radius,yM+this.height1);
            ctx.lineTo(xM-(2*offset),yM+this.height2);
            ctx.lineTo(xM-offset,yM+this.height1);
            ctx.lineTo(xM,yM+this.height2);
            ctx.lineTo(xM+offset,yM+this.height1);
            ctx.lineTo(xM+(2*offset),yM+this.height2);
            ctx.lineTo(xM+radius,yM+this.height1);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
        if (this.height1 == this.initialHeight1) {
            this.height1 = this.initialHeight2;
        }else if (this.height1 == this.initialHeight2){
            this.height1 = this.initialHeight1;
        }
        if (this.height2 == this.initialHeight1) {
            this.height2 = this.initialHeight2;
        }else if (this.height2 == this.initialHeight2){
            this.height2 = this.initialHeight1;
        }
    }
    this.wallFinder = function(x,y){
        var wallCheck = [];
        // console.log(map[Math.round(y)-1][Math.round(x)].wall == false)
        if(map[Math.round(y)-1][Math.round(x)].wall == undefined){
            wallCheck.push({x:Math.round(x),y:Math.round(y)-1});
        }
        if(map[Math.round(y)+1][Math.round(x)].wall == undefined){
            wallCheck.push({x:Math.round(x),y:Math.round(y)+1});
        }
        if(map[Math.round(y)][Math.round(x)+1].wall == undefined){
            wallCheck.push({x:Math.round(x)+1,y:Math.round(y)});
        }
        if(map[Math.round(y)][Math.round(x)-1].wall == undefined){
            wallCheck.push({x:Math.round(x)-1,y:Math.round(y)});
        }
        
        //console.log(wallCheck);
        return wallCheck;
    }
    this.updatePath = function(player){
        if(this.closedSet.length == 0) {
            //alert("henry");
            while (this.closedSet.length <  (Math.abs(this.x-Math.round(player.x)) + Math.abs(this.y - Math.round(player.y)))+5) {
                this.closedSet.push(this.findPath(player));
            }
            // console.log(JSON.stringify(this.path));
            //alert();

        }
        if(this.closedSet.length > 0){
            // console.log('updated')
            if(Math.round(this.x * map_cell_size) == this.closedSet[this.index].x*map_cell_size && Math.round(this.y * map_cell_size) == this.closedSet[this.index].y *map_cell_size) {
                this.closedSet.splice(0, 1);
                //alert("removed");
            }
            
        }
        this.xDirection = this.closedSet[this.index].xDir;
        this.yDirection = this.closedSet[this.index].yDir;
        this.directionFacing = this.closedSet[this.index].dirFacing;
        //alert("xDir:   "+this.xDirection +"     yDir    "+this.yDirection);
        //console.log(this.directionFacing);
        //console.log(this.x+"    "+this.path[this.index].x+"    "+this.y+"    "+this.path[this.index].y);
        this.gridLock();

    }
    //force path
    this.findPath = function(player){
        var openSpaces = this.wallFinder(this.previousX,this.previousY);

        for(var c = 0; c < this.closedSet.length; c++){
            for(var k = 0; k < openSpaces.length; k++){
                if(this.closedSet[c].x == openSpaces[k].x && this.closedSet[c].y == openSpaces[k].y){
                    openSpaces.splice(k,1);
                    //alert(openSpaces[c].x +"    "+openSpaces[c].y);
                }
            }

        }
        //console.log(openSpaces);
        var index = 0;
        var distances = [];
        //alert("really");
        if(this.randomness == true){
            index = Math.floor(Math.random()*openSpaces.length);
            console.log(index);
        }else{
            for(var i = 0; i < openSpaces.length; i++){
                if(vunerablePhase){
                    distances.push(Math.abs(openSpaces[i].x-Math.round(15)) + Math.abs(openSpaces[i].y - Math.round(7)));
                }else{
                    distances.push(Math.abs(openSpaces[i].x-Math.round(player.x)) + Math.abs(openSpaces[i].y - Math.round(player.y)));
                }
               
            }
            var shortestDistance = distances[0];

            for(var j = 1; j < distances.length; j++){
                if(distances[j] < shortestDistance) {
                    shortestDistance = distances[j];
                    index = j;
                }
            }
        }
        //console.log
        var nextPosition = openSpaces[index];
        //console.log((Math.round(this.x) - openSpaces[index].x) +"        "+(Math.round(this.y) - openSpaces[index].y));
        var xDirection = (Math.round(this.previousX) - nextPosition.x) * -1;
        var yDirection = (Math.round(this.previousY) - nextPosition.y) * -1;
        //alert("x    "+xDirection+"     y  "+yDirection);
        var directionFacing = {north:false,east:false,south:false,west:false};

        if(xDirection  == -1){
            directionFacing.west = false;
            directionFacing.east = true;
        }else if(xDirection == 1){
            directionFacing.east = false;
            directionFacing.west = true;
        }
        if(yDirection == 1){
            directionFacing.north = false;
            directionFacing.south = true;
        }else if(yDirection == -1){
            directionFacing.south = false;
            directionFacing.north = true;

        }
        // console.log(this.previousY+"      "+this.previousX);
        this.previousX = nextPosition.x;
        this.previousY = nextPosition.y;

        return {x:nextPosition.x,y:nextPosition.y,xDir:xDirection, yDir:yDirection,dirFacing:directionFacing};

    }
    this.gridLock = function(){
        //alert(Math.round(this.y * map_cell_size) +"    "+ (Math.round(this.y)*map_cell_size) +"    "+ this.directionFacing.south+"    "+this.path[this.index].dirFacing)
        if (Math.round(this.x * map_cell_size) != (Math.round(this.x + this.xDirection)*map_cell_size) && this.directionFacing.east) {
            this.yDirection = 0;
            this.xDirection = -1;
        }else if (Math.round(this.x * map_cell_size) != (Math.round(this.x + this.xDirection)*map_cell_size) && this.directionFacing.west) {
           // console.log(2)
            this.yDirection = 0;
            this.xDirection = 1;
        }else if (Math.round(this.y * map_cell_size) != (Math.round(this.y +this.yDirection)*map_cell_size) && this.directionFacing.south) {
            //console.log(3)
            this.xDirection = 0;
            this.yDirection = 1;
        }else if (Math.round(this.y * map_cell_size) != (Math.round(this.y + this.yDirection)*map_cell_size) && this.directionFacing.north) {
            //console.log(4)
            this.xDirection = 0;
            this.yDirection = -1;
        }


        }
    }
    function BossGhost(color,x,y,radius) {	
        var _this = this;
        this.initialHeight1 = radius * 1.6667;
        this.initialHeight2 = radius * 1.1915
        this.height1 = _this.initialHeight1;
        this.height2 = _this.initialHeight2;
        this.r = 255;
        this.g = 255;
        this.b = 255;
        this.changingColors = "rgb("+_this.r+","+_this.g+","+_this.b+")";
        this.firstCycle = true;
        this.secondCycle = false;
        this.thirdCycle = false;
        this.fourthCycle = false;
        this.lives = 3;
        
        this.colorTimer = setInterval(function() {
            if (_this.firstCycle == true){
                if (_this.r <= 255 && _this.r > 0) {
                    _this.r -= 1;
                    console.log("1");
                } 
                if (_this.r == 0 && _this.g <=255 && _this.g > 0) {
                    _this.g -=1;
                    console.log("2");
                }if (_this.g == 0 && _this.b <=255 && _this.b > 0) {
                    _this.b -=1;
                    console.log("3");
                }
                if (_this.r == 0 && _this.g == 0 && _this.b == 0) {
                    _this.firstCycle = false;
                    _this.secondCycle = true;
                    console.log("false");
                }
            }
            if (_this.secondCycle == true) {
                console.log("secondcycle");
                if (_this.r >= 0 && _this.r < 255 && _this.b == 0 &&_this.g ==0) {	
                    console.log("red");
                    _this.r +=  1;
                } 
                if (_this.r == 255 && _this.g >= 0 && _this.g < 255) {
                    _this.g += 1;
                }
                if (_this.g == 255 && _this.b >=0 && _this.b < 255) {
                    _this.b += 1;
                }
                if (_this.r == 255 && _this.g == 255 && _this.b == 255) {
                    _this.secondCycle = false;
                    _this.thirdCycle = true;
                }
            }
            if (_this.thirdCycle == true) {
                console.log("thirdcycle");
                if (_this.r <=255 && _this.r >0) {
                    _this.r -=1;
                } if (_this.b <=255 && _this.b>0 && _this.r == 0) {
                    _this.b -=1;
                } if (_this.g <=255 && _this.g>0 && _this.b == 0) {
                    _this.g -=1;
                } if (_this.r == 0 && _this.g == 0 && _this.b == 0) {
                    _this.fourthCycle = true;
                    _this.thirdCycle = false;
                }	
            }
            if (_this.fourthCycle == true) {
                if (_this.r >= 0 && _this.r < 255) {
                    _this.r += 1;
                    _this.g += 1;
                    _this.b += 1;
                }
                if (_this.r == 255 & _this.g == 255 && _this.b == 255) {
                    _this.fourthCycle = false;
                    _this.firstCycle = true;
                }
            }
            // _this.r = Math.floor((Math.random() * 255) +1);
            // _this.g = Math.floor((Math.random() * 255) +1);
            // _this.b = Math.floor((Math.random() * 255) +1);
           
            _this.changingColors = "rgb("+_this.r+","+_this.g+","+_this.b+")";
        },10);
        
        this.drawGhost = function(color,x,y,radius) {
            
            
            ctx.fillStyle = _this.changingColors;
            //console.log(_this.changingColors);
            //ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            ctx.arc(x,y,radius,0,Math.PI, true);
            var offset = radius/3;
            ctx.lineTo(x-radius,y+_this.height1);
            ctx.lineTo(x-(2*offset),y+_this.height2);
            ctx.lineTo(x-offset,y+_this.height1);
            ctx.lineTo(x,y+_this.height2);
            ctx.lineTo(x+offset,y+_this.height1);
            ctx.lineTo(x+(2*offset),y+_this.height2);
            ctx.lineTo(x+radius,y+_this.height1);
            ctx.fill();
        }
        
        this.timer = setInterval(function(){
            // _this.drawGhost(color,x,y,radius);
            if (_this.height1 == _this.initialHeight1) {
                _this.height1 = _this.initialHeight2;
            }else if (_this.height1 == _this.initialHeight2){
                _this.height1 = _this.initialHeight1;
            }
            
             if (_this.height2 == _this.initialHeight1) {
                _this.height2 = _this.initialHeight2;
            } else if (_this.height2 == _this.initialHeight2){
                _this.height2 = _this.initialHeight1;
            }
        },100);
    }
    
function changeScore(){ 
	document.getElementById("scoreBox").style.color = "white";
	document.getElementById("scoreBox").style.font = "italic bold 50px arial,serif";
	document.getElementById("scoreBox").style.width = "200px";
	document.getElementById("scoreBox").innerHTML = "Score:" + player.score
}

function drawBomb(){
	document.getElementById("bombCount").style.color = "white";
	document.getElementById("bombCount").style.font = "italic bold 50px arial,serif";
	document.getElementById("bombCount").innerHTML = "Bombs:" + player.bombCounter
	document.getElementById("bombCount").style.position = "absolute";
	document.getElementById("bombCount").style.left = "1000px";
	document.getElementById("bombCount").style.top = "723px";
}

function drawLife(){
	document.getElementById("lifeCount").style.color = "white";
	document.getElementById("lifeCount").style.font = "italic bold 50px arial,serif";
	document.getElementById("lifeCount").innerHTML = "Lives:" + player.life
	document.getElementById("lifeCount").style.position = "absolute";
	document.getElementById("lifeCount").style.left = "500px";
	document.getElementById("lifeCount").style.top = "723px";

}