document.getElementByID("myBox");

document.getElementByID("myBox").className += "error"; //adds class to specific ID

window.onLoad = initialize;

function initialize() {
	document.getElementByID("myBox").onCLick = myNavUpdate;
	document.getElementByID("myBox").addEventListener("click", myNavUpdate) //two arguements
	document.getElementByID("myBox").onClick = myNavUpdate;
	document.getElementByID("myBox").addEventListener("click", function() {
		console.log("Meow!")
	});

	window.addEventListener("resize", function() {
		console.window.width; //syntax?
	})
}

$(".myBox").click(function() {
	$(this).animate;
})

$(document).ready(function() {
	app.initialize(); //will call initialize function inside app
})

var app =  {
	data: "example",

	initialize: function() {
		app.myVar = 10;
		$(p).click(function() {
			app.signUpUser; //calls for signUpUser function
		})
	}

	signUpUser: function() {
		app.data;

		var user; //only this function will recognize user
		app.user //all functions in object can recognize user
	}
}

// all pages have the class of page
// all pages have IDs with page number
// data-next-page

// position: absolute of height of device
// from bottom
// sticky footer