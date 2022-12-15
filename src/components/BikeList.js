// organizing imports, put external libraries at the top
import PropTypes from "prop-types";

import Bike from "./Bike";

// app is sending props to BikeList
// function BikeList({ bikesList }) {
function BikeList(props) {
	const bikesList = props.bikesList;
	const updatePrice = props.updatePrice;
	const deleteBike = props.deleteBike;

	const bikeComponents = [];

	// using data from bikeList to create new components
	for (const bike of bikesList) {
		bikeComponents.push(
			// tag with info passed in from props
			// create a Bike component with certain properties
			<Bike
				key={bike.id}
				id={bike.id}
				name={bike.name}
				size={bike.size}
				price={bike.price}
				type={bike.type}
				// add new prop: callback function to each Bike component
				updatePrice={updatePrice}
				// not same as bike.price
				deleteBike={deleteBike}
			/>
		);
	}

	// bikeComponents sent back to App
	return <div>{bikeComponents}</div>;

	//returns [<Bike/>, <Bike/>]
}

// create prop types
BikeList.propTypes = {
	// bikesList: PropTypes.array.isRequired,
	bikesList: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			size: PropTypes.number.isRequired,
			type: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
		})
	),
	// updatePrice functions is required
	updatePrice: PropTypes.func.isRequired,
	deleteBike: PropTypes.func.isRequired,
};

export default BikeList;
