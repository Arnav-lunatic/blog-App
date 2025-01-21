import { forwardRef } from "react";

interface Props {
	options: string[];
	className?: string;
	label?: string;
}

const SelectOptions = forwardRef<HTMLSelectElement, Props>(
	({ options, className = "", label, ...props }, ref) => {
		return (
			<div className="w-full">
				{label && <label className="block mb-2 text-sm font-medium">{label}</label>}
				<select
					{...props}
					ref={ref}
					className={`px-3 py-2 rounded-lg bg-white text-black 
					outline-none focus:bg-gray-50 duration-200 
					border border-gray-200 w-full ${className}`}
				>
					{options.map((option) => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</select>
			</div>
		);
	}
);

export default SelectOptions;
