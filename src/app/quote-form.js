const prodCard = document.querySelectorAll('.prod-card');
const quoteFormModal = document.querySelector('.quote-form-modal');
const domBody = document.querySelector('dom-body');

const idArray = [
	'ginger',
	'dried-ginger',
	'bitter-kola',
	'yohimbe',
	'cashew',
	'sesame',
	'zobo',
	'pepper',
];

const formTemplate = () => {
	return `

  `;
};

const formInteraction = () => {
	prodCard.forEach((card) => {
		card.addEventListener('click', (e) => {
			// alert('Card clicked');

			const id = card.getAttribute('data-card-id');

			for (let index = 0; index < idArray.length; index += 1) {
				if (idArray[index] === id) {
					quoteFormModal.classList.add('show-form-modal');
				}
			}
		});
	});
};

export { formInteraction };
