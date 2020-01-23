let sldr1, sldr2, sldr3;
let clue1;
let circleColor, rectColor;
//part1
let part1P, part1Link, part1Input1, part1Input2, part1Input3, part1Input4, part1Input5;
//part2 
let part2P, part2Input1;
//part3
let part3P1, part3P2, part3P3;
//part4
let part4P;
//boolean to ensure puzzle is finished
let bool = false;
let canvas;
let bgRColorInput, bgBColorInput, bgGColorInput;

function setup() {
  canvas = createCanvas(400, 400);
  canvas.parent("Sketch");
  sldr1 = createSlider(10, 255, 50);
  sldr2 = createSlider(10, 255, 50);
  sldr3 = createSlider(10, 255, 50);
  bgRColorInput = createInput("255");
  bgGColorInput = createInput("255");
  bgBColorInput = createInput("255");
  circleColor = color(random(255), random(255), random(255));
  rectColor = color(random(255), random(255), random(255));
  //puts inputs and sliders in div
  sldr1.parent("IntructionsAndInput");
  sldr2.parent("IntructionsAndInput");
  sldr3.parent("IntructionsAndInput");
  bgRColorInput.parent("IntructionsAndInput");
  bgGColorInput.parent("IntructionsAndInput");
  bgBColorInput.parent("IntructionsAndInput");
  //change size of items  
  bgRColorInput.size(127.5);
  bgGColorInput.size(127.5);
  bgBColorInput.size(127.5);
  sldr1.size(255);
  sldr2.size(255);
  sldr3.size(255);
  //clues below canvas
  clue1 = createP("16, 49, 64");
  //part1
  part1Setup();
  //part2 
  part2Setup();
  //part3
  part3Setup();
  //part4 
  part4Setup();
}


function draw() {
  background(color(bgRColorInput.value(), bgGColorInput.value(), bgBColorInput.value()));
  rectMode(CENTER);
  //rectangle
  fill(rectColor);
  rect(200, 200, sldr2.value(), sldr3.value());
  //circle
  fill(circleColor);
  circle(200, 200, sldr1.value());
  //first part of easter egg
  part1();
  //second part of easter egg
  part2();
  //third part of easter egg
  part3();
  //final part
  part4();
}

function part1Setup() {
  //part1 
  part1P = createP("Wow, good job. You should take 5 and enter the lottery.");
  part1Link = createElement('a', "This Should Help");
  part1Link.attribute("href", "https://www.nytimes.com/");
  part1Input1 = createInput("");
  part1Input2 = createInput("");
  part1Input3 = createInput("");
  part1Input4 = createInput("");
  part1Input5 = createInput("");
  part1Input1.size(127.5);
  part1Input2.size(127.5);
  part1Input3.size(127.5);
  part1Input4.size(127.5);
  part1Input5.size(127.5);
  //inserts them into div 
  part1P.parent("AfterSketchPart1");
  part1Link.parent("AfterSketchPart1");
  part1Input1.parent("AfterSketchPart1");
  part1Input2.parent("AfterSketchPart1");
  part1Input3.parent("AfterSketchPart1");
  part1Input4.parent("AfterSketchPart1");
  part1Input5.parent("AfterSketchPart1");
  //hide part1 elements
  part1P.hide();
  part1Link.hide();
  part1Input1.hide();
  part1Input2.hide();
  part1Input3.hide();
  part1Input4.hide();
  part1Input5.hide();
}

function part1() {
  if (bgRColorInput.value() == "4" && bgGColorInput.value() == "7" && bgBColorInput.value() == "8") {
    part1P.show();
    part1Link.show();
    part1Input1.show();
    part1Input2.show();
    part1Input3.show();
    part1Input4.show();
    part1Input5.show();
  }
}

function part2Setup() {
  //part2
  part2P = createP("Nice Job! Now can you find the next clue?");
  part2Input1 = createInput("");
  part2Input1.size(127.5);
  //inserts them into div 
  part2P.parent("AfterSketchPart1");
  part2Input1.parent("AfterSketchPart1");
  //hides part2 elements
  part2P.hide();
  part2Input1.hide();
}

function part2() {
  if (part1Input1.value() == "7" && part1Input2.value() == "10" && part1Input3.value() == "26" && part1Input4.value() == "28" && part1Input5.value() == "34") {
    //text appear in sketch
    strokeWeight(0);
    fill(4, 7, 8);
    textSize(15);
    //upper left text
    text("51", 30, 20);
    //upper right text
    text("st", 370, 20);
    //lower left text
    text("US", 30, 380);
    //lower right text
    text("City", 370, 380);
    //shows html elements
    part2P.show();
    part2Input1.show();
  }
}

function part3Setup() {
  //part1 
  part3P1 = createP("Max");
  part3P2 = createP("Min");
  part3P3 = createP("Max");
  //insets them into  div
  part3P1.parent("AfterSketchPart1");
  part3P2.parent("AfterSketchPart1");
  part3P3.parent("AfterSketchPart1");
  //hides part3 elements
  part3P1.hide();
  part3P2.hide();
  part3P3.hide();

}

function part3() {
  if (part2Input1.value() == "Wichita" || part2Input1.value() == "wichita") {
    part3P1.show();
    part3P2.show();
    part3P3.show();
    bool = true;

  }
}

function part4Setup(){
  //part4
 part4P = createP("Now how have you managed to solve this puzzle? Whether or not you did it legit, CONGRATS!");
  //insert them into div 
  part4P.parent("AfterSketchPart1");
  //hides part 4 element
  part4P.hide();
  
}
function part4() {
  if (bool == true && sldr1.value() == 255 && sldr2.value() == 10 && sldr3.value() == 255 && bgRColorInput.value() == "255" && bgGColorInput.value() == "0" && bgBColorInput.value() == "255") {
    part4P.show();
  }

}