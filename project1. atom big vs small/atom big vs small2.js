let canvaswidth = 1280;
let canvasheight = 720;
let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;
let img11;
let img12;
let img13;
let img14;
let img15;
let img16;
let img17;
let img18;
let img19;
var counter = 1;


function setup() {
  // 캔버스 크기를 너비 픽셀, 높이 픽셀로 설정
  createCanvas(canvaswidth, canvasheight);
  background(200);
  noStroke();

  //버튼 생성
  buttonZoomIn = createButton("확대")
  buttonZoomIn.position(canvaswidth/2-100, canvasheight-10)
  buttonZoomIn.size(100, 50)
  buttonZoomIn.style('font-size:130%;')
  buttonZoomOut = createButton("축소")
  buttonZoomOut.position(canvaswidth/2+18, canvasheight-10)
  buttonZoomOut.size(100, 50)
  buttonZoomOut.style('font-size:130%;')

  // 이미지 생성
  imageMode(CENTER);
  img1 = loadImage('./picture/1.jpg');
  img2 = loadImage('./picture/2.jpg');
  img3 = loadImage('./picture/3.jpg');
  img4 = loadImage('./picture/4.jpg');
  img5 = loadImage('./picture/5.jpg');
  img6 = loadImage('./picture/6.jpg');
  img7 = loadImage('./picture/7.jpg');
  img8 = loadImage('./picture/8.jpg');
  img9 = loadImage('./picture/9.jpg');
  img11 = loadImage('./picture/11.jpg');
  img12 = loadImage('./picture/12.jpg');
  img13 = loadImage('./picture/13.jpg');
  img14 = loadImage('./picture/14.jpg');
  img15 = loadImage('./picture/15.jpg');
  img16 = loadImage('./picture/16.jpg');
  img17 = loadImage('./picture/17.jpg');
  img18 = loadImage('./picture/18.jpg');
  img19 = loadImage('./picture/19.jpg');
  
  // 버튼을 클릭할 때 이미지 변경
  buttonZoomIn.mousePressed(imgZoomInChange);
  buttonZoomOut.mousePressed(imgZoomOutChange);
}

function draw() {
  //배경그리기
  background(200);
  //이미지 생성
  image(img1, canvaswidth/2-315, canvasheight/2-40, canvaswidth/2-30, canvasheight-150)
  image(img11, canvaswidth/2+320, canvasheight/2-40, canvaswidth/2-30, canvasheight-150)  
  console.log(counter)
}

//확대 버튼 이미지 변환
function imgZoomInChange(){
  if(counter == 1){
    counter++;
    img1 = loadImage('./picture/' + counter + '.jpg')
    img11 = loadImage('./picture/1' + counter + '.jpg')
  }
  else if(counter == 2){
    counter++;
    img1 = loadImage('./picture/' + counter + '.jpg')
    img11 = loadImage('./picture/1' + counter + '.jpg')
  }
  else if(counter == 3){
    counter++;
    img1 = loadImage('./picture/' + counter + '.jpg')
    img11 = loadImage('./picture/1' + counter + '.jpg')
  }
  else if(counter == 4){
    counter++;
    img1 = loadImage('./picture/' + counter + '.jpg')
    img11 = loadImage('./picture/1' + counter + '.jpg')
  }
  else if(counter == 5){
    counter++;
    img1 = loadImage('./picture/' + counter + '.jpg')
    img11 = loadImage('./picture/1' + counter + '.jpg')
  }
  else if(counter == 6){
    counter++;
    img1 = loadImage('./picture/' + counter + '.jpg')
    img11 = loadImage('./picture/1' + counter + '.jpg')
  }
  else if(counter == 7){
    counter++;
    img1 = loadImage('./picture/' + counter + '.jpg')
    img11 = loadImage('./picture/1' + counter + '.jpg')
  }
  else if(counter == 8){
    counter++;
    img1 = loadImage('./picture/' + counter + '.jpg')
    img11 = loadImage('./picture/1' + counter + '.jpg')
  }
  else if(counter == 9){
    img1 = loadImage('./picture/' + counter + '.jpg')
    img11 = loadImage('./picture/1' + counter + '.jpg')
  }
}

function imgZoomOutChange(){
  if(counter == 1){
    img1 = loadImage('./picture/' + counter + '.jpg')
    img11 = loadImage('./picture/1' + counter + '.jpg')
  }
  else if(counter == 2){
    counter--;
    img1 = loadImage('./picture/' + counter + '.jpg')
    img11 = loadImage('./picture/1' + counter + '.jpg')
  }
  else if(counter == 3){
    counter--;
    img1 = loadImage('./picture/' + counter + '.jpg')
    img11 = loadImage('./picture/1' + counter + '.jpg')
  }
  else if(counter == 4){
    counter--;
    img1 = loadImage('./picture/' + counter + '.jpg')
    img11 = loadImage('./picture/1' + counter + '.jpg')
  }
  else if(counter == 5){
    counter--;
    img1 = loadImage('./picture/' + counter + '.jpg')
    img11 = loadImage('./picture/1' + counter + '.jpg')
  }
  else if(counter == 6){
    counter--;
    img1 = loadImage('./picture/' + counter + '.jpg')
    img11 = loadImage('./picture/1' + counter + '.jpg')
  }
  else if(counter == 7){
    counter--;
    img1 = loadImage('./picture/' + counter + '.jpg')
    img11 = loadImage('./picture/1' + counter + '.jpg')
  }
  else if(counter == 8){
    counter--;
    img1 = loadImage('./picture/' + counter + '.jpg')
    img11 = loadImage('./picture/1' + counter + '.jpg')
  }
  else if(counter == 9){
    counter--;
    img1 = loadImage('./picture/' + counter + '.jpg')
    img11 = loadImage('./picture/1' + counter + '.jpg')
  }
}