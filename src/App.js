import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import Navbar from "./components/Navbar";
import BikeList from "./components/BikeList.js";
import NewBikeForm from "./components/NewBikeForm";

function App() {
	const [bikesList, setBikesList] = useState([]);

	// API lesson
	// -- add path to API
	const URL = "http://127.0.0.1:5000/bike";

	const fetchAllBikes = () => {
		axios
			.get(URL)
			.then((response) => {
				// console.log(response);
				const bikesAPIResCopy = response.data.map((bike) => {
					return {
						id: bike.id,
						name: bike.name,
						price: bike.price,
						size: bike.size,
						type: bike.type,
					};
				});
				setBikesList(bikesAPIResCopy);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(fetchAllBikes, []); // initial get request

	// this functions updatesPrices with 2 args: id and new price
	// GOAL: update bikesList array
	// -- need to create a new array
	// -- can't mutate arrays in React
	const updatePrice = (bikeId, newPrice) => {
		// print to check if function is working
		console.log("updatePrice called");

		const newBikesList = [];

		// BACKEND - flask server
		// add URL made in backend PATCH route definition
		axios
			.patch(`${URL}/${bikeId}/${newPrice}`)
			.then(() => {
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
			})
			.catch((err) => {
				console.log(err);
			});
	};

	// add new delete function
	const deleteBike = (bikeId) => {
		console.log("deleteBike Called");

		// API changes - add axios
		axios
			// mirror path from backend code (Flasky)
			.delete(`${URL}/${bikeId}`)
			.then(() => {
				const newBikesList = [];
				for (const bike of bikesList) {
					if (bike.id !== bikeId) {
						newBikesList.push(bike);
					}
				}
				setBikesList(newBikesList);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	// single source of truth - add API function where (use state) setter is
	const addBike = (newBikeInfo) => {
		console.log("Calling addBike");
		// add axios.post request here
		axios
			.post(URL, newBikeInfo)
			// handling .then to update frontend, update state variable with setBikesList()
			.then((response) => {
				// method 1 - use helper for get request
				// fetchAllBikes(); // This helper function will make a .get() call to fetch all bikes and update the state variable to display them

				// method 2
				//this method does not require a .get request; we are pushing the bike data to the bikes list and using the setter to trigger a rerender
				const newBikes = [...bikesList];
				const newBikeJSON = {
					...newBikeInfo,
					id: response.data.id,
				};
				newBikes.push(newBikeJSON);
				setBikesList(newBikes);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div>
			<Navbar />
			{/* send bikesList to bikesList component as a prop */}
			<BikeList
				bikesList={bikesList}
				updatePrice={updatePrice}
				deleteBike={deleteBike}
			/>

			{/* <button>Add Bike</button> */}
			<NewBikeForm addBikeCallBackFunc={addBike} />
		</div>
	);
}

export default App;
