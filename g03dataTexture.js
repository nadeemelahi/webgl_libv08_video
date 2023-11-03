// author: "nadeem@webscripts.biz

var halfFSquad = data.getFullscreenQuad();
// scale down
for(var idx = 0; idx < 12; idx++){ 
	halfFSquad[idx] *= 0.025; 
}

// origin bottom left
var dataTextureQuad = [  
	0, 0  ,  1, 0 ,   1, 1,
	0, 0  ,  1, 1 ,   0, 1
];

// must be multiple of 2,4,8,16
var pixels = [
	255 , 0   , 0   , 255 , // red
	0   , 255 , 0   , 255 , // green
	0   , 0   , 255 , 255 , // blue
	255 , 255 , 0   , 255 , // yellow
];
