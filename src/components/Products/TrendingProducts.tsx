import { Product } from '../../types/Product';
import ProductCard from '../ProductCard';

type TrendingProductsProps = {
	products: Product[] | [];
};

const TrendingProducts = (props: TrendingProductsProps) => {
	const { products } = props;
	return (
		<div className="p-4 rounded">
			<div className="flex justify-between items-center mb-4">
				<h2 className="text-lg font-semibold">Sản Phẩm Bán Chạy</h2>
				<a href="#" className="text-blue-500 text-sm hover:underline">
					Xem tất cả &rarr;
				</a>
			</div>

			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
				{products?.slice(0, 5).map((product) => (
					<ProductCard product={product} />
				))}
			</div>
		</div>
	);
};

export default TrendingProducts;
