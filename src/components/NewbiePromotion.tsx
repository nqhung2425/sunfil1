import { Trans, useTranslation } from 'react-i18next';

const phone = '0283 760 7607';
const code = 'NEWBIE';

const NewbiePromotion = () => {
	const { t } = useTranslation();

	return (
		<div className="bg-gradient-to-r from-promotion-blue-start via-promotion-cyan-mid to-promotion-blue-end text-white font-[400]">
			<div className="lg:w-[75vw] m-auto">
				<div className="flex justify-between items-center p-1">
					<div className="flex gap-2 items-center">
						<img src="/icons/Sale.svg" alt="Sale" className="w-4 h-4" />
						<div className="h-4 text-ssm">
							<Trans i18nKey="header.promoBanner" values={{ code }}>
								Nhập mã <span className="text-yellow-300 font-bold">{code}</span> giảm ngay 10% cho lần
								đầu mua hàng.
							</Trans>
						</div>
					</div>
					<div className="flex gap-6">
						<div className="flex items-center gap-2">
							<img src="/icons/Smartphone.svg" alt="Smartphone" className="w-4 h-4" />
							<div className="h-4 text-ssm">Hotline: {phone}</div>
						</div>

						<a className="inline-flex gap-2 items-center">
							<img src="/icons/Phone Rounded.svg" alt="Phone Rounded" className="w-4 h-4" />
							<div className="h-4 text-ssm">{t('header.downloadApp')}</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewbiePromotion;
