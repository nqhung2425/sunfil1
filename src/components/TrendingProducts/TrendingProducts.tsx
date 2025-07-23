import { useTranslation } from 'react-i18next';
import { Product } from '../../types/Product';
import ProductCard from './ProductCard';

type TrendingProductsProps = {
	products: Product[];
};

const TrendingProducts = (props: TrendingProductsProps) => {
	const { t } = useTranslation();

	const { products = [] } = props;
	if (!products.length) return <div>Đang tải...</div>;
	return (
		<div className="p-4 rounded">
			<div className="flex justify-between items-center mb-4">
				<h2 className="text-lg font-semibold">{t('trending.trendingProducts')}</h2>
				<a href="#" className="text-blue-500 text-sm hover:underline">
					{t('trending.showAll')} &rarr;
				</a>
			</div>

			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
				{products?.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	);
};

export default TrendingProducts;
