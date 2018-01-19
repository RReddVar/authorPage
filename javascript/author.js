var imgNum = 1;

function slideBtn(prevNext){

	imgNum = imgNum + 1;

	slideImage(imgNum);
}

slideImage(1);

function slideImage(n) {

	 var images = document.getElementsByClassName("productImages");
	 if(n > images.length) {
	 	imgNum = 1;
	 }
	 if(n < 1) {
	 	imgNum = images.length;
	 }
	 for (var i = 0; i < images.length; i++) {
	 	images[i].style.display = "none";
	 }

	 images[imgNum-1].style.display = "block";
}

// document.getElementById('#goNowhere').addEventListener('click', function (i) {
//     i.preventDefault();
//     doSomething();
// })