//calling API

const pokemonContainer = document.getElementById("pokemon");

const API_URL = "https://pokeapi.co/api/v2/pokemon/"; // this is the endpoint we call

//fetch method to call API

const getPokemonData = async () =>{ //async use to not work 1 way only top to bottom
    const response = await fetch(API_URL);
    const data = await response.json();// forcing Js to wait for an action to be done
    const pokemonName = data.results[0].name;
    pokemonContainer.textContent = pokemonName;
    console.log(data); // convert response into object
    console.log(pokemonName);

};

getPokemonData()
