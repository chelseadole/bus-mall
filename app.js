'use strict';

var imgNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

var pathOptions = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.jpg', 'img/wine-glass.jpg'];

var timesShown = 0;
var timesClicked = 0;
var thisImgsArr = [];
var lastImgsArr = [];

function NewImg(imgName, path, timesShown, timesClicked) {
  this.imgName = imgName;
  this.path = path;
  this.timesShown = timesShown;
  this.timesClicked = timesClicked;
};

newImgObj();

function newImgObj() {
  for (var i = 1; i <= 3; i++) {
    var indexNum = Math.floor(Math.random() * 18);
    if (lastImgsArr.includes(indexNum) || thisImgsArr.includes(indexNum)) {
      i--;
    } else {
      var thisImg = new NewImg(imgNames[indexNum], pathOptions[indexNum], 0, 0);
      thisImgsArr.push(indexNum);
      var linkedImg = document.getElementById('img' + i);
      linkedImg.setAttribute('src', pathOptions[indexNum]);
    }
  }
  lastImgsArr = thisImgsArr;
  thisImgsArr = [];
};
