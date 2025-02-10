const runTransitions = () => {
	window.addEventListener('DOMContentLoaded', () => {
		const elemToWatch = document.querySelectorAll('.intersecting-element');

		const options = {
			// root: document.querySelector('.product-section'),
			rootMargin: '100px',
			threshold: 0.4,
		};

		const intersectionObserver = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					console.log(`${entry.target} has been observed`);
					// entry.target.style.backgroundColor = 'red';
					entry.target.classList.add('animate-elements-on-scroll');
					intersectionObserver.unobserve(entry.target);
				}
			});
		}, options);

		if (elemToWatch) {
			elemToWatch.forEach((element) => {
				intersectionObserver.observe(element);
			});
		}
	});
};

export { runTransitions };
