'use strict';

var imgNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

var pathOptions = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.jpg', 'img/wine-glass.jpg'];

var timesShown = 0;
var timesClicked = 0;
var thisImgsArr = [];
var lastImgsArr = [];
var timesClicked = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var timesShown = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function NewImg(imgName, path) {
  this.imgName = imgName;
  this.path = path;
  this.timesClicked = 0;
  this.timesShown = 0;
}

function createVars() {
  for (var indexNum = 0; indexNum < imgNames.length; i++) {
    var thisImg = new NewImg(imgNames[indexNum], pathOptions[indexNum]);
  }
};


function newImgObj() {
  for (var i = 1; i <= 3; i++) {
    var indexNum = Math.floor(Math.random() * 18);
    if (lastImgsArr.includes(indexNum) || thisImgsArr.includes(indexNum)) {
      i--;
    } else {
      var thisImg = new NewImg(imgNames[indexNum], pathOptions[indexNum]);
      thisImgsArr.push(indexNum);
      // var NAME = timesShown.indexOf(indexNum);
      // [indexNum]++;
      var linkedImg = document.getElementById('img' + i);
      linkedImg.setAttribute('src', pathOptions[indexNum]);
      linkedImg.addEventListener('click', eventListen);
    };
  }
  lastImgsArr = thisImgsArr;
  thisImgsArr = [];
};

function makeImgs() {
  var thisImg = new NewImg(imgNames[thisImgsArr[0]], pathOptions[thisImgArr[0]]);
}
//
// var allImgsID = document.getElementById('allImgs');
// allImgsID.addEventListener('click', eventListen);

function eventListen() {
  if (imgClicks === 25) {
    htmlID.removeEventListener('click', eventListen);
  } else {
    imgClicks++;

    newImgObj();
  }
};

newImgObj();
