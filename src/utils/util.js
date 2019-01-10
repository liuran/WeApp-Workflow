
require('breathing-halftone.pkgd.js')


function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

var activeName;
var demoOptions =  {
	dotSizeThreshold: 0.1,
		isAdditive: true,
		isRadial: true,
		friction: 0.04,
		hoverDiameter: 0.8,
		hoverForce: 0.007,
		activeDiameter: 0.8,
		activeForce: -0.007
}


function initHalftone( name ) {
	// do not re-init
	if ( name === activeName ) {
		return;
	}

	// stop previous halftone
	if ( halftone ) {
		halftone.destroy();
	}

	var demo = document.querySelector( '.demo.' + name );
	demo.style.display = 'block';
	var img = demo.querySelector('img');
	halftone = new BreathingHalftone( img, demoOptions );
	window.halftone = halftone;
	activeName = name;
}


module.exports = {
  	formatTime: formatTime,
	initHalftone: initHalftone
}
