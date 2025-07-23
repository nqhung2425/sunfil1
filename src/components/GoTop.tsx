// GoToTopButton.tsx
import { useEffect, useState } from 'react';

export default function GoToTopButton() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			setIsVisible(window.scrollY > 300);
		};

		window.addEventListener('scroll', toggleVisibility);
		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		isVisible && (
			<button onClick={scrollToTop} className="fixed bottom-6 right-6 z-50">
				<img src="/icons/goTop.svg" alt="Go to Top" className="w-10 h-10" />
			</button>
		)
	);
}
