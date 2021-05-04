function checkKey (e, target) {
	let result = false;
	if ("key" in e) {
		result = e.key.toLowerCase() === target
	} else {
		result = e.keyCode === target.charCodeAt() || e.keyCode.toUpperCase === target.charCodeAt()
	}
	return result
}


function isSpace(e){
	return checkKey(e, " ");
}

async function events (e) {
	/*
	e = e || window.event;
	if (qouteObj) {
		let target = document.getElementById('currentChar').innerHTML;
		if (checkKey(e, target.toLowerCase())) {
			score++;
			charIndex += 1;
			buildPassed(target, "succes");
			buildForehead(charIndex);
			removeForehead()
		} else{
			fails++;
			charIndex += 1;
			buildPassed(target, "failed");
			buildForehead(charIndex);
		}
	}
	*/
	e = e || window.e;
	if(isSpace(e)){
		if (!model.getStatus()) {
			model.run();
		} else{
			model.push(checkKey(e, model.getChar()));
		} 
		e.preventDefault();
	} else if (model.getStatus()) {
		if (checkKey(e,"Escape")) model.stop();
		model.push(checkKey(e, model.getChar()));
	}
}

export default function init (){
	document.onkeydown = events
}