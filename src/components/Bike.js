import PropTypes from "prop-types";
import { useState } from "react";

import "./Bike.css";

// function Bike( { id, name, size, type, price } ){
// creating variables for each Bike attribute
// const bikeName = name;
// const bikeId = id;
// const bikeSize = size;
// const bikeType = type;
// const bikePrice = price;

// another syntax - using props.
function Bike(props) {
	const bikeName = props.name;
	const bikeId = props.id;
	const bikeSize = props.size;
	const bikeType = props.type;
	// creating state variable
	const [bikePrice, setBikePrice] = useState(props.price);

	// create event handler
	function increaseBikePrice() {
		let newBikePrice = bikePrice + 1;
		setBikePrice(newBikePrice);
	}
	// Don’t try to read the state variable right after calling the setState function. It will have the OLD value.
	// console.log(bikePrice);

	const decreaseBikePrice = () => {
		let newBikePrice = bikePrice - 1;
		setBikePrice(newBikePrice);
	};

	// combining update price functions
	function updatePrice(inc) {
		// if arg passed in is 'true', add 1
		if (inc) {
			setBikePrice(bikePrice + 1);
		} else {
			// if arg passed in is 'false', subtract 1
			setBikePrice(bikePrice - 1);
		}
	}

	return (
		<div>
			<h2 className="bike__name">{bikeName}</h2>
			<ul>
				<li>{bikeId}</li>
				<li>{bikeSize}</li>
				<li>{bikeType}</li>
				<li>${bikePrice}</li>
			</ul>

			{/* create buttons */}
			{/* <button onClick={increaseBikePrice}>Increase Price</button>
			<button onClick={decreaseBikePrice}>Decrease Price</button> */}

			<button
				onClick={() => {
					updatePrice(true);
				}}
			>
				Increase Price
			</button>
			<button
				onClick={() => {
					updatePrice(true);
				}}
			>
				Decrease Price
			</button>
		</div>
	);
}

Bike.propTypes = {
	id: PropTypes.number.isRequired,
};

export default Bike;
