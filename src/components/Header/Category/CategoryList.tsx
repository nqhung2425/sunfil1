import { categories } from '../../../mock/category';
import CategoryListItem from './CategoryListItem';
type CategoryListProps = {
	isHovered: boolean;
};

const CategoryList = (props: CategoryListProps) => {
	const { isHovered } = props;
	return (
		<div
			className={`
          absolute top-full left-0 w-[80vw] h-10rem shadow-lg bg-white bg-opacity-80 flex items-center justify-center text-lg font-bold
          transition-all duration-300 ease-in-out
          ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}
        `}
		>
			<div className="flex-1 flex flex-col gap-2">
				{categories.map((cate) => (
					<CategoryListItem key={cate.id} category={cate} />
				))}
			</div>
			<div className="flex-3"></div>
		</div>
	);
};

export default CategoryList;
