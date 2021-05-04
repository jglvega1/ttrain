export default function setQoute(model) {
	let q = model.getQuote();
	if(q){
		let dom = document.getElementById('qoute');
		dom.innerHTML = q.quote;
		dom.innerHTML += "<br/>" + q.character + "-" + q.anime;
		/*
			<button>
				<span>
					<span class="txt">New random quote</span>
				</span>
			</button>
		*/
		let btn = document.createElement('button')
		btn.addEventListener('click', function(){
			model.restart()
			btn.innerHTML = "Waiting for quote";
			btn.classList.add("status-waiting-for-quote")
		})
		let span = document.createElement('span')
		let txt = document.createElement('span')
		txt.innerHTML = "New random quote"
		txt.classList.add('txt',);
		span.appendChild(txt);
		btn.appendChild(span);
		dom.appendChild(btn)
	}
}