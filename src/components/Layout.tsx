// Layout.tsx
import React, { ReactNode } from 'react';
import Header from './Header/Header';
import Footer from './Footer';
import NewbiePromotion from './NewbiePromotion';

type LayoutProps = {
	children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className="min-h-screen flex flex-col">
			<NewbiePromotion />
			<div className="m-auto xl:w-[75%] flex-1 flex flex-col text-ssm">
				<Header />
				<main className="flex-1 bg-red-300">{children}</main>
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
