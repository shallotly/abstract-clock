let p = true;

function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels
}

function draw() {
	background('white');
	noFill();
	drawbase();

	strokeWeight(18);
	stroke(204,223,162);
	drawArc(hour(),400,1);

	strokeWeight(11);
	stroke(255,192,116);
	drawArc(minute(),350,0);
	//console.log(minute());

	strokeWeight(7);
	stroke(253,212,137);
	drawArc(second(),300,0);

	if(second()==0 && p){
		console.log(minute())
		p = false;
	}

	if(second()==1 && !p){
		p = true;
	}
}

function drawbase(){
	strokeWeight(1);
	stroke(128,128,128);
	arc(400,300,400,400,-HALF_PI,-HALF_PI+TWO_PI-0.01);
	arc(400,300,350,350,-HALF_PI,-HALF_PI+TWO_PI-0.01);
	arc(400,300,300,300,-HALF_PI,-HALF_PI+TWO_PI-0.01);
}

function drawArc(time,d,isHour){
	let a = null;
	const start = -HALF_PI;
	if(isHour){
		time = time % 12;
		if(time == 0){
			circle(400, 300, d);
		} else{
			a = map(time,1,11,1.0/12.0 * TWO_PI,11.0/12.0 * TWO_PI);//(time % 12)/12.0 * TWO_PI;
			arc(400,300,d,d,start,start+a);
		}
	} else {
		if(time == 0) {
			circle(400, 300, d/2.0);
		} else{
			a = map(time,1,59,1.0/60.0 * TWO_PI,59.0/60.0 * TWO_PI);//(time % 60)/60.0 * TWO_PI;
			arc(400,300,d,d,start,start+a);
		}
	}
}
