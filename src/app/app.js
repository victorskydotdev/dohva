const seeProdBtns = document.querySelectorAll('.see-products-btn');

export const runAlertService = (message) => {
	return alert(message);
};
const pageBodyElement = document.querySelector('.page-body-element');
const footerElement = document.querySelector('footer');

export const undoFooterMargin = () => {
	if (pageBodyElement) {
		footerElement.style.marginTop = 'unset';
	}
};

export const goToProductSection = () => {
	if (seeProdBtns) {
		seeProdBtns.forEach((btn) => {
			btn.addEventListener('click', () => {
				window.location.href = '/#our-products';
			});
		});
	} else alert('none here');
};
