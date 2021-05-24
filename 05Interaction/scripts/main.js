
var rotationSpeed = 0.001;
var mySelfmadeBox = document.getElementById('mySelfmadeBox');

function spin(){
	mySelfmadeBox.object3D.rotation.x += rotationSpeed;
	mySelfmadeBox.object3D.rotation.y += rotationSpeed;
	mySelfmadeBox.object3D.rotation.z += rotationSpeed/2;
	//console.log(myOtherBox.object3D.rotation);
}

setInterval(spin, 16);


mySelfmadeBox.addEventListener('mouseenter', function(){
	rotationSpeed = 0.01;
	console.log('mouse enter');
});
