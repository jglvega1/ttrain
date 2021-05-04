import Model from './model/model.js';
import View from './view/view.js';
import Events from './controller/events.js'

let model = new Model();
window.model = model
console.log(model)


let view = new View();
window.view = view;
console.log(view)

Events();



let lt = 0;
function gameLoop (ts) {
	let dt = ts - lt;
	lt = ts;
	if(model.getStatus()){
		model.update();
		//draw
		view.draw();
	}
	requestAnimationFrame(gameLoop)
}
document.getElementById('btn-status').addEventListener('click', function(e){
	document.getElementById('btn-status-text').innerHTML = "Waiting for quote";
	window.model.run()
})
requestAnimationFrame(gameLoop)