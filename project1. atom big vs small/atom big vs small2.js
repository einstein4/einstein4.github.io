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
  img1 = loadImage('./img/1.JPG');
  img2 = loadImage('./img/2.JPG');
  img3 = loadImage('./img/3.JPG');
  img4 = loadImage('./img/4.JPG');
  img5 = loadImage('./img/5.JPG');
  img6 = loadImage('./img/6.JPG');
  img7 = loadImage('./img/7.JPG');
  img8 = loadImage('./img/8.JPG');
  img9 = loadImage('./img/9.JPG');
  img11 = loadImage('./img/11.JPG');
  img12 = loadImage('./img/12.JPG');
  img13 = loadImage('./img/13.JPG');
  img14 = loadImage('./img/14.JPG');
  img15 = loadImage('./img/15.JPG');
  img16 = loadImage('./img/16.JPG');
  img17 = loadImage('./img/17.JPG');
  img18 = loadImage('./img/18.JPG');
  img19 = loadImage('./img/19.JPG');
  
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
    img1 = loadImage('./img/' + counter + '.JPG')
    img11 = loadImage('./img/1' + counter + '.JPG')
  }
  else if(counter == 2){
    counter++;
    img1 = loadImage('./img/' + counter + '.JPG')
    img11 = loadImage('./img/1' + counter + '.JPG')
  }
  else if(counter == 3){
    counter++;
    img1 = loadImage('./img/' + counter + '.JPG')
    img11 = loadImage('./img/1' + counter + '.JPG')
  }
  else if(counter == 4){
    counter++;
    img1 = loadImage('./img/' + counter + '.JPG')
    img11 = loadImage('./img/1' + counter + '.JPG')
  }
  else if(counter == 5){
    counter++;
    img1 = loadImage('./img/' + counter + '.JPG')
    img11 = loadImage('./img/1' + counter + '.JPG')
  }
  else if(counter == 6){
    counter++;
    img1 = loadImage('./img/' + counter + '.JPG')
    img11 = loadImage('./img/1' + counter + '.JPG')
  }
  else if(counter == 7){
    counter++;
    img1 = loadImage('./img/' + counter + '.JPG')
    img11 = loadImage('./img/1' + counter + '.JPG')
  }
  else if(counter == 8){
    counter++;
    img1 = loadImage('./img/' + counter + '.JPG')
    img11 = loadImage('./img/1' + counter + '.JPG')
  }
  else if(counter == 9){
    img1 = loadImage('./img/' + counter + '.JPG')
    img11 = loadImage('./img/1' + counter + '.JPG')
  }
}

function imgZoomOutChange(){
  if(counter == 1){
    img1 = loadImage('./img/' + counter + '.JPG')
    img11 = loadImage('./img/1' + counter + '.JPG')
  }
  else if(counter == 2){
    counter--;
    img1 = loadImage('./img/' + counter + '.JPG')
    img11 = loadImage('./img/1' + counter + '.JPG')
  }
  else if(counter == 3){
    counter--;
    img1 = loadImage('./img/' + counter + '.JPG')
    img11 = loadImage('./img/1' + counter + '.JPG')
  }
  else if(counter == 4){
    counter--;
    img1 = loadImage('./img/' + counter + '.JPG')
    img11 = loadImage('./img/1' + counter + '.JPG')
  }
  else if(counter == 5){
    counter--;
    img1 = loadImage('./img/' + counter + '.JPG')
    img11 = loadImage('./img/1' + counter + '.JPG')
  }
  else if(counter == 6){
    counter--;
    img1 = loadImage('./img/' + counter + '.JPG')
    img11 = loadImage('./img/1' + counter + '.JPG')
  }
  else if(counter == 7){
    counter--;
    img1 = loadImage('./img/' + counter + '.JPG')
    img11 = loadImage('./img/1' + counter + '.JPG')
  }
  else if(counter == 8){
    counter--;
    img1 = loadImage('./img/' + counter + '.JPG')
    img11 = loadImage('./img/1' + counter + '.JPG')
  }
  else if(counter == 9){
    counter--;
    img1 = loadImage('./img/' + counter + '.JPG')
    img11 = loadImage('./img/1' + counter + '.JPG')
  }
}