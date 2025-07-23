import CategoryGroup from './CategoryBtn';
import CompanyInfoList from './CompanyInfoList';
import HeaderTools from './Tools/HeaderTools';
import Search from './Search';

const Header = () => {
	return (
		<>
			<div className="mb-4 flex gap-[3rem]">
				<div>
					<img alt="brand logo" src="/logo_sunfil1.png" />
				</div>
				<Search />
				<HeaderTools />
			</div>
			<div className="mb-4 flex gap-[1.5rem] items-center">
				<CategoryGroup />
				<CompanyInfoList />
			</div>
		</>
	);
};

export default Header;
