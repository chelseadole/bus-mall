'use strict';

var imgNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

var pathOptions = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.gif', 'img/wine-glass.jpg'];

var thisImgsArr = [];
var lastImgsArr = [];
var allObjects = [];
var totalClicks = 0;

function NewImg(imgName, path, timesClicked, timesShown) {
  this.imgName = imgName;
  this.path = path;
  this.timesClicked = timesClicked;
  this.timesShown = timesShown;
};

function createObjs() {
  for (var i = 0; i < imgNames.length; i++) {
    allObjects.push(new NewImg(imgNames[i], pathOptions[i], 0, 0));
  }
};

function newImgObj() {
  for (var i = 1; i <= 3; i++) {
    var indexNum = Math.floor(Math.random() * 18);
    if (lastImgsArr.includes(indexNum) || thisImgsArr.includes(indexNum)) {
      i--;
    } else if (totalClicks < 25){
      thisImgsArr.push(indexNum);
      allObjects[indexNum].timesShown++;
      var linkedImg = document.getElementById('img' + i);
      linkedImg.setAttribute('src', allObjects[indexNum].path);
      linkedImg.addEventListener('click', eventListen);
    } else {
      linkedImg.removeEventListener('click', eventListen);
    };
  }
  lastImgsArr = thisImgsArr;
  totalClicks++;
  thisImgsArr = [];
};

function eventListen(event) {
  if (event.target.id == 'img1') {
    var targetProd = allObjects[lastImgsArr[0]];
    targetProd.timesClicked++;
  } else if (event.target.id == 'img2') {
    var targetProd = allObjects[lastImgsArr[1]];
    targetProd.timesClicked++;
  } else if (event.target.id == 'img3'){
    var targetProd = allObjects[lastImgsArr[2]];
    targetProd.timesClicked++;
  }
  if (totalClicks === 3) {
    var img1Target = document.getElementById('img1');
    var img2Target = document.getElementById('img2');
    var img3Target = document.getElementById('img3');
    document.getElementById('img1').removeEventListener('click', eventListen);
    document.getElementById('img2').removeEventListener('click', eventListen);
    document.getElementById('img3').removeEventListener('click', eventListen);
    showResults();
  }
  newImgObj();
};

function showResults() {
  var ulTarget = document.getElementById('results');
  for (var i = 0; i < imgNames.length; i++) {
    // var liContent = allObjects[i].timesClicked + ' votes for the ' + allObjects[i].imgName + '.';
    var newLi = document.createElement('li');
    newLi.innerText = allObjects[i].timesClicked + ' votes for the ' + allObjects[i].imgName + '.';
    ulTarget.appendChild(newLi);
  };
}

createObjs();
newImgObj();
