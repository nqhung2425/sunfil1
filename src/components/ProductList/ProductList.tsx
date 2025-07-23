import React from 'react';
import { Product } from '../../types/Product';
import { getProducts } from '../../mock/API';
import ProductListFilter from './ProductListFilter';
import FeatureItem from '../Slider/FeatureItem';

const ProductList = () => {
	const [products, setProducts] = React.useState<Product[]>([]);
	const [page, setPage] = React.useState(0);
	const [loading, setLoading] = React.useState(false);
	const [hasMore, setHasMore] = React.useState(true); // ✅ new state

	const loadMore = async () => {
		if (loading || !hasMore) return;

		setLoading(true);
		const pageSize = 8;
		const newProducts = await getProducts(page, pageSize);
		console.log(newProducts);

		if (newProducts.length === 0 || newProducts.length < pageSize) {
			setHasMore(false); // ✅ stop further loading
		} else {
			setProducts((prev) => [...prev, ...newProducts]);
			setPage((prev) => prev + 1);
		}

		setLoading(false);
	};

	React.useEffect(() => {
		loadMore();
	}, []);

	React.useEffect(() => {
		const handleScroll = () => {
			if (
				window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
				!loading &&
				hasMore // ✅ only load if there's more data
			) {
				loadMore();
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [loading, hasMore]);

	return (
		<div>
			<ProductListFilter />
			<div className="grid grid-cols-4 gap-4 mt-4">
				{products.map((product) => (
					<FeatureItem key={product.id} product={product} />
				))}
			</div>
			{loading && <p className="text-center mt-4">Đang tải...</p>}
		</div>
	);
};
export default ProductList;
