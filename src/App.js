import "./App.css";
import Navbar from "./components/Navbar";
import BikeList from "./components/BikeList.js";
import { useState } from "react";

// data will typically come from an API
// hardcoded below
const INITIAL_BIKES = [
	{
		id: 1,
		name: "Cool",
		size: 50,
		price: 100,
		type: "special",
	},
	{
		id: 2,
		name: "Nice",
		size: 40,
		price: 20,
		type: "duplicate",
	},
	{
		id: 3,
		name: "New Bike",
		size: 80,
		price: 100,
		type: "unique",
	},
];

function App() {
	// 1. make a deep copy of initial data
	const initialCopy = INITIAL_BIKES.map((bike) => {
		return { ...bike };
	});

	// WHERE DATA NEEDS TO CHANGE: bikesList
	// 2. create state
	const [bikesList, setBikesList] = useState(initialCopy);

	// 3. define callback functions to move logic here

	// this functions updatesPrices with 2 args: id and new price
	// GOAL: update bikesList array
	// -- need to create a new array
	// -- can't mutate arrays in React
	const updatePrice = (bikeId, newPrice) => {
		// print to check if function is working
		console.log("updatePrice called");

		const newBikesList = [];
		for (const bike of bikesList) {
			// condition: doens't match input bikeId
			if (bike.id !== bikeId) {
				// add bike without changing any properties of original bike component
				newBikesList.push(bike);
			} else {
				// if match found, update Price property and keep all other properties the same
				const newBike = {
					// ... spread operator keeps all properties the same, copies things as they were
					...bike,
					// changing the price here
					price: newPrice,
				};
				newBikesList.push(newBike);
			}
		}

		// change bikesList with setBikesList
		// change state with new list
		// NEED TO USE SET FUNCTION AND USE NEW ARRAY TO UPDATE STATE TO USE NEW LIST
		setBikesList(newBikesList);
	};

	// add new delete function
	const deleteBike = (bikeId) => {};

	return (
		<div>
			<Navbar />

			{/* send bikesList to bikesList component as a prop */}
			{/* passing in JS expression */}
			<BikeList bikesList={bikesList} updatePrice={updatePrice} />

			<button>Add Bike</button>

			<button onClick={() => deleteBike(bikeId)}>Delete</button>
		</div>
	);
}

export default App;
