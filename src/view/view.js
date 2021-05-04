import quote from './quotes.js';

function timmer (v) {
	let  t = model.getTime();
	let mm =  t['m'];
	let m = mm > 0 ? `${mm}:` : "";
	let s = t['s'] >= 10 ? `${t['s']}` : t['s'] > 0 ? mm > 0 ?  "0" + t['s'] : t['s']: mm > 0 ? "00": "0";
	let time = m + s;
	if(v.getTime() != time){
		document.getElementById('time').innerHTML = time;
	}
}

async function setCurrentChar (c) {
	document.getElementById('currentChar').innerHTML = c;
}

async function score () {
	let prev = document.getElementById('score').innerHTML;
	let n = model.getScore();
	if (prev != n) {
		document.getElementById('score').innerHTML = n;
	}
}
async function fails () {
	let prev = document.getElementById('fails').innerHTML;
	let n = model.getFails();
	if (prev != n) {
		document.getElementById('fails').innerHTML = n;
	}
}



function passed () {
	let prev = document.getElementById('passed');
	if(model.queueLenght > 0) {
		if (prev.length >= 3) {
			prev.removeChild(prev.firstChild)
		}
		if (prev.length < 3) {
			let dom = buildPassed();
			prev.appendChild(dom);
		}
	}
}


export default class View{
	constructor(){
		this.prev;
		this.char;
	}
	draw(){
		let q = model.getQuote()
		if(q){
			if(this.prev != q){
				this.prev =  q;
				quote(model)

				if(model.getStatus()){
					document.getElementById('btn-status-text').innerHTML = "Stop";
					document.getElementById('btn-status').replaceWith(document.getElementById('btn-status').cloneNode(true))
					document.getElementById('btn-status').addEventListener('click', function(e){
						document.getElementById('btn-status-text').innerHTML = "Start";
						document.getElementById('btn-status').replaceWith(document.getElementById('btn-status').cloneNode(true))
						document.getElementById('btn-status').addEventListener('click', function(e){
							document.getElementById('btn-status-text').innerHTML = "Waiting for quote";
							window.model.restart()
							window.model.run()
						})
						window.model.stop()
					})
				}
			}
			if (model.getStatus()) {
				timmer(this)
				score();
				fails();
				passed();
			}
			if((this.char || "") != model.getChar()){
				setCurrentChar(model.getChar())
				this.char = model.getChar()
			}
		}
	}
	getTime(){
		return this.prev;
	}
}