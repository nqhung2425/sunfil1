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
			<div className="w-full lg:w-[75vw] m-auto flex-1 flex flex-col">
				<Header />
				<main className="flex-1 bg-red-300">{children}</main>
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
