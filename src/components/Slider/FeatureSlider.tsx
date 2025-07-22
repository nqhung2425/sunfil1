import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Product } from '../../types/Product';
import FeatureItem from './FeatureItem';

type FeatureSliderProps = {
	products: Product[];
};

const FeatureSlider = (props: FeatureSliderProps) => {
	const { products } = props;
	return (
		<Swiper
			navigation
			// pagination={{ type: 'bullets' }}
			modules={[Navigation, Pagination]}
			spaceBetween={30}
			loop={true}
			breakpoints={{
				// 320: {
				// 	slidesPerView: 1,
				// },
				// 768: {
				// 	slidesPerView: 3,
				// 	spaceBetween: 10,
				// },
				1024: {
					slidesPerView: 5,
					spaceBetween: 30,
				},
			}}
			className="w-full rounded-lg"
		>
			{products.map((productDetail) => {
				return (
					<SwiperSlide key={productDetail.id}>
						<FeatureItem product={productDetail} />
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};

export default FeatureSlider;
