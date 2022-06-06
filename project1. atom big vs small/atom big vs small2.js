let canvaswidth = 1280;
let canvasheight = 720;
let img1;
let img2;

function setup() {
  // 캔버스 크기를 너비 픽셀, 높이 픽셀로 설정
  createCanvas(canvaswidth, canvasheight);
  background(200);
  noStroke();

  //버튼 생성
  buttonZoomIn = createButton("확대")
  buttonZoomIn.position(canvaswidth/2-100, canvasheight+100)
  buttonZoomIn.size(100, 50)
  buttonZoomIn.style('font-size:130%;')
  buttonZoomOut = createButton("축소")
  buttonZoomOut.position(canvaswidth/2+18, canvasheight+100)
  buttonZoomOut.size(100, 50)
  buttonZoomOut.style('font-size:130%;')

  // 이미지 생성
  img1 = loadImage('1.4m.jpg');
  img2 = loadImage('1.5m.jpg');

  // 버튼을 클릭할 때 이미지 변경
  buttonZoomIn.mousePressed(imgZoomInChange);
}

function draw() {
  image(img1, 20, 20, canvaswidth/2-30, canvasheight-150)
  image(img2, canvaswidth/2+10, 20, canvaswidth/2-30, canvasheight-150)
}

function imgZoomInChange() {
  img1 = img2
}

// console.log(mouseX, mouseY)

// let button;
// function setup() {
//   createCanvas(1000, 1000);
//   background(0);
//   button = createButton('click me');
//   button.position(0, 0);
//   button.mousePressed(changeBG);  
  
//   button = createButton('submit');
//   button.position(input.x + input.width, 65);
//   button.mousePressed(greet);
// }

// function changeBG() {
//   let val = random(255);
//   background(val);
// }