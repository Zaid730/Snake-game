// snake game code 
   let canvas = document.getElementById("myCanvas");
   let context = canvas.getContext("2d");

   let block = 25;
   let row = 15;
   let column = 15;

// canvas height and width 
   canvas.width = block*column;
   canvas.height = block*row;

// snake food 
   let foodX = block*4;
   let foodY = block*4;

// snake head 
   let snakeX = block*7;
   let snakeY = block*3;

// snake body
   let snakeBody = [];

// snake movement
   let moveX = 0;
   let moveY = 0;

// game over 
   let gameOver = false;

   window.onload = function(){
     food()
     document.addEventListener("keydown", movement);
     setInterval(drawGame, 200);
    }

// first function
   function drawGame() {
   context.fillStyle = "black";
   context.fillRect(0,0, canvas.width, canvas.height);

   context.fillStyle = "orange";
   context.fillRect(foodX,foodY, block, block);

   if(gameOver == false){
   if(foodX==snakeX && foodY==snakeY){
      snakeBody.push([foodX,foodY])
      food()
   }
     
   for(let i=snakeBody.length-1; i>0; i--){
       snakeBody[i] = snakeBody[i-1];
   }
   
   if(snakeBody.length != 0){
     snakeBody[0] = [snakeX,snakeY];
   }

   context.fillStyle = "red";
   snakeX = snakeX + moveX * block;
   snakeY = snakeY + moveY * block;
   context.fillRect(snakeX, snakeY, block, block);
   
   for(let i=0; i<snakeBody.length; i++){
       context.fillStyle = "red";
       context.fillRect(snakeBody[i][0],snakeBody[i][1], block,block);
   }
   }
      if(snakeX < 0 || snakeX > column*block || snakeY < 0 || snakeY > row*block){
        gameOver = true;
        alert("Game Over");
      }

   }
   
// food at random place function
   function food(){
    foodX = Math.floor(Math.random()*column) * block;
    foodY = Math.floor(Math.random()*row) * block;
   }


// movement function 
   function movement(e){
     if(e.code == "ArrowUp" && moveY != +1){
        moveX = 0;
        moveY = -1;
     }
     else if(e.code == "ArrowDown" && moveY != -1){
        moveX = 0;
        moveY = +1;
     }
     else if(e.code == "ArrowRight" && moveX != -1){
        moveX = +1;
        moveY = 0;
     }
     else if(e.code == "ArrowLeft" && moveX != +1){
        moveX = -1;
        moveY = 0;
     }
   }
