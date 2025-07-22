import { MainCategory } from '../../../types/Category';

type CategoryListItemProps = {
	category: MainCategory;
};

const CategoryListItem = (props: CategoryListItemProps) => {
	const { category } = props;
	return (
		<div className="p-4 flex justify-between items-center relative z-10">
			<div className="flex gap-4 items-center">
				<img src={category.imageUrl} className="w-[2.5rem] h-[2.5rem] bg-cover" />
				<h3 className="font-[500]">{category.name}</h3>
			</div>
			<img src="/icons/Alt Arrow Right.svg" className="w-4 h-4" />
		</div>
	);
};

export default CategoryListItem;
