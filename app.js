'use strict';

var imgNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

var pathOptions = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.jpg', 'img/wine-glass.jpg'];

var timesShown = 0;
var timesClicked = 0;
var thisImgsArr = [];
var lastImgsArr = [];
var allObjects = [];
var totalClicks = 0;

function NewImg(imgName, path) {
  this.imgName = imgName;
  this.path = path;
  this.timesClicked = 0;
  this.timesShown = 0;
}

function createObjs() {
  for (var i = 0; i < imgNames.length; i++) {
    var thisImg = new NewImg(imgNames[i], pathOptions[i]);
    allObjects.push(thisImg);
  }
};

var lastClicked;

function newImgObj() {
  for (var i = 1; i <= 3; i++) {
    var indexNum = Math.floor(Math.random() * 18);
    if (lastImgsArr.includes(indexNum) || thisImgsArr.includes(indexNum)) {
      i--;
    } else {
      thisImgsArr.push(indexNum);
      totalClicks++;
      lastClicked = indexNum;
      allObjects[indexNum].timesShown++;
      var linkedImg = document.getElementById('img' + i);
      linkedImg.setAttribute('src', allObjects[indexNum].path);
      linkedImg.addEventListener('click', eventListen);
    };
  }
  lastImgsArr = thisImgsArr;
  thisImgsArr = [];
};

function eventListen() {
  if (totalClicks === 25) {
    linkedImg.removeEventListener('click', eventListen);
  } else {
    allObjects[lastClicked].timesClicked++;
    console.log(allObjects[lastClicked]);
    lastClicked;
    newImgObj();
  }
};

createObjs();
newImgObj();
