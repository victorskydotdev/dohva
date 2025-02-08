const runTransitions = () => {
	window.addEventListener('DOMContentLoaded', () => {
		const elemToWatch = document.querySelector('.intersecting-element');

		const options = {
			// root: document.querySelector('.product-section'),
			rootMargin: '-150px',
			threshold: 1,
		};

		const intersectionObserver = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					console.log(`${entry.target} has been observed`);
					// entry.target.style.backgroundColor = 'red';
				}
			});
		}, options);

		intersectionObserver.observe(elemToWatch);
	});
};

export { runTransitions };
