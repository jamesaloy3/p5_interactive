let sldr1, sldr2, sldr3;
let clue1;
let circleColor, rectColor;
//part1
let part1P, part1Link, part1Input1, part1Input2, part1Input3, part1Input4, part1Input5;

let part2P, part2Input1;
//part3
let part3P1, part3P2, part3P3;
//part4
let part4P;
//boolean for first part
let bool = false;

let bgRColorInput, bgBColorInput, bgGColorInput;

let width1;

function setup() {
  var canvasDiv = document.getElementById('centersketch');
  width1 = canvasDiv.clientWidth;

  var cvn = createCanvas(width1 - 40, 400);

  cvn.parent('centersketch');

  background(0);

  sldr1 = createSlider(10, 255, 50);
  sldr2 = createSlider(10, 255, 50);
  sldr3 = createSlider(10, 255, 50);
  sldr1.parent('slide1');
  sldr2.parent('slide1');
  sldr3.parent('slide1');
  sldr1.size(255);
  sldr2.size(255);
  sldr3.size(255);

  sldr1.class("slider");
  sldr2.class("slider");
  sldr3.class("slider");


  bgRColorInput = createInput("255");
  bgGColorInput = createInput("255");
  bgBColorInput = createInput("255");
  bgRColorInput.parent('in1');
  bgGColorInput.parent('in2');
  bgBColorInput.parent('in3');
  //change size of items  
  bgRColorInput.size(50);
  bgGColorInput.size(50);
  bgBColorInput.size(50);

  bgRColorInput.class("input");
  bgGColorInput.class("input");
  bgBColorInput.class("input");

  circleColor = color(random(255), random(255), random(255));
  rectColor = color(random(255), random(255), random(255));
  //puts inputs and sliders in div

  //clues below canvas
  clue1 = createElement("h3", "16, 49, 64");
  clue1.parent('foottext');
  //part1
  part1Setup();
  //part2 
  part2Setup();

  part3Setup();
  //part4 
  part4Setup();


}


function draw() {
  background(color(bgRColorInput.value(), bgGColorInput.value(), bgBColorInput.value()));
  rectMode(CENTER);
  //rectangle
  fill(rectColor);
  rect((width1 - 40) / 2, 200, sldr2.value(), sldr3.value());
  //circle
  fill(circleColor);
  circle((width1 - 40) / 2, 200, sldr1.value());
  //first part of easter egg
  part1();
  //second part of easter egg
  part2();

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
  part1Input1.size(50);
  part1Input2.size(50);
  part1Input3.size(50);
  part1Input4.size(50);
  part1Input5.size(50);
  //inserts them into div 
  part1Link.class('links');
  part1P.class('text')
  part1P.parent('inputs');
  part1Link.parent('inputs');
  part1Input1.parent('inputs');
  part1Input2.parent('inputs');
  part1Input3.parent('inputs');
  part1Input4.parent('inputs');
  part1Input5.parent('inputs');
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
  part2P.class('text');
  //inserts them into div 
  part2P.parent("inputs");
  part2Input1.parent("inputs");
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
    text("51", 30, 30);
    //upper right text
    text("st", width1 - 75, 30);
    //lower left text
    text("US", 30, 370);
    //lower right text
    text("City", width1 - 90, 370);
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
  part3P1.parent("inputs");
  part3P2.parent("inputs");
  part3P3.parent("inputs");
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

function part4Setup() {
  //part4
  part4P = createP("Now how have you managed to solve this puzzle? Whether or not you did it legit, CONGRATS!");
  //insert them into div 
  part4P.class('text');
  part4P.parent("inputs");
  //hides part 4 element
  part4P.hide();

}

function part4() {
  if (bool == true && sldr1.value() == 255 && sldr2.value() == 10 && sldr3.value() == 255 && bgRColorInput.value() == "255" && bgGColorInput.value() == "0" && bgBColorInput.value() == "255") {
    part4P.show();
  }

}
