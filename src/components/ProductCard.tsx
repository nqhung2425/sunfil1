import { Product } from '../types/Product';

type ProductCardProps = {
	product: Product;
};

const ProductCard = (props: ProductCardProps) => {
	const { product } = props;
	return (
		<div key={product.id} className="bg-white rounded shadow-sm hover:shadow-md transition">
			<img src={product.imageUrl} alt={product.name} className="h-[10rem] w-[10rem] object-cover p-2" />
			<div className="p-2">
				<p className="text-base text-gray-700 line-clamp-2">{product.name}</p>
				<div className="mt-1">
					<span className="text-red-600 font-semibold">{product.price.toLocaleString()} đ</span>
				</div>
				<div className="text-sm text-gray-400 line-through">{product.originalPrice.toLocaleString()} đ</div>
				<div className="text-sm text-red-500 font-medium">-{product.discountPercent}%</div>
			</div>
		</div>
	);
};

export default ProductCard;
