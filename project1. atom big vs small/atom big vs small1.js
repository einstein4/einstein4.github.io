let overBox = false;
let locked = false;
let canvaswidth = 1280;
let canvasheight = 720
let radius = 200
let bx = canvaswidth/2;
let by = canvasheight/2;
let xOffset = 0.0;
let yOffset = 0.0;


function setup() {
  // 캔버스 크기를 너비 픽셀, 높이 픽셀로 설정
  createCanvas(canvaswidth, canvasheight);
  background(200);
  noStroke();

}
function draw() {
  // 바탕을 계속 그려서 원이 여러개가 생기는 것 방지
    background(200);
 // 원위에 커서가 있는지를 테스트
  if(radius/2 > dist(width/2, height/2, mouseX, mouseY))
    {overBox = true;
    if(!locked){
    stroke(color(0, 0, 255));
    strokeWeight(4);  
    }
    }
  else { 
    stroke(color(0, 0, 0));
    strokeWeight(4);
    fill(0);
    overBox = false;
}

 // 원을 그림
  ellipse(width/2, height/2, radius);
  console.log(dist(xOffset, xOffset, mouseX, mouseY))
}

//원 안과 밖의 구분, 마우스를 클릭할 때 경우의 수를 고려해서 ,거짓이 2개가 필요
function mousePressed() {
  if (overBox) {
    locked = true;
  } else {
    locked = false;
  }
  //원안에 마우스를 클릭하면 그 값을 기억
  xOffset = mouseX;
  yOffset = mouseY;
}
//드래그 했을때 거리 측정 후 그 값을 반지름으로
function mouseDragged() {
  if (locked) {
    radius = dist(xOffset, xOffset, mouseX, mouseY)
  }
}
// 마우스를 누르면 locked 해제 
function mouseReleased() {
  locked = false;
}