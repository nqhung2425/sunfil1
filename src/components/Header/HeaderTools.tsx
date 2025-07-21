import { useTranslation } from 'react-i18next';
import HeaderToolItem from './HeaderToolItem';

const HeaderTools = () => {
	const { t, i18n } = useTranslation();
	return (
		<div className="tools flex gap-[48px] items-center">
			<HeaderToolItem
				imgSrc={<img alt="Vietnamese" src="/icons/ico-country-c-vietnam.svg" className="w-[36px] h-[36px]" />}
				text={t('header.language')}
			/>

			<HeaderToolItem
				imgSrc={
					<div className="relative">
						<img alt="Cart" src="/icons/Cart.svg" className="w-[36px] h-[36px]" />
						<div className="left-[20px] top-[-12px] w-[24px] h-[24px] absolute p-2 rounded-full bg-badge-orange text-[12px] flex items-center justify-center">
							<span className="text-white font-semibold">12</span>
						</div>
					</div>
				}
				text={t('header.cart')}
			/>

			<HeaderToolItem
				imgSrc={<img alt="User Circle" src="/icons/User Circle.svg" className="w-[36px] h-[36px]" />}
				text={t('header.account')}
			/>
		</div>
	);
};

export default HeaderTools;
