import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className="my-[6rem]">
			<div className="flex justify-between">
				<div className="address">
					<h3 className="font-semibold mb-8 uppercase">
						Viet Hung Auto Production Trading Joint Stock Company
					</h3>
					<div className="flex flex-col text-secondary gap-1">
						<div>
							Tax code: <span className="font-bold ">0305094228</span>
						</div>
						<div>
							Address:{' '}
							<span className="font-bold ">
								13 Nghia Thuc, Ward 05, District 5, Ho Chi Minh City, Viet Nam
							</span>
						</div>
						<div>
							Phone number: <span className="font-bold ">0283 760 7607</span>
						</div>
						<div>
							Opening hour: <span className="font-bold ">09:00 - 22:00 from Mon - Fri</span>
						</div>
					</div>
				</div>
				<div className="sitemap">
					<h3 className="text-2xl font-semibold mb-8">Sitemap</h3>
					<div className="flex flex-col gap-3 text-secondary">
						<Link to={'/'}>About</Link>
						<Link to={'/'}>Article</Link>
						<Link to={'/'}>Cart</Link>
						<Link to={'/'}>Contact</Link>
					</div>
				</div>
				<div className="legal">
					<h3 className="text-2xl font-semibold mb-8">Legal</h3>
					<div className="flex flex-col gap-3 text-secondary">
						<Link className="font-bold text-black" to={'/'}>
							_ Privacy Policy
						</Link>
						<Link to={'/'}>Cookie Policy</Link>
						<Link to={'/'}>Delivery Policy</Link>
						<Link to={'/'}>FQAs Policy</Link>
					</div>
				</div>
				<div className="download">
					<h3 className="text-2xl font-semibold mb-8">Download App</h3>
					<div className="flex flex-col gap-2">
						<img src="button-app store.png" alt="app store" />
						<img src="button-play store.png" alt="play store" />
					</div>
				</div>
			</div>
			<div className="flex justify-between">
				<img src="/bo cong thuong.png" alt="bo cong thuong" />
				<div className="flex gap-2 items-center">
					<img alt="Vietnamese" src="/icons/ico-country-c-vietnam.svg" className="w-9 h-9" />
					<span className="text-base font-bold">VI</span>
					<img src="/icons/Alt Arrow Down.svg" alt="Arrow Down" className="w-5 h-5" />
				</div>
			</div>
		</div>
	);
};

export default Footer;
