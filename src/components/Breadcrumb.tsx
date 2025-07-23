import { Link } from 'react-router-dom';

type BreadcrumbProps = {
	url: string;
	slugs: string[];
};

export default function Breadcrumb({ url, slugs }: BreadcrumbProps) {
	const segments = url.split('/').filter(Boolean); // bỏ phần rỗng

	const paths = segments.map((segment, idx) => {
		const href = '/' + segments.slice(0, idx + 1).join('/');
		const label = slugs[idx] || segment;
		return { href, label };
	});

	return (
		<nav className="text-sm text-gray-500 my-4" aria-label="Breadcrumb">
			<ol className="list-reset flex items-center space-x-2">
				{/* Trang chủ */}
				<li>
					<Link to="/" className="hover:underline">
						Trang chủ
					</Link>
				</li>

				{/* Các phần từ props */}
				{paths.map((item, idx) => (
					<li key={item.href} className="flex items-center space-x-2">
						<span className="mx-1 text-gray-400">›</span>
						{idx === paths.length - 1 ? (
							<span className="font-semibold text-promotion-blue-start">{item.label}</span>
						) : (
							<Link to={item.href} className="hover:underline">
								{item.label}
							</Link>
						)}
					</li>
				))}
			</ol>
		</nav>
	);
}
