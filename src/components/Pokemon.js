import React, { useState, useEffect } from "react";
import { getPokemon } from "../services/pokemon";
import { useLocation } from "react-router-dom";

const Pokemon = () => {
	const location = useLocation();

	const [pokemon, setPokemon] = useState([]);

	useEffect(() => {
		getPokemon(location.pathname).then((data) => {
			setPokemon(data);
		});
	}, [location.pathname]);

	const { id, name, height, weight, base_experience } = pokemon;

	//console.log(pokemon.types && pokemon.types[0].type["name"]);

	return (
		<div className={`pokeEntry pokeEntry--${pokemon.types && pokemon.types[0].type["name"]}`}>
			<div className='pokeEntry__header'>
				<h2 className='pokeEntry__name'>{name}</h2>
				<div className='pokeEntry__stats'>
					{pokemon.stats &&
						pokemon.stats.map((stat, index) => {
							return (
								<p key={index}>
									{stat["stat"]["name"]}:
									<span className='pokeEntry__item'>
										<strong>{stat.base_stat}</strong>
									</span>
								</p>
							);
						})}
				</div>
			</div>
			<div className='pokeEntry__imgContainer'>
				<img
					className='pokeEntry__img'
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
					alt='pokemon-pic'
				/>
			</div>
			<div className='pokeEntry__basics'>
				<span>NO. {id}</span>
				<span>Height: {height}</span>
				<span>Weight: {weight}</span>
				<span>Base XP:{base_experience}</span>
			</div>

			<ul className='pokeEntry__abilities'>
				{pokemon.abilities &&
					pokemon.abilities.map((ability, index) => {
						return (
							<li className='pokeEntry__ability' key={index}>
								{ability["ability"]["name"]}
							</li>
						);
					})}
			</ul>
			<ul className='pokeEntry__types'>
				{pokemon.types &&
					pokemon.types.map((type, index) => {
						return (
							<li className='pokeEntry__type' key={index}>
								{type["type"]["name"]}
							</li>
						);
					})}
			</ul>
		</div>
	);
};

export default Pokemon;
