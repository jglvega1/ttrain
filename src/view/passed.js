function buildPassed (c, status) {
	let dom = document.createElement('div');
	let content = document.createElement('h6');
	content.innerHTML = c;
	dom.appendChild(content)
	dom.classList.add(status);
	let passed = document.getElementById('passed');
	if(passed.childNodes.length >= 3){
		passed.removeChild(passed.firstChild)
	}
	passed.appendChild(dom)
}