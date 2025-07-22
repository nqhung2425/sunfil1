import React from 'react';

type SectionProps = {
	title: string;
	open: boolean;
	onToggle: () => void;
	children: React.ReactNode;
};

const Section = (props: SectionProps) => {
	const { title, open, onToggle, children } = props;

	return (
		<div>
			<button
				onClick={onToggle}
				className="flex justify-between items-center w-full font-semibold text-xl text-gray-700 group"
			>
				<span>{title}</span>
				<img
					src="/icons/down_black.svg"
					alt="down_black"
					className={`w-5 h-5 ml-2 transform transition-transform duration-300 ${
						open ? 'rotate-180' : 'rotate-0'
					}`}
				/>
			</button>

			{open && <div className="mt-2">{children}</div>}
		</div>
	);
};

export default Section;
