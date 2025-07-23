import React from 'react';
import { categories } from '../../../mock/category';
import CategoryListItem from './CategoryListItem';
import SubCategory from './SubCategory';
import { MainCategory } from '../../../types/Category';
import { getCategories } from '../../../mock/API';
type CategoryListProps = {
	isHovered: boolean;
};

const CategoryList = (props: CategoryListProps) => {
	const { isHovered } = props;
	const [selectItem, setSelect] = React.useState<MainCategory | null>(null);
	const [categories, setCategories] = React.useState<MainCategory[] | []>([]);

	React.useEffect(() => {
		const getData = async () => {
			const cates = await getCategories();
			setCategories(cates);
		};
		getData();
	}, []);

	return (
		<div
			className={`
          z-40 absolute top-full left-0 w-[70vw] h-[42rem] shadow-lg bg-white bg-opacity-80 flex justify-center text-lg font-bold
          transition-all duration-300 ease-in-out hover:cursor-pointer
          ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}
        `}
			onMouseLeave={() => setSelect(categories[0])}
		>
			<div className="flex-1 flex flex-col gap-2">
				{categories.map((cate) => (
					<div
						key={cate.id}
						onMouseEnter={() => setSelect(cate)}
						className={`relative bg-transparent z-10 ${
							selectItem?.id === cate.id
								? "before:content-[''] before:absolute before:top-0 before:left-0 before:w-1 before:h-full before:z-20 before:bg-promotion-blue-start  after:content-[''] after:absolute after:top-0 after:left-0 after:z-0 after:w-full after:h-full after:bg-category-bg"
								: ''
						}`}
					>
						<CategoryListItem category={cate} />
					</div>
				))}
			</div>
			<div className="flex-3 bg-category-bg">
				<SubCategory category={selectItem} />
			</div>
		</div>
	);
};

export default CategoryList;
