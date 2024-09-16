import { useContext } from "react";
import { CalculatorContext } from "../Context/CalculatorContext";

const Screen = () => {
	const { calc } = useContext(CalculatorContext);

	return (
		<div
			className="screen w-4/5 mx-auto text-2xl bg-white px-2 py-4 rounded-md overflow-hidden mb-6"
			max={70}
			mode="single">
			{calc.num ? calc.num : calc.res}
		</div>
	);
};

export default Screen;
