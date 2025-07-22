import { MainCategory } from '../../../types/Category';
import { bestSellers } from '../../../mock/products';
import TrendingProducts from '../../Products/TrendingProducts';

type SubCategoryProps = {
	category: MainCategory | null;
};

const SubCategory = (props: SubCategoryProps) => {
	const { category } = props;
	return (
		<div className="p-4">
			<div className="sub-cate grid grid-cols-3 gap-4">
				{category?.subcategories?.map((subCate) => {
					return (
						<div key={subCate.id} className="flex gap-4 items-center bg-white rounded-sm shadow p-4">
							<img src={subCate.imageUrl} alt={subCate.name} className="w-[4rem] h-[4rem] bg-cover" />
							<h3 className="font-[500]">{subCate.name}</h3>
						</div>
					);
				})}
			</div>
			{category && category?.subcategories?.length !== 0 && (
				<hr className="my-4 h-[0.1rem] bg-gray-line border-0" />
			)}

			<div className="trending-products">
				<TrendingProducts products={bestSellers} />
			</div>
		</div>
	);
};

export default SubCategory;
