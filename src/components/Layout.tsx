// Layout.tsx
import React, { ReactNode } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import NewbiePromotion from './NewbiePromotion';
import ServiceHighlights from './Footer/ServiceHighlights';
import StoreSystemBox from './StoreSystemBox';

type LayoutProps = {
	children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className="min-h-screen flex flex-col bg-category-bg">
			<NewbiePromotion />
			<div className="bg-white">
				<div className="m-auto w-[90%] 2xl:w-[75%] flex-1 flex flex-col text-ssm ">
					<Header />
				</div>
			</div>
			<div className="m-auto w-[90%] 2xl:w-[75%] flex-1 flex flex-col text-ssm bg-transparent">
				<main className="flex-1">{children}</main>
				<ServiceHighlights />
			</div>
			<div className="bg-brand-blue-50">
				<StoreSystemBox />
			</div>
			<div className="m-auto w-[90%] 2xl:w-[75%] flex-1 flex flex-col text-ssm bg-transparent">
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
