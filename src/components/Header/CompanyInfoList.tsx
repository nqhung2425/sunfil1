import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import HeaderToolItem from './HeaderToolItem';

const CompanyInfoList = () => {
	const { t, i18n } = useTranslation();
	return (
		<div className="flex-1 flex gap-2 justify-between">
			<div className="flex gap-4 font-[400]">
				<Link to="/">{t('header.menu.aboutUs')}</Link>
				<Link to="/">{t('header.menu.blog')}</Link>
				<Link to="/">{t('header.menu.catalog')}</Link>
				<Link to="/">{t('header.menu.contact')}</Link>
			</div>
			<div className="flex gap-[20px]">
				<HeaderToolItem
					isSemibold
					imgSrc={<img src="/icons/Clock.svg" className="w-[18px] h-[18px]" />}
					text={t('header.benefits.support')}
				/>
				<HeaderToolItem
					isSemibold
					imgSrc={<img src="/icons/Hand Money.svg" className="w-[18px] h-[18px]" />}
					text={t('header.benefits.freeShipping')}
				/>
				<HeaderToolItem
					isSemibold
					imgSrc={<img src="/icons/truck_fill.svg" className="w-[18px] h-[18px]" />}
					text={t('header.benefits.fastDelivery')}
				/>
				<HeaderToolItem
					isSemibold
					imgSrc={<img src="/icons/Refresh Circle.svg" className="w-[18px] h-[18px]" />}
					text={t('header.benefits.easyReturn')}
				/>
			</div>
		</div>
	);
};

export default CompanyInfoList;
