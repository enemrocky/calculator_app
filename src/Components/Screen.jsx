import { useContext } from "react";
import { CalculatorContext } from "../Context/CalculatorContext";

const Screen = () => {
	const { calc } = useContext(CalculatorContext);

	return (
		<div
			className="text-end w-[280px] mx-auto text-2xl bg-gray-50 px-2 py-4 rounded-md overflow-hidden mb-6"
			max={70}
			mode="single">
			{calc.num ? calc.num : calc.res}
		</div>
	);
};

export default Screen;
