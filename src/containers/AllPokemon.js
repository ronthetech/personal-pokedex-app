import React, { useEffect, useState } from "react";
import PokeEntry from "../components/PokeEntry";
import { getPokemons, getMorePokemons } from "../services/pokemons";

import "../App.css";

const AllPokemon = () => {
	const [pokemons, setPokemons] = useState([]);
	const [count, setCount] = useState(1);

	useEffect(() => {
		getPokemons().then((data) => {
			setPokemons(data);
		});
	}, []);

	const morePokemon = () => {
		getMorePokemons(count + 19).then((data) => {
			setPokemons(data);
			setCount((prevCount) => {
				return prevCount + 20;
			});
		});
	};

	const lessPokemon = () => {
		getMorePokemons(count - 21).then((data) => {
			setPokemons(data);
			setCount((prevCount) => {
				return prevCount - 20;
			});
		});
	};

	//console.log(Object.entries(pokemons)[3] && Object.entries(pokemons)[3][1]);
	return (
		<div className='entries'>
			{pokemons["results"] &&
				pokemons["results"].map((pokemon, index) => {
					return <PokeEntry key={index} {...pokemon} id={index + 1} />;
				})}
		</div>
	);
};

export default AllPokemon;

/* <div className='entries'>
			{Object.entries(pokemons)[3] &&
				Object.entries(pokemons)[3][1].map((pokemon, index) => {
					return <PokeEntry key={index} {...pokemon} id={index + 1} />;
				})}
		</div> */
