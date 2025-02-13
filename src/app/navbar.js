import brandLogo from '../assets/brand-logo.png';
const headerElement = document.querySelector('.header-nav');

function loadNavbar() {
	const navTemplate = `
    <nav class="container">
      <div class="wrap">
        <a href="/">
          <img src="${brandLogo}" alt="dohva brand logo" />
        </a>
      </div>

      <ul class="nav-wrap">
        <li class="nav-links">
          <a href="/" class="link">Home</a>
        </li>

        <li class="nav-links">
          <a href="/about.html" class="link">About</a>
        </li>
        
        <li class="nav-links">
          <a href="/#our-products" class="link">Our products</a>
        </li>
        <li class="nav-links">
          <a href="/contact.html" class="link">Contact</a>
        </li>
      </ul>

      <div class="burger">
        <i class="fa-solid fa-bars"></i>
      </div>
    </nav>
  `;

	if (headerElement) {
		headerElement.innerHTML = navTemplate;

		const burger = document.querySelector('.burger');
		const navWrap = document.querySelector('.nav-wrap');

		burger.addEventListener('click', () => {
			navWrap.classList.toggle('display-navbar');
		});
	}
}

export { loadNavbar };
