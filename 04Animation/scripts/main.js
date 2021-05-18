

// changing individual properties with code and using setInterval
var rotationSpeedX = 0.01;
var rotationSpeedY = 0.03;
var rotationSpeedZ = 0.05;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
	myOtherBox.object3D.rotation.x -= rotationSpeedX;
	myOtherBox.object3D.rotation.y -= rotationSpeedY;
	myOtherBox.object3D.rotation.z -= rotationSpeedZ;
	console.log(myOtherBox.object3D.rotation.x, myOtherBox.object3D.rotation.y, myOtherBox.object3D.rotation.z);
}

setInterval(spin, 16); //equivalent to 60 fps