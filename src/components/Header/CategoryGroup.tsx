import { useTranslation } from 'react-i18next';

const CategoryGroup = () => {
	const { t } = useTranslation();
	return (
		<div className="flex bg-promotion-blue-end items-center px-4 py-3 gap-4 rounded-md">
			<button className="flex items-center gap-2 hover:cursor-pointer">
				<img src="/icons/menu.svg" className="w-5 h-5" />
				<span className="text-white text-base font-semibold leading-5">{t('header.menu.category')}</span>
				<img src="/icons/chevron-down.svg" className="ml-4 w-5 h-5" />
			</button>
		</div>
	);
};

export default CategoryGroup;
