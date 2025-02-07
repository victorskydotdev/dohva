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
