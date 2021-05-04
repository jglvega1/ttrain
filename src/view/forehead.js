function buildForehead (j) {
	let forehead = document.getElementById('forehead');
	let i = forehead.childNodes.length + j;
	let dom = document.createElement('div');
	let content = document.createElement('h6');
	content.innerHTML = qouteObj.quote[i];
	dom.appendChild(content)
	forehead.appendChild(dom)
}
function removeForehead () {
	let forehead = document.getElementById('forehead');
	console.log()
	if(forehead.childNodes.length > 2){
		forehead.removeChild(forehead.firstChild)
	}
}