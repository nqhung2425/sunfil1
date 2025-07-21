import CategoryGroup from './CategoryGroup';
import CompanyInfoList from './CompanyInfoList';
import HeaderTools from './HeaderTools';
import Search from './Search';

const Header = () => {
	return (
		<>
			<div className="mb-4 flex gap-[48px]">
				<div>
					<img alt="Sale Icon" src="/logo_sunfil1.png" />
				</div>
				<Search />
				<HeaderTools />
			</div>
			<div className="mb-4 flex gap-[48px] items-center">
				<CategoryGroup />
				<CompanyInfoList />
			</div>
		</>
	);
};

export default Header;
