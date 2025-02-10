const btn = document.querySelectorAll('.team-btn');
const teamProfileModal = document.querySelector('.team-profile-modal');
const domBody = document.querySelector('.dom-body');

const teamMembers = ['jeph', 'uchenna', 'frank', 'uche'];

const jephfTemplate = () => {
	return `
    <div class="container team-wrap">
      <button class="close-btn">
          <i class="fa-solid fa-xmark"></i>
      </button>
      
      <h4 class="heading">Dr. Jeph Akaehie</h4>

      <p class="profile">
        Dr. Jeph Akaehie is a seasoned entrepreneur with over 16 years of experience in the healthcare sector. As the CEO of Greenpower Healthcare Limited and AFROGANIKS INDUSTRIES LTD, he has successfully expanded operations across West Africa, employing more than 50 staff and engaging around 300 distributors. Additionally, he serves on the board of directors for Dohva Transafrican Limited, where his extensive experience has contributed significantly to the company’s growth and strategic direction.

        <br />
        <br />

        A certified microbiologist and naturopathic doctor, Dr. Akaehie is currently pursuing an MBA and an MSc in Public Health. He has mentored over 65,000 young leaders and startups, championing job creation and sustainable development in Africa.

        <br />
        <br />

        Recognized with multiple awards, including the Business Integrity Award and Best Nutraceutical Company in West Africa, Dr. Akaehie also consults for various business leaders and has delivered entrepreneurship training at universities in Ghana.

        <br />
        <br />

        He is married and a proud father of three sons.
      </p>
    </div>
  `;
};
const uchennaTemplate = () => {
	return `
    <div class="container team-wrap">
      <button class="close-btn">
          <i class="fa-solid fa-xmark"></i>
      </button>

      <h4 class="heading">Victor Uchenna Akaehie</h4>

      <p class="profile">
        Victory Uchenna Akaehie  is a distinguished microbiologist and serial entrepreneur, known for his significant contributions to the health and consumer goods sectors. He graduated from Chukwuemeka Odimeje Ojukwu University, Uli, and holds positions on the board of directors for several companies, including Maconvic Multiple Choice Limited, a leader in fast-moving consumer goods.

        <bt />
        <bt />

        As the founder of Bluefig Healthcare Limited, he has successfully expanded operations across multiple African countries, employing over 120 professionals. Currently, as the CEO of Dohva Transafrican Limited, he has spearheaded notable growth and improvements within the company.

        <br />
        <br />

        His commitment to driving innovation within his industry is reflected in his leadership and vision. Outside of his professional life, Uchenna is happily married and a proud parent, balancing his work with family responsibilities.
      </p>
    </div>
  `;
};
const frankTemplate = () => {
	return `
    <div class="container team-wrap">
      <button class="close-btn">
          <i class="fa-solid fa-xmark"></i>
      </button>

      <h4 class="heading">Frank Onyeisi Okonkwo</h4>

      <p class="profile">
        Mr. Frank Onyeisi Okonkwo is the Head of Sales for Europe and the United States at DOHVA Transafrican Limited. With over 10 years of experience in the logistics sector, he has held key positions in various multinational companies, specializing in sales strategy and client relations.

        <br />
        <br />

        Based in Luxembourg, Mr. Okonkwo leverages his extensive industry knowledge to drive growth and enhance customer satisfaction. His leadership has been crucial in expanding DOHVA's market presence and optimizing service delivery.

        <br />
        <br />

        In addition, he is the founder of Okonkwo et Fils Nig Ltd, a registered company in Nigeria that specializes in the import and export of goods and services, including general contracting. Under his leadership, the company has established a strong reputation for quality and reliability in the logistics and trade sectors.

        <br />
        <br />

        Outside of work, he is a devoted husband and father, balancing his professional commitments with family life. Mr. Okonkwo's expertise and dedication make him an invaluable asset to DOHVA Transafrican Limited.
      </p>
    </div>
  `;
};

const ucheTemplate = () => {
	return `
    <div class="container team-wrap">
      <button class="close-btn">
          <i class="fa-solid fa-xmark"></i>
      </button>
      <h4 class="heading">Engr. Uche Chibuikem Chiemela</h4>

      <p class="profile">
        Engr. Uche Chibikem Chiemela is a seasoned engineering professional and the CEO of Dereka Dot Services Limited, a leading manufacturing company specializing in machine fabrication. A graduate of the Federal University of Technology, he has previously worked with multinational corporations, including The Coca-Cola Company, where he contributed to optimizing production processes.

        <br />
        <br />

        Under his leadership, Dereka Dot Services Limited has successfully executed numerous projects in Nigeria, including ultramodern palm oil processing mills and contracts with the Imo State government. As an advisory board member at DOHVA TRANSAFRICAN LIMITED, Engr. Chiemela applies his extensive industry expertise to enhance strategic initiatives and drive operational excellence, positioning the company for sustainable growth in the export business.
      </p>
    </div>
  `;
};

const showTeamProfile = () => {
	btn.forEach((clickBtn) => {
		clickBtn.addEventListener('click', () => {
			const btnId = clickBtn.getAttribute('data-team-id');

			domBody.style.overflowY = 'hidden';

			teamProfileModal.classList.add('show-profile-modal');

			const delayLoadTime = () => {
				setTimeout(() => {
					for (let index = 0; index < teamMembers.length; index++) {
						if (teamMembers[0] === btnId) {
							teamProfileModal.innerHTML = jephfTemplate();
						} else if (teamMembers[1] === btnId) {
							teamProfileModal.innerHTML = uchennaTemplate();
						} else if (teamMembers[2] === btnId) {
							teamProfileModal.innerHTML = frankTemplate();
						} else {
							teamProfileModal.innerHTML = ucheTemplate();
						}
					}
				}, 1000);
			};

			const observer = new MutationObserver((entries) => {
				entries.forEach((entry) => {
					// console.log(entry);

					const closeBtn = document.querySelector('.close-btn');

					const container = document.querySelector('.container');

					if (closeBtn) {
						closeBtn.addEventListener('click', () => {
							teamProfileModal.innerHTML = '';

							teamProfileModal.classList.remove('show-profile-modal');

							domBody.style.overflowY = 'auto';
						});
					}
				});
			});

			const config = {
				attributes: true,
				subtree: true,
				childList: true,
			};

			observer.observe(teamProfileModal, config);

			delayLoadTime();
		});
	});
};

export { showTeamProfile };
