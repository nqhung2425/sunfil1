import { useTranslation } from 'react-i18next';

const Search = () => {
	const { t } = useTranslation();

	return (
		<div className="flex-1 flex items-center">
			<div className="p-2 h-[4rem] w-full flex justify-between items-center border-2 border-promotion-blue-end rounded-[4rem]">
				<input
					placeholder={t('header.searchPlaceholder')}
					className="flex-1 h-10 px-3 text-sm  border-none outline-none focus:border-none focus:outline-none"
				/>
				<div className="flex gap-y-4 gap-x-6 items-center">
					<img alt="Sale Icon" src="/icons/Camera.svg" className="w-6 h-6" />
					<div className=" bg-promotion-blue-end rounded-[4rem] px-5 py-2">
						<img alt="Magnifer" src="/icons/Magnifer.svg" className="w-6 h-6" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Search;
