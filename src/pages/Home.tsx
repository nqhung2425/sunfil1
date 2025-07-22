import FilterPanel from '../components/Filter/FilterPanel';
import ProductList from '../components/ProductList/ProductList';
import FeatureSlider from '../components/Slider/FeatureSlider';
import { bestSellers } from '../mock/products';

const Home = () => {
	return (
		<div>
			<img src="/banner.png" alt="banner" className="w-full object-cover" />
			<div className="p-12 bg-brand-blue rounded-b-xl">
				<FeatureSlider products={bestSellers} />
			</div>
			<div className="flex gap-4 mt-4">
				<div className="w-[20vw]">
					<FilterPanel />
				</div>

				<div className="flex-1">
					<ProductList />
				</div>
			</div>
		</div>
	);
};

export default Home;
