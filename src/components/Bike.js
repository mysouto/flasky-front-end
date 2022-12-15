import PropTypes from "prop-types";

import "./Bike.css";

function Bike(props) {
	const bikeName = props.name;
	const bikeId = props.id;
	const bikeSize = props.size;
	const bikeType = props.type;
	// creating state variable
	const bikePrice = props.price;
	// add new function prop
	const updatePrice = props.updatePrice;

	function changeBikePrice(inc) {
		// if increment is 'true', add 1
		if (inc) {
			updatePrice(bikeId, bikePrice + 1);
			// bikePrice += 1 doesn't work
			// can't directly modify -> need to set setBikePrice useState function
		} else {
			// if inc passed in is 'false', subtract 1
			updatePrice(bikeId, bikePrice - 1);
		}
	}

	// change price color
	function getColorFromPrice(price) {
		let myBudget = 100;
		if (price <= myBudget) {
			return "green";
		} else {
			return "red";
		}
	}

	return (
		<div>
			<h2 className="bike__name">{bikeName}</h2>
			<ul>
				<li>ID: {bikeId}</li>
				<li>Size: {bikeSize}</li>
				<li>Type: {bikeType}</li>
				<li>
					Price:{" "}
					<span style={{ color: getColorFromPrice(bikePrice) }}>
						${bikePrice}
					</span>
				</li>
			</ul>

			<button
				onClick={() => {
					changeBikePrice(true);
				}}
			>
				Increase Price
			</button>
			<button
				onClick={() => {
					changeBikePrice(false);
				}}
			>
				Decrease Price
			</button>
		</div>
	);
}

Bike.propTypes = {
	id: PropTypes.number.isRequired,
	// add function prop
	updatePrice: PropTypes.func.isRequired,
};

export default Bike;
