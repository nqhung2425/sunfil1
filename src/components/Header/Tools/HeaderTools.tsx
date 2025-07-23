import { useTranslation } from 'react-i18next';
import HeaderToolItem from './HeaderToolItem';
import FeatureItem from '../../Slider/FeatureItem';
import { bestSellers } from '../../../mock/products';

const HeaderTools = () => {
	const { t } = useTranslation();
	return (
		<div className="tools flex gap-[2rem] items-center">
			<HeaderToolItem
				imgSrc={<img alt="Vietnamese" src="/icons/ico-country-c-vietnam.svg" className="w-9 h-9" />}
				text={t('header.language')}
			/>

			<div className="relative group">
				<HeaderToolItem
					imgSrc={
						<div className="relative">
							<img alt="Cart" src="/icons/Cart.svg" className="w-9 h-9" />
							<div className="left-[20px] top-[-12px] w-6 h-6 absolute p-2 rounded-full bg-badge-orange text-ssm flex items-center justify-center">
								<span className="text-white font-semibold">12</span>
							</div>
						</div>
					}
					text={t('header.cart')}
				/>
				<div className="absolute top-full left-0 w-[16rem] shadow-lg rounded bg-white hidden group-hover:block">
					<FeatureItem product={bestSellers[0]} />
				</div>
			</div>

			<HeaderToolItem
				imgSrc={<img alt="User Circle" src="/icons/User Circle.svg" className="w-9 h-9" />}
				text={t('header.account')}
			/>
		</div>
	);
};

export default HeaderTools;
