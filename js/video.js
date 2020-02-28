var video;

function getVid(){
	video = document.querySelector("#myVideo"); 

	let play = document.getElementsByClassName("play")[0];
	//play.innerHTML = '<img src="images/play.png" />';
	let img = document.createElement("img");
	img.src = "./images/play.png";
	img.type = "image";
	img.alt = "Thumbs up image to play"
	//let src = document.getElementsByClassName("play");
	play.appendChild(img);

	let pause = document.getElementsByClassName("pause")[0];
	let pic = document.createElement("img");
	pic.src = "./images/pause.png";
	pic.type = "image";
	pic.alt = "Thumbs down image to pause"
	pause.appendChild(pic);
	//sources for getting image into button:
	//source 1: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_getelementsbyclassname
	//source 2:https://stackoverflow.com/questions/10135023/add-image-to-button-in-javascript
	//source 3: https://stackoverflow.com/questions/29762060/item-appendchild-is-not-a-function
	//images are my bitmoji
}

function playVid() { 
	video.play(); 
	console.log("Play Video");
	console.logvideo

	
} 

function pauseVid() { 
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() { 
	video.playbackRate *= 0.8;
	console.log("Speed is "+ video.playbackRate);
	
} 

function increaseSpeed() {
	video.playbackRate *= 1.25;
	console.log("Speed is "+ video.playbackRate);
} 

function skipAhead() {
	video.currentTime = video.currentTime + 60;
	if(video.ended){
		video.currentTime = 0;
  		video.play();
	}
	console.log("Current location is "+ video.currentTime);
} 

function mute() { 
  	if (video.muted){
  		document.querySelector("#mute").innerHTML = 'Muted';
  		console.log("Changing to Unmuted");
  		video.muted = false;

  	}
  	else{
  		document.querySelector("#mute").innerHTML = 'Unmuted';
      	console.log("Changing to Muted");
      	video.muted = true;
  	}
}

function changeVolume() {
	video.volume = document.querySelector("#volumeSlider").value * 0.01;
	let vol = document.querySelector("#volume")
	vol.innerHTML = video.volume *100 + "%";
	console.log("Volume is " + video.volume);
}
       

function gray() { 
	document.querySelector("#myVideo").setAttribute ("class", "grayscale")
	console.log("In grayscale")
}

function color() {
	document.querySelector("#myVideo").style.filter = "grayscale(0%)";
	console.log("In color") 
}
