import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import HeaderToolItem from './HeaderToolItem';

const CompanyInfoList = () => {
	const { t } = useTranslation();
	return (
		<div className="flex-1 flex gap-2 justify-between">
			<div className="text-base flex gap-4 font-[400]">
				<Link to="/">{t('header.menu.aboutUs')}</Link>
				<Link to="/">{t('header.menu.blog')}</Link>
				<Link to="/">{t('header.menu.catalog')}</Link>
				<Link to="/">{t('header.menu.contact')}</Link>
			</div>
			<div className="flex gap-[1.5rem]">
				<HeaderToolItem
					isSemibold
					imgSrc={<img src="/icons/Clock.svg" alt="Clock" className="w-5 h-5" />}
					text={t('header.benefits.support')}
				/>
				<HeaderToolItem
					isSemibold
					imgSrc={<img src="/icons/Hand Money.svg" alt="freeship" className="w-5 h-5" />}
					text={t('header.benefits.freeShipping')}
				/>
				<HeaderToolItem
					isSemibold
					imgSrc={<img src="/icons/truck_fill.svg" alt="delivery" className="w-5 h-5" />}
					text={t('header.benefits.fastDelivery')}
				/>
				<HeaderToolItem
					isSemibold
					imgSrc={<img src="/icons/Refresh Circle.svg" alt="Easy return" className="w-5 h-5" />}
					text={t('header.benefits.easyReturn')}
				/>
			</div>
		</div>
	);
};

export default CompanyInfoList;
