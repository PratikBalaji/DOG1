var dog,happyDog,database,foodStock,foodS;

function preload(){
  dogimg = loadImage("dogImg.png");
  dogimg2 = loadImage("dogImg1.png");
}

function setup() {
  createCanvas(500,500);
  database=firebase.database();
  food = database.ref('Food');

  dog = createSprite(250,280,10,10);
  dog.addImage(dogimg);
  dog.scale = 0.4;
 
}


function draw() {  
background(46, 139, 87);
if(keyWentDown(UP_ARROW)){
  dog.addImage(dogimg2);
}
  drawSprites();
  fill("YELLOW");
  textSize(24);
  stroke(7);
  text("Press Up Arrow Key To Feed Dog",70,90);
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
database.ref('data').update({
  food:x
})
drawSprites();
}
