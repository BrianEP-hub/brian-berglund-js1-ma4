// JavaScript Document
const gameURL = "https://api.rawg.io/api/games";

function createGames(response){
	return response.json();
}
function dirJson(json){
	console.dir(json);
}
function logError(error){
	console.log(error);
}


fetch(gameURL)
	.then(createGames)
	.then(dirJson)
	.catch(logError);

function dirJson(json){
	const results = json.results;
	
	results.forEach(function(result){
		console.log(result.name);
	});
	
	const resultsContainer = document.querySelector(".results");
	
	let html = "";
	
	results.forEach(function(result){
		html += `<div class="game">
					<h2>${result.name}</h2>
					<img src="${result.background_image}" alt="${result.name}">
				</div>`
	})
	
	resultsContainer.innerHTML = html;
}