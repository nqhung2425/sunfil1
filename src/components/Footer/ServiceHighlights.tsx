import { Service, services } from '../../mock/servicesHighlight';

const ServiceHighlights = () => {
	return (
		<div className="flex justify-between gap-4 px-4 py-6 bg-transparent">
			{services.map((service: Service) => (
				<div key={service.id} className="flex items-start gap-4 p-2 py-3 bg-white rounded-xl shadow-sm flex-1">
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
