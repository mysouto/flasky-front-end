import PropTypes from "prop-types";

import "./Bike.css";

function Bike( { id, name, size, type, price } ){
	// creating variables for each Bike attribute
    const bikeName = name;
    const bikeId = id;
    const bikeSize = size;
    const bikeType = type;
    const bikePrice = price;
    
// another syntax - using props.
// function Bike(props) {
    // const bikeName = props.name;
    // const bikeId = props.id;
    // const bikeSize = props.size;
    // const bikeType = props.type;
    // const bikePrice = props.price;

	return (
		<div>
			<h2 className="bike__name">{bikeName}</h2>
			<ul>
				<li>{bikeId}</li>
				<li>{bikeSize}</li>
				<li>{bikeType}</li>
				<li>{bikePrice}</li>
			</ul>
		</div>
	);
}

Bike.propTypes = {
	id: PropTypes.number.isRequired,
};

export default Bike;
