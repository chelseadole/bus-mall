'use strict';

var imgNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

var pathOptions = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.gif', 'img/wine-glass.jpg'];

var thisImgsArr = [];
var lastImgsArr = [];
var allObjects = [];
var totalClicks = 0;
var clickedProducts = [];

createObjs();
newImgObj();

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
    } else if (totalClicks <= 3){
      thisImgsArr.push(indexNum);
      allObjects[indexNum].timesShown++;
      var linkedImg = document.getElementById('img' + i);
      linkedImg.setAttribute('src', allObjects[indexNum].path);
      linkedImg.addEventListener('click', eventListen);
    } else {
      totalClicks++;
      eventListen();
    };
  }
  lastImgsArr = thisImgsArr;
  totalClicks++;
  thisImgsArr = [];
};

function eventListen(event) {
  if (event.target.id === 'img1') {
    var targetProd = allObjects[lastImgsArr[0]];
    clickedProducts.push(targetProd);
    targetProd.timesClicked++;
  } else if (event.target.id === 'img2') {
    var targetProd = allObjects[lastImgsArr[1]];
    clickedProducts.push(targetProd);
    targetProd.timesClicked++;
  } else if (event.target.id === 'img3'){
    var targetProd = allObjects[lastImgsArr[2]];
    clickedProducts.push(targetProd);
    targetProd.timesClicked++;
  }
  if (totalClicks === 3) {
    var img1Target = document.getElementById('img1');
    var img2Target = document.getElementById('img2');
    var img3Target = document.getElementById('img3');
    img1Target.removeEventListener('click', eventListen);
    img2Target.removeEventListener('click', eventListen);
    img3Target.removeEventListener('click', eventListen);
    data();
    showResults();
  }
  newImgObj();
};

var chartLabels = [];
var chartClicked = [];
var chartShown = [];

function data() {
  for (var i = 0; i < allObjects.length; i++) {
    if (allObjects[i].timesClicked > 0) {
      chartLabels.push(allObjects[i].imgName);
      chartClicked.push(allObjects[i].timesClicked);
      chartShown.push(allObjects[i].timesShown);
    }
  }
};

function showResults() {
  var context = document.getElementById('chart').getContext('2d');
  var chartConfig = {
    type: 'bar',
    data: {
      labels: chartLabels,
      datasets: [{
        label: '# of Votes',
        data: chartClicked,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      animation: {
        duration: 5000,
      },
      title: {
        text: 'Product Click Frequency'
      },
      // maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  };
  var myChart = new Chart(context, chartConfig);
}
