function Product (name, path, id) {
  this.name = name;
  this.path = path;
  this.votes = 0;
  this.id = id;
  this.displayed = 0;
  productList.push(this);
}

var productList = [];
var lastThree = [];

var names = []; // filled with all names
var ids = []; // filled with ALL ids
var images = []; // filled with all images
//
// var bag = new Product ('bag', 'img/ba g.jpg', 'bag');

for (var i = 0; i < images.length; i++) {
  new Product(names[i], images[i], ids[i]);
}

function renderThree() {
  var imgOne = document.getElementById('one');
  var firstImg = imgOne.children[0];
}


function renderThree () {
  var imgOne = document.getElementById('one');
  imgOne.innerHTML = ' ';
  var firstImg = document.createElement('img');
  var randomOne = Math.floor(Math.random() * productList.length);
  while (lastThree.includes(randomOne)) {
    randomOne = Math.floor(Math.random() * productList.length);
  }
  firstImg.src = productList[randomOne].path;
  imgOne.appendChild(firstImg);
  firstImg.id = productList[randomOne].id;

  var imgTwo = document.getElementById('two');
  imgTwo.innerHTML = ' ';
  var secondImg = document.createElement('img');
  var randomTwo = Math.floor(Math.random() * productList.length);
  while (randomOne === randomTwo || lastThree.includes(randomTwo)) {
    randomTwo = Math.floor(Math.random() * productList.length);
  }
  secondImg.src = productList[randomTwo].path;
  imgThree.appendChild(secondImg);
  secondImg.id = productList[randomTwo].id;

  var imgThree = document.getElementById('three');
  imgThree.innerHTML = ' ';
  var thirdImg = document.createElement('img');
  var randomThree = Math.floor(Math.random() * productList.length);
  while (randomThree === randomTwo || lastThree.includes(randomThree)) {
    randomThree = Math.floor(Math.random() * productList.length);
  }
  thirdImg.src = productList[randomThree].path;
  imgTwo.appendChild(thirdImg);
  thirdImg.id = productList[randomThree].id;

  lastThree = [];
  lastThree.push(randomOne, randomTwo, randomThree);
  productList[randomOne].displayed += 1;
  productList[randomTwo].displayed += 1;
  productList[randomThree].displayed += 1;
};

renderThree();

var oneClick = document.getElementById('one');
oneClick.addEventListener('click', vote);

var twoClick = document.getElementById('two');
twoClick.addEventListener('click', vote);

var threeClick = document.getElementById('three');
threeClick.addEventListener('click', vote);

var voteCounter = 0;

function vote(event) {
  for (var i = 0; i < productList.length; i++) {
    if (productList[i].id === event.target.id && voteCounter < maxClicks) {
      productList[i].votes++;
      voteCounter++;
      renderThree();
    } else if (voteCounter === maxClicks) {
      oneClick.removeEventListener('click', vote, true);
      twoClick.removeEventListener('click', vote, true);
      threeClick.removeEventListener('click', vote, true);
      var result = document.getElementById('result');
      var theList = document.createElement('ul');
      result.appendChild(theList);
      for (var z = 0; z < productList.length; z++) {
        var list = document.createElement('li');
        list.innerHTML = productList[z].votes + ' votes for the ' + productList[z].name + '.';
        theList.appendChild(list);
      }
      break;
    }
  }
}
