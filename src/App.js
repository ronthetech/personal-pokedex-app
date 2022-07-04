import AllPokemon from "./containers/AllPokemon.js";
import "./App.css";

const App = () => {
	return (
		<div className='App'>
			<h2>Personal Pokedex</h2>
			<div>
				<AllPokemon />
			</div>
		</div>
	);
};

export default App;
