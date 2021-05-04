import Quote from './quotes.js';

export default class Model{
	constructor(){
		this.score = 0;
		this.fails = 0;
		this.quote;
		this.charIndex = 0;
		this.runnig = false;
		this.queue = [];
	}
	update(){
		if (this.runnig) {
			if (this.quote == undefined) {
				this.updateQoute();
				this.date = Date.now();
			}
		}
	}
	run(){
		this.runnig = true;
	}
	stop(){
		this.runnig = false;
	}
	getQuote(){
		if(this.quote){
			return this.quote.getVal()
		}
	}
	updateQoute(){
		this.quote = new Quote();
	}
	getTime(){
		let now = Date.now();
		let passed = now - this.date
		let m = Math.floor(passed / (60 * 1000));
		passed -= m * (60*1000)
		let s = Math.floor(passed / 1000);
		return {
			m: m,
			s: s
		}
	}
	getStatus(){
		return this.runnig;
	}
	getChar(){
		let c = this.getQuote().quote[this.charIndex]
		return c
	}
	getScore(){
		return this.score
	}
	getFails(){
		return this.fails
	}
	push(result){
		if (result) {
			this.score++;
		}else{
			this.fails++;
		}
		this.queue.push({char:this.getChar(),result:result});
		this.charIndex++;
		if(this.charIndex >= this.getQuote().quote.length){
			this.stop();
			alert(this.score)
		}
	}
	shift(){
		return this.queue.shift()
	}
	restart(){
		this.score = 0;
		this.fails = 0;
		this.quote;
		this.charIndex = 0;
		this.quote = undefined
	}
}