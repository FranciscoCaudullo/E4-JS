const inputTT = document.getElementById("input");
const form = document.getElementById("form");
const nameTT = document.getElementById("nameContainer");
const typeTT = document.getElementById("typeContainer");
const weightTT = document.getElementById("weightContainer");
const heightTT = document.getElementById("heightContainer");
const imageTT = document.getElementById("imagePokemon");

const requestPokemon = async (pokemon) => {
	if (!pokemon) {
		alert("Debes ingresar un numero");
	}

	const call = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon);
	const data = await call.json();

	nameTT.innerHTML = `${data.name}`;
	typeTT.innerHTML = `Tipo = ${data.types[0].type.name}`;
	weightTT.innerHTML = `Peso = ${data.weight / 10} KG`;
	heightTT.innerHTML = `Altura = ${data.height / 10} metros`;
	imageTT.innerHTML = `<img src="${data.sprites.front_default}" alt=""> `;
	console.log(data);
	return data;
};
const init = () => {
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		requestPokemon(inputTT.value.trim());
		inputTT.value = "";
	});
};

init();

// nombre , tipo, altura, peso, imagen
