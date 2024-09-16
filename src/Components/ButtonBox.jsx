import PropTypes from "prop-types";

const ButtonBox = ({ children }) => {
	return (
		<div className="buttonBox flex gap-2 flex-wrap justify-center">
			{children}
		</div>
	);
};

export default ButtonBox;

ButtonBox.propTypes = {
	children: PropTypes.any.isRequired,
};
