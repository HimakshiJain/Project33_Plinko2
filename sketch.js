var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

  var engine, world;
 
var particles = [];
var plinkos = [];
var divisions = [];
var array = [50,100,150,200,250,300,350,400,450,500];

var divisionHeight=300;

var score =0;

var particle;

var turn = 0;

var gameState = "play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)

  Engine.update(engine);
 
  //ground.display();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   text("Score : "+score,20,30);
   text("" + array[0],25,550)
   text("" + array[1],105,550)
   text("" + array[2],185,550)
   text("" + array[3],265,550)
   text("" + array[4],345,550)
   text("" + array[5],425,550)
   text("" + array[6],505,550)
   text("" + array[7],585,550)
   text("" + array[8],665,550)
   text("" + array[9],745,550)
   text("X:" + mouseX,500,30);
   text("Y:" + mouseY,570,30);



   if(particle != null){
     particle.display();

     if(particle.body.position.y > 760){
       if(particle.body.position.x < 85 && particle.body.position.x > 0){
         score = score + array[0];
         particle = null;
         if(turn>=5){
           gameState = "end";
         }
       }
     }
   }


if(particle != null){
  particle.display();

  if(particle.body.position.y > 760){
    if(particle.body.position.x < 165 && particle.body.position.x > 85){
      score = score + array[1];
      particle = null;
      if(turn>=5){
        gameState = "end";
      }
    }
  }
}

if(particle != null){
  particle.display();

  if(particle.body.position.y > 760){
    if(particle.body.position.x < 245 && particle.body.position.x > 165){
      score = score + array[2];
      particle = null;
      if(turn>=5){
        gameState = "end";
      }
    }
  }
}
if(particle != null){
  particle.display();

  if(particle.body.position.y > 760){
    if(particle.body.position.x < 325 && particle.body.position.x > 245){
      score = score + array[3];
      particle = null;
      if(turn>=5){
        gameState = "end";
      }
    }
  }
}
if(particle != null){
  particle.display();

  if(particle.body.position.y > 760){
    if(particle.body.position.x < 405 && particle.body.position.x > 325){
      score = score + array[4];
      particle = null;
      if(turn>=5){
        gameState = "end";
      }
    }
  }
}
if(particle != null){
  particle.display();

  if(particle.body.position.y > 760){
    if(particle.body.position.x < 485 && particle.body.position.x > 405){
      score = score + array[5];
      particle = null;
      if(turn>=5){
        gameState = "end";
      }
    }
  }
}
if(particle != null){
  particle.display();

  if(particle.body.position.y > 760){
    if(particle.body.position.x < 565 && particle.body.position.x > 485){
      score = score + array[6];
      particle = null;
      if(turn>=5){
        gameState = "end";
      }
    }
  }
}
if(particle != null){
  particle.display();

  if(particle.body.position.y > 760){
    if(particle.body.position.x < 645 && particle.body.position.x > 565){
      score = score + array[7];
      particle = null;
      if(turn>=5){
        gameState = "end";
      }
    }
  }
}
if(particle != null){
  particle.display();

  if(particle.body.position.y > 760){
    if(particle.body.position.x < 725 && particle.body.position.x > 645){
      score = score + array[8];
      particle = null;
      if(turn>=5){
        gameState = "end";
      }
    }
  }
}
if(particle != null){
  particle.display();

  if(particle.body.position.y > 760){
    if(particle.body.position.x < 805 && particle.body.position.x > 805){
      score = score + array[9];
      particle = null;
      if(turn>=5){
        gameState = "end";
      }
    }
  }
}
if(particle != null){
  particle.display();

  if(particle.body.position.y > 760){
    if(particle.body.position.x < 165 && particle.body.position.x > 85){
      score = score + 400;
      particle = null;
      if(turn>=5){
        gameState = "end";
      }
    }
  }
}

if(turn >= 5){
  gameState = "end";
}

if(gameState === "end"){
  text("GAME OVER",350,225);
}

}




function mousePressed(){
  if(gameState !== "end"){
    turn++
    particle = new Particle(mouseX,10,10,10);
  }
}