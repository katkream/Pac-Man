/* Global Variables
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d")
    var timer;
    var map = [];   
*/

// Hides parent element of current item
// called from a input with the ID="game_start"
function hide_div(object){
    object.parentElement.style.display = "none";
    document.getElementById("button_wrapper").style.display = "none";
    //$("#button_wrapper").fadeOut(1000);
	$("#game_wrapper").fadeIn(500);
}
// Starts the whole game
// called from a input with the ID="game_start"
var ghostArray = [];
var deadGhostArray =[];
var startTime = new Date().getTime() / 1000;
var map_cell_size = 40;
ghostArray.push(new Ghost("white",14,7,12.5,map_cell_size,3,false));
ghostArray.push(new Ghost("red",15,7,12.5,map_cell_size,10,true));
ghostArray.push(new Ghost("blue",16,7,12.5,map_cell_size,20,true));
function start(){
    // REDRAW GLOBAL VARIABLE CONTROL ZONE
    player = new Player(15, 14, "#FF0");
    cw = canvas.width;
    ch = canvas.height;
   
    map_cell_border_color = "white";
    map_cell_fill_color = "black";
    timer = setInterval(function(){
        // calls a function from draw.js script
        redraw();
        // when the mouth reaches its limit reverse the direction
        if(player.dead == false){
            if(player.stopped == false){
                player.pctOpen += player.dir;
                if (player.pctOpen % 100 == 0) {
                    player.dir = -player.dir;
                }
            }
        }else{
            player.pctOpen += 10
            player.xDirection = 0
            player.yDirection = 0
            if (player.pctOpen > 500){
                player.x = 15;
                player.y = 14;
                player.dead = false;
                player.life -= 1;
                player.pctOpen = 100;
            }
        }
        //console.log(ghost)
        player.drawPacman();
        if(bossPhase == false){
            console.log(vunerablePhase);
            for(var i = 0; i < ghostArray.length; i++){
                ghostArray[i].drawGhost();
                ghostArray[i].updatePath(player);
            }
        }
        if(bossPhase == true){
            
            bGhost.drawGhost(bGhost.changingColors,100,100,50);
            for(var i = 0; i < ghostArray.length; i++){
                ghostArray[i].updatePath(player);
            }
            
        }
        

        end();
        if(player.life == 0){
            //alert('you lose! your score is: ' + player.score)
            clearInterval(timer)
            clearInterval(moveTimer)
            document.getElementById('opacity_div').style.display = "block";
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "black";
            ctx.fill();
            map = blueprint_map();
            ctx.drawImage(document.getElementById('gameover'),0,0);
        }
    }, 10);
    moveTimer = setInterval(function () {
    	changeScore();
    	drawBomb();
    	drawLife();
        player.wallFinder();
        player.oldx = player.x;
        player.oldy = player.y;
        player.x += player.xDirection*player.spd;
        player.y += player.yDirection*player.spd;
        player.center = {x:(player.x*map_cell_size)+20,y:(player.y*map_cell_size)+20};

        for(var i = 0; i < ghostArray.length; i++){
            if(ghostArray[i].startTime <  (new Date().getTime() / 1000)- startTime ){
                ghostArray[i].x += ghostArray[i].xDirection*ghostArray[i].spd;
                ghostArray[i].y += ghostArray[i].yDirection*ghostArray[i].spd;
                ghostArray[i].center = {x:(ghostArray[i].x*map_cell_size)+20,y:(ghostArray[i].y*map_cell_size)+20};
            }
            if(player.center.x < ghostArray[i].center.x + 10 && player.center.x + 10 > ghostArray[i].center.x && player.center.y < ghostArray[i].center.y+ 10 && player.center.y+ 10 > ghostArray[i].center.y){
                if(vunerablePhase){
                    setTimeout(function(){
                        vunerablePhase = false;
                        for(var i=0; i<(3-ghostArray.length); i++){
                            var randomArray = [true,true,true,false];
                            ghostArray.push(new Ghost("rgb("+Math.random()*255+","+Math.random()*255+","+Math.random()*255+")",14,7,12.5,map_cell_size,3,randomArray[Math.floor(Math.random()*4)]));               
                        }
                    },6000);
                    for(var i=0; i<ghostArray.length; i++){
                        if(Math.round(ghostArray[i].x) == Math.round(player.x) && Math.round(ghostArray[i].y) == Math.round(player.y)){
                            var currentDeadGhost = ghostArray[i];
                            deadGhostArray.push(currentDeadGhost);
                            ghostArray.splice(i,1);
                            player.score += 200;
                        } 
                    }
                }else{
                    player.stopped = true;
                    player.dead = true;
                }
            }
        }
        player.movementStopper();
        end();
        //ghost.x += 1*0.1;
    },50);
}
var vunerablePhase = false;
var bossPhase = false;
function end(){
    if(dotCounter >= 268 && powerUpCounter == 6){
        dotCounter = 0;
        powerUpCounter =0;
        bossPhase = true;
        bGhost = new BossGhost("cyan",100,100,50);
        
        var endGameWallFadeInterval = setInterval(function(){
        
            for(var x = 0; x < (parseInt(ch)/map_cell_size); x++){
                for(var y = 0; y < (parseInt(cw)/map_cell_size); y++){    
                    if(map[x][y].indestructable == undefined){
                        map[x][y].wallFade -= .01;
                        if(map[x][y].wallFade <= 0){
                            map[x][y].wall = false;
                            if(x == 17 && y == 31){
                                clearInterval(endGameWallFadeInterval);
                            }
                        
                        }
                    }
                }

            }
        },10)
        setTimeout(function(){
            initiateBombDrop();
            spawnRandomBomb();
            
        },3000);
        
    }

    
}
function initiateBombDrop(){

    var bombDropInterval = setInterval(function(){
        var bombErrorMargin = Math.floor((Math.random() * 3) -1);
        var bombErrorMargin2 = Math.floor((Math.random()*3)-1);
        var currentPlayerPositionX = Math.round(player.y+1);
        var currentPlayerPositionY = Math.round(player.x+1);

        var bombDropXPos = currentPlayerPositionX + bombErrorMargin;
        var bombDropYPos = currentPlayerPositionY + bombErrorMargin2;
        
        map[bombDropXPos][bombDropYPos].bombDropInit = true;
        map[bombDropXPos][bombDropYPos].bombDropOpacity = 0;
        var increaseBombOpacity = setInterval(function(){
            if(map[bombDropXPos][bombDropYPos].bombDropOpacity <1){
                map[bombDropXPos][bombDropYPos].bombDropOpacity += 0.01;
            }else if(Math.round(map[bombDropXPos][bombDropYPos].bombDropOpacity) == 1){
                map[bombDropXPos][bombDropYPos].bombDropInit = undefined;
                map[bombDropXPos][bombDropYPos].detonate = true;
                clearInterval(increaseBombOpacity);
                map[bombDropXPos][bombDropYPos].colorFade = 1;
                map[bombDropXPos][bombDropYPos].playerSpawned = false;
                var bombExplosion = setInterval(function(){
                    if(map[bombDropXPos][bombDropYPos].colorFade >= 0){     
                        map[bombDropXPos][bombDropYPos].colorFade -= 0.01;
                    }
                    if(map[bombDropXPos][bombDropYPos].colorFade == 0){
                        map[bombDropXPos][bombDropYPos].detonate = undefined;
                        clearInterval(bombExplosion);
                    }
                },10)
            }
        },20)
    },200); 


}
var spawnBombCounter = 0;
function spawnRandomBomb(){
    var bombSpawnInterval = setInterval(function(){
        var randomBombCoords = Math.floor((Math.random()*30)+1);
        var randomBombCoords2 = Math.floor((Math.random()*30)+1);

        if(map[randomBombCoords][randomBombCoords2].bomb == undefined && spawnBombCounter <= 6){
            map[randomBombCoords][randomBombCoords2].bomb = true;
            spawnBombCounter += 1;
        }
    },2000);
}