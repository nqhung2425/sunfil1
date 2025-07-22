const services = [
	{
		title: 'Miễn phí vận chuyển',
		description: 'Với hoá đơn từ 1 triệu',
		icon: '/icons/money.svg',
	},
	{
		title: 'Hỗ trợ 24/7',
		description: 'Đội ngũ CSKH tận tình sẵn sàng lắng nghe và phục vụ tận tâm',
		icon: '/icons/support.svg',
	},
	{
		title: 'Giao hàng nhanh 2h',
		description: 'Trong vòng bán kính 10km nội thành TP HCM',
		icon: '/icons/delivery.svg',
	},
	{
		title: '30 ngày đổi trả',
		description: 'Hoàn tiền 100% nếu phát sinh lỗi từ NSX hoặc đơn vị vận chuyển',
		icon: '/icons/package.svg',
	},
];

const ServiceHighlights = () => {
	return (
		<div className="flex justify-between gap-4 px-4 py-6 bg-transparent">
			{services.map((service, index) => (
				<div key={index} className="flex items-start gap-4 p-2 py-3 bg-white rounded-xl shadow-sm flex-1">
					<div className="flex items-center h-full flex-1">
						<img src={service.icon} alt={service.icon} className="w-12 h-12" />
					</div>
					<div className="flex-4">
						<h3 className="font-semibold text-base mb-1">{service.title}</h3>
						<p className="text-sm text-gray-500">{service.description}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default ServiceHighlights;
