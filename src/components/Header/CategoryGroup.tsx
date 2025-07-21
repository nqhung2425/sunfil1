import { useTranslation } from 'react-i18next';

const CategoryGroup = () => {
	const { t } = useTranslation();
	return (
		<div className="flex bg-promotion-blue-end items-center px-[16px] py-[12px] gap-4 rounded-md">
			<button className="flex items-center gap-2 hover:cursor-pointer">
				<img alt="Vietnamese" src="/icons/menu.svg" className="w-[18px] h-[18px]" />
				<span className="text-white font-semibold">{t('header.menu.category')}</span>
				<img alt="Vietnamese" src="/icons/chevron-down.svg" className="ml-[16px] w-[18px] h-[18px]" />
			</button>
		</div>
	);
};

export default CategoryGroup;
