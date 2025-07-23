import { Product } from '../../types/Product';

type FeatureItemProps = {
	product: Product;
};

const FeatureItem = (props: FeatureItemProps) => {
	const { product } = props;
	return (
		<div key={product.id} className="bg-white rounded shadow-sm hover:shadow-md transition">
			<img src={product.imageUrl} alt={product.name} className="h-[15rem] w-full object-cover p-2" />
			<div className="p-6 pt-4 flex flex-col gap-3">
				<div>
					<button className="flex items-center gap-[0.05rem] px-2 rounded-full text-[#6B0000] font-bold text-sm bg-[linear-gradient(90deg,_#FFD366_0%,_#FFB24D_100%)]">
						<img src="/icons/Left.svg" alt="Left" className="w-4 h-4" />
						<span className="text-sm leading-6">Giá cực sốc</span>
					</button>
				</div>
				<p className="text-base text-gray-700 line-clamp-2">{product.name}</p>
				<div className="mt-1">
					<span className="text-red-600 text-xl font-semibold">{product.price.toLocaleString()} đ</span>
				</div>
				<div className="flex gap-2 items-end">
					<div className="text-sm text-gray-400 line-through">{product.originalPrice.toLocaleString()} đ</div>
					<div className="text-ssm text-red-500 font-medium">-{product.discountPercent}%</div>
				</div>
				<button className="bg-blue-50 text-blue-600 font-bold rounded-lg px-4 py-2 text-sm">Mua ngay</button>
			</div>
		</div>
	);
};

export default FeatureItem;
