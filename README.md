# Bus Mall Project
## Chelsea Dole, Code 201 (Code Fellows)

This project is designed for the use of market research teams. It presents the user with 3 randomly-generated product images (which don't repeat within 2 rounds), and records the user's preferences as they click to choose favorite products in 25 rounds.

It is built using JavaScript, HTML, and CSS.

* "NewImg" --> constructor function object

* "createObjs()" --> for loop that creates many NewImg objects, each representing a different product.

* "newImgObj" --> randomly generates three pictures, uses DOM commands to insert into HTML. Creates event listener.

* "eventListen" --> increments timesClicked++, and removes event listener when clicks are at max.

* "showResults" --> shows results of study (in timesClicked per object) as a list.
