// Layout.tsx
import React, { ReactNode } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import NewbiePromotion from './Header/NewbiePromotion';
import ServiceHighlights from './Footer/ServiceHighlights';
import StoreSystemBox from './Footer/StoreSystemBox';

type LayoutProps = {
	children: ReactNode;
};

const LayoutContainer = ({ children }: { children: React.ReactNode }) => (
	<div className="m-auto w-[90%] 2xl:w-[75%] flex-1 flex flex-col text-ssm">{children}</div>
);

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className="min-h-screen flex flex-col bg-category-bg">
			<NewbiePromotion />

			<div className="bg-white">
				<LayoutContainer>
					<Header />
				</LayoutContainer>
			</div>

			<LayoutContainer>
				<main className="flex-1">{children}</main>
				<ServiceHighlights />
			</LayoutContainer>

			<div className="bg-brand-blue-50">
				<StoreSystemBox />
			</div>

			<div className="relative w-full overflow-hidden">
				<div className="absolute inset-0 bg-[url('/footer.jpg')] bg-cover bg-center opacity-50"></div>
				<div className="relative z-10">
					<LayoutContainer>
						<Footer />
					</LayoutContainer>
				</div>
			</div>
		</div>
	);
};

export default Layout;
