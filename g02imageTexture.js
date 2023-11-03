
// load image file

var ripples = [];

function loadBackgroundImage(cb){
	for ( var idx = 0 ; idx < 6 ; idx++){
		ripples[idx] = new Image();
		ripples[idx].onload = ldd;
		ripples[idx].src = "./ripple/rippleFrame" + (idx + 1) + ".png";
		// 1,2,...6
	}
	var cnt = 0;
	function ldd(){
		cnt++;
		if ( cnt == 6 ) cb();
	}
}


// fullscreen quad for background image
var fsQuad = data.getFullscreenQuad();

// full width/height of an image
// origin(0,0) top left
var fsTexQuad  = [
	0 , 1 , // bottom left
	1 , 1 , // bottom right
	1 , 0 , // top right

	0 , 1 , // bottom left
	1 , 0 , // top right
	0 , 0 , // top left
];
