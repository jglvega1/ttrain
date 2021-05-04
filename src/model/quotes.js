'use strict';

let animes = [
'Naruto',
'Naruto Shippuuden',
"Avatar: The Last Airbender",
"Tokyo Ghoul √A",
"Noragami",
"No Game No Life",
"One Piece",
"Tokyo Ghoul:re",
"Kimi no Na wa",
"Boku no Hero Academia",
"Nisekoi",
"Kono Subarashii Sekai ni Shukufuku wo!",
"Akame ga KILL!",
"Tokyo Ghoul",
"Shingeki no Kyojin",
"Tower Of God",
"Shingeki no Kyojin: Before the Fall",
"Naruto Shippūden",
"The Last -Naruto the Movie-",
"Porco Rosso",
"Toradora!",
"Monthly Girls' Nozaki-kun",
"Death Note",
"Neon Genesis Evangelion",
"Naruto Shippūden: Kizuna",
"Parasyte -the maxim-",
"One-Punch Man",
"Pokémon",
"Princess Mononoke",
"Summer Wars",
"Golden Time",
"Soul Eater"
]

function syncFetch (url){
	return fetch(url)
		.then(response => response.json())
		.then(function(q){
			return q
		}).catch(e => console.error(e))
}




function getQoute() {
	let i = Math.floor(Math.random() * animes.length);
	let name = animes[i];1
	let url = `https://animechan.vercel.app/api/quotes/anime?title=${name}`;
	let res = syncFetch(url).then(r => r[Math.floor(Math.random() * r.length)])
	return res;
}

export default class Quote {
	constructor () {
		getQoute().then(r => this.quote =  r);
	}
	getVal(){
		return this.quote;
	}
}