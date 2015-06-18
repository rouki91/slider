
var buttonnext = document.getElementById("next");
var buttonprevious = document.getElementById("previous");
var img = document.getElementById("image");
var figcaption = document.getElementById("number");

var timer;

var currentImg=0;

var tabImg=[
"images/1.jpg",
"images/2.jpg",
"images/3.jpg",
"images/4.jpg",
"images/5.jpg",
"images/6.jpg"
];

console.log(tabImg);
/*
for (var i=0;i<tabImg.length;i++)
{
	var addimage = tabImg[i];
}
*/

img.setAttribute('src',tabImg[currentImg]);

/***********BOUTTONS**************/

buttonprevious.addEventListener("click",function()
{
	if (currentImg>0)
	{
		currentImg--
		img.setAttribute('src',tabImg[currentImg]);
		img.setAttribute('title',tabImg[currentImg]);
		figcaption.innerHTML = 'image ' + (currentImg+1) + ' / ' + (tabImg.length);
	}
	else
	{
		alert("Vous êtes sur la première image.");
	}
});

buttonnext.addEventListener("click",function()
{
	if (currentImg>=5)
	{
		alert("Vous êtes sur la dernière image.");
	}
	else
	{
		currentImg++
		img.setAttribute('src',tabImg[currentImg]);
		img.setAttribute('title',tabImg[currentImg]);
		figcaption.innerHTML = 'image ' + (currentImg+1) + ' / ' + (tabImg.length);
	}
});
/*
figcaption.style.display='none';
img.addEventListener("click",function()
{
	figcaption.style.display='initial';
})*/

img.addEventListener("click",function()
{
	figcaption.classList.toggle('hide');
});

var buttonfirst = document.getElementById("first");

buttonfirst.addEventListener("click",function()
{
	if (currentImg==0)
	{
		alert("Vous êtes déjà sur la première image.");	
	}
	else
	{
		currentImg=0;
		img.setAttribute('src',tabImg[currentImg]);
		img.setAttribute('title',tabImg[currentImg]);
		figcaption.innerHTML = 'image ' + (currentImg+1) + ' / ' + (tabImg.length);
	}
});

var buttonlast = document.getElementById("last");

buttonlast.addEventListener("click",function()
{
	if (currentImg==5)
	{
		alert("Vous êtes déjà sur la dernière image.");	
	}
	else
	{
		currentImg=5;
		img.setAttribute('src',tabImg[currentImg]);
		img.setAttribute('title',tabImg[currentImg]);
		figcaption.innerHTML = 'image ' + (currentImg+1) + ' / ' + (tabImg.length);
	}
});
/*
var iMin=tabImg[0];
var iMax=tabImg.length;
*/
function getRandomInteger(iMin, iMax) {

	return Math.round(Math.random() * (iMax - iMin)) + iMin;
}

var randombutton = document.getElementById("random");

randombutton.addEventListener("click",function()
{
	currentImg = getRandomInteger(0,tabImg.length-1);
	console.log(currentImg);
	img.setAttribute('src',tabImg[currentImg]);
	img.setAttribute('title',tabImg[currentImg]);
	figcaption.innerHTML = 'image ' + (currentImg+1) + ' / ' + (tabImg.length);
});


function autointerval() {

	if (currentImg>=5)
	{
		alert("Vous êtes sur la dernière image.");
	}
	else
	{
		currentImg++
		img.setAttributelocalhost/phpmyadmin('src',tabImg[currentImg]);
		img.setAttribute('title',tabImg[currentImg]);
		figcaption.innerHTML = 'image ' + (currentImg+1) + ' / ' + (tabImg.length);
	};
}

var autoplay = document.getElementById("play");

autoplay.addEventListener("click",function()
{
	timer = setInterval(autointerval, 3000);
});

var stopplay = document.getElementById("stop");

stopplay.addEventListener("click",function()
{
	clearInterval(timer);
});








/*
#body.addEventListener("click",function()
{
	figcaption.style.display='none';
})
*/
/***********EVENEMENT CLIC SUR UN HREF********/
/*
document.querySelector("#link").addEventListener("click",function()
{
	event.preventDefault();
	console.log('test');

});*/
/*
document.querySelector("img").style.position = 'relative';
document.querySelector("#previous").style.position = 'absolute';
document.querySelector("#previous").style.top = '66%';
document.querySelector("#previous").style.left = '0';
document.querySelector("#previous").style.zIndex = '5000';
document.querySelector("#next").style.position = 'absolute';
document.querySelector("#next").style.top = '66%';
document.querySelector("#next").style.right = '0';
document.querySelector("#next").style.zIndex = '5000';
document.querySelector("#first").style.position = 'absolute';
document.querySelector("#first").style.top = '70%';
document.querySelector("#first").style.left = '0';
document.querySelector("#first").style.zIndex = '5000';
document.querySelector("#last").style.position = 'absolute';
document.querySelector("#last").style.top = '70%';
document.querySelector("#last").style.right = '0';
document.querySelector("#last").style.zIndex = '5000';
document.querySelector("#random").style.position = 'absolute';
document.querySelector("#random").style.top = '70%';
document.querySelector("#random").style.right = '50%';
document.querySelector("#random").style.zIndex = '5000';
document.querySelector("#play").style.position = 'absolute';
document.querySelector("#play").style.top = '78%';
document.querySelector("#play").style.left = '0';
document.querySelector("#play").style.zIndex = '5000';
document.querySelector("#stop").style.position = 'absolute';
document.querySelector("#stop").style.top = '81%';
document.querySelector("#stop").style.left = '0';
document.querySelector("#stop").style.zIndex = '5000';*/






