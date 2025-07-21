type CategoryListProps = {
	isHovered: boolean;
};

const CategoryList = (props: CategoryListProps) => {
	const { isHovered } = props;
	return (
		<div
			className={`
          absolute top-full left-0 w-10rem h-10rem bg-black bg-opacity-80 text-white flex items-center justify-center text-lg font-bold
          transition-all duration-300 ease-in-out
          ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}
        `}
		>
			Div mới đè lên
		</div>
	);
};

export default CategoryList;
