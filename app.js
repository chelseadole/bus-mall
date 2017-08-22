'use strict';

var imgNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

var pathOptions = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.gif', 'img/wine-glass.jpg'];

var thisImgsArr = [];
var lastImgsArr = [];
var allObjects = [];
var totalClicks = 0;

// new NewImg('bag', 'img/bag.jpg', 0, 0);
// new NewImg('banana', 'img/banana.jpg', 0, 0);
// new NewImg('bathroom', 'img/bathroom.jpg', 0, 0);
// new NewImg('boots', 'img/boots.jpg', 0, 0);
// new NewImg('breakfast', 'img/breakfast.jpg', 0, 0);
// new NewImg('bubblegum', 'img/bubblegum.jpg', 0, 0);
// new NewImg('chair', 'img/chair.jpg', 0, 0);
// new NewImg('cthulhu', 'img/cthulhu.jpg', 0, 0);
// new NewImg('dog-duck', 'img/dog-duck.jpg', 0, 0);
// new NewImg('dragon', 'img/dragon.jpg', 0, 0);
// new NewImg('pen', 'img/pen.jpg', 0, 0);
// new NewImg('pet-sweep', 'img/pet-sweep.jpg', 0, 0);
// new NewImg('scissors', 'img/scissors.jpg', 0, 0);
// new NewImg('shark', 'img/shark.jpg', 0, 0);
// new NewImg('sweep', 'img/sweep.png', 0, 0);
// new NewImg('tauntaun', 'img/tauntaun.jpg', 0, 0);
// new NewImg('unicorn', 'img/unicorn.jpg', 0, 0);
// new NewImg('usb', 'img/usb.gif', 0, 0);
// new NewImg('water-can', 'img/water-can.gif', 0, 0);
// new NewImg('wine-glass', 'img/usb.gif', 0, 0);

function NewImg(imgName, path, timesClicked, timesShown) {
  this.imgName = imgName;
  this.path = path;
  this.timesClicked = 0;
  this.timesShown = 0;
};

function createObjs() {
  for (var i = 0; i < imgNames.length; i++) {
    // var thisImg = new NewImg(imgNames[i], pathOptions[i]);
    allObjects.push(new NewImg(imgNames[i], pathOptions[i]));
  }
};

var lastClicked = 0;

function newImgObj() {
  for (var i = 1; i <= 3; i++) {
    var indexNum = Math.floor(Math.random() * 18);
    if (lastImgsArr.includes(indexNum) || thisImgsArr.includes(indexNum)) {
      i--;
    } else {
      thisImgsArr.push(indexNum);
      totalClicks++;
      allObjects[indexNum].timesShown++;
      var linkedImg = document.getElementById('img' + i);
      linkedImg.setAttribute('src', allObjects[indexNum].path);
      linkedImg.addEventListener('click', eventListen);
    };
  }
  lastImgsArr = thisImgsArr;
  thisImgsArr = [];
  lastClicked = indexNum;
};

function eventListen() {
  if (totalClicks === 25) {
    linkedImg.removeEventListener('click', eventListen);
  } else {
    allObjects[lastClicked].timesClicked++;
    lastClicked -= lastClicked;
    newImgObj();
  }
};

newImgObj();
