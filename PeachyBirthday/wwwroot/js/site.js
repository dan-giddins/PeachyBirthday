document.addEventListener('DOMContentLoaded', function () {
	new CircleType(document.getElementById('top-text'))
		.radius(1000);
	new CircleType(document.getElementById('bottom-text'))
		.dir(-1)
		.radius(1000);
}, false);
