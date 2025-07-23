import { ReactNode } from 'react';

type HeaderToolItemProps = {
	imgSrc: ReactNode;
	text: string;
	isSemibold?: boolean;
};

const HeaderToolItem = (props: HeaderToolItemProps) => {
	const { imgSrc, text, isSemibold = false } = props;
	return (
		<div className="flex gap-2 items-center">
			{imgSrc}
			<span className={`text-base ${isSemibold ? 'font-semibold' : 'font-[400]'}`}>{text}</span>
		</div>
	);
};

export default HeaderToolItem;
