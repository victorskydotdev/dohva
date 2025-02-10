const prodCard = document.querySelectorAll('.prod-card');
const quoteFormModal = document.querySelector('.quote-form-modal');
const domBody = document.querySelector('.dom-body');

const closeBtn = document.querySelector('.quote-form-close-btn');

if (closeBtn) {
	closeBtn.addEventListener('click', () => {
		// alert('button clicked');

		window.location.href = '/#our-products';
	});
}

const idArray = [
	'ginger',
	'dried-ginger',
	'bitter-kola',
	'yohimbe',
	'cashew',
	'sesame',
	'zobo',
	'pepper',
	'garlic',
	'coconut-shells',
	'kernel-shells',
	'activated-coconut-shells',
	'activated-palm-kernel',
];

const formTemplate = () => {
	return `
		<div class="container">
			<button class="close-btn quote-form-close-btn">
          <i class="fa-solid fa-xmark"></i>
      </button>

			<form class="quote-form" action="">
				<div class="wrap">
					<h3 class="heading-wrap">Dohva quote form</h3>
				</div>

				<div class="wrap name-wrap">
					<input type="text" id="username" name="username" placeholder="Your name" />

					<input
						type="text"
						id="companyname"
						name="companyname"
						placeholder="You company name" />
				</div>

				<div class="wrap address-wrap">
					<input type="text" id="address" name="address" placeholder="Your address" />
				</div>

				<div class="wrap email-wrap">
					<input type="email" id="email" name="email" placeholder="Valid email" />
				</div>

				<div class="wrap country-wrap">
					<input type="text" id="country" name="country" placeholder="Country" />

					<input
						type="text"
						id="port"
						name="port"
						placeholder="Port of destination" />
				</div>

				<div class="wrap quantity-wrap">
					<input
						type="number"
						id="quantity"
						name="quantityOfCommodity"
						placeholder="Quantity needed" />
				</div>

				<div class="btn-wrap">
					<button class="submit-btn">Get quote</button>
				</div>
			</form>
		</div>
  `;
};

const formInteraction = () => {
	prodCard.forEach((card) => {
		card.addEventListener('click', (e) => {
			// alert('Card clicked');

			const id = card.getAttribute('data-card-id');

			for (let index = 0; index < idArray.length; index += 1) {
				if (idArray[index] === id) {
					// alert('button clicked');

					window.location.href = '/quote.html';
					// domBody.style.overflow = 'hidden';
					// quoteFormModal.classList.add('show-form-modal');
					// quoteFormModal.innerHTML = formTemplate();

					// const closeBtn = document.querySelector('.quote-form-close-btn');

					// const form = document.querySelector('.quote-form');

					// close-modal-logic
					// closeBtn.addEventListener('click', () => {
					// 	domBody.style.overflow = 'auto';
					// 	quoteFormModal.innerHTML = '';

					// 	quoteFormModal.classList.remove('show-form-modal');
					// }); // end of close modal

					const submitForm = () => {
						form.addEventListener('submit', async (event) => {
							event.preventDefault();

							const time = new Date().toLocaleTimeString();
							const date = new Date().toLocaleDateString();

							const formData = new FormData(event.target);

							formData.append('requestTime', time);
							formData.append('requestDate', date);

							const jsonData = {};

							for (const [key, value] of formData.entries()) {
								jsonData[key] = value;
							}

							const endpoint = '/.netlify/functions/submitForm';

							const response = await fetch(endpoint, {
								method: 'POST',
								headers: {
									'Content-Type': 'application/json',
								},
								body: JSON.stringify({ jsonData }),
							});

							if (!response) {
								console.log('Form not submitted to email');
							} else {
								console.log('dohva notified of quote request');

								// redirect client to success page
							}
						});
					};

					// submitForm(); // invoking submitForm function
				}
			}
		});
	});
};

export { formInteraction };
