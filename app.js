'use strict';

imgNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

pathOptions = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.jpg', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.jpg', 'img/wine-glass.jpg'];

timesShown = 0;
timesClicked = 0;
thisImgs = [];
lastImgs = [];

function NewImg(imgName, path, timesShown, timesClicked, imgID) {
  this.imgName = imgName;
  this.path = path;
  this.timesShown = timesShown;
  this.timesClicked = timesClicked;
  this.imgID = imgID;
};

var doMath = function() {
  var indexNum = (Math.floor(Math.random) * 19);
  thisImgs.push(indexNum);
  }

var newImgObj = function() {
  for (i = 0; i < 3; i++) {
    if (this.lastImgs.contains(indexNum)) {
      i--;
      doMath();

    var indexNum = (Math.floor(Math.random) * 19);
    if lastImgs.contains(indexNum) {

    }

  }
}
while
var iterInt = (Math.floor(Math.random) * 19);


var createNamePath = function() {
  for
