import PropTypes from "prop-types";

const Wrapper = ({ children }) => {
	return (
		<div className="wrapper rounded-lg shadow-lg bg-gray-100 w-1/4 mx-auto mt-32 p-6">
			{children}
		</div>
	);
};

export default Wrapper;

Wrapper.propTypes = {
	children: PropTypes.any.isRequired,
};
