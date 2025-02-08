import vectorOne from '../assets/vector-1.svg';
import peanuts from '../assets/export-img2.png';
import kernelNuts from '../assets/export-img3.png';
import footerLogo from '../assets/footer-logo.png';

const footer = document.querySelector('.footer');

function loadFooter() {
	const footerTemplate = `
    <div class="newsletter-layout">
      <div class="img-wrap">
        <img src="${vectorOne}" alt="" />
      </div>

      <div class="wrap">
        <div class="text-wrap">
          <h3 class="heading">
            Don't miss any of our products in high-yield seasons
          </h3>

          <p class="subtext">
            Join our Mailing and Newsletter list and get instant notification
            in your inbox
          </p>
        </div>

        <div class="form-wrap">
          <form action="" class="newsletter-form">
            <div class="wrap">
              <input
                type="text"
                id="subscriber-email"
                name="subscriber-name"
                placeholder="Your Name" />
              <input
                type="email"
                name="subscriber-email"
                id="subscriber-email"
                placeholder="Your Email Address" />
            </div>

            <div class="btn-wrap">
              <button class="submit-btn" type="submit">
                Subscribe to Newsletter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="faq-section">
      <div class="img-wrap pos-img1">
        <img src="${peanuts}" alt="peanuts" />
      </div>
      
      <div class="img-wrap pos-img2">
        <img src="${kernelNuts}" alt="kernel nuts" />
      </div>

      <div class="container">
        <div class="text-wrap">
          <h3 class="heading">Frequently asked questions</h3>
          <p class="subtext">
            Got a question about Dohva Transafrican? Don’t worry we have got
            you covered
          </p>
        </div>

        <!-- accordion -->
        <div class="accordion">
          <div class="container">
            <!-- item 1 -->
            <div class="accordion-item">
              <div class="question-wrap">
                <h4 class="text">What is Dohva Trabsafrican?</h4>

                <div class="icon-wrap">+</div>
              </div>

              <div class="content">
                <p class="text">
                  Lorem ipsum dolor sit amet consectetur. Ultrices purus nunc
                  amet massa et. Mattis quam gravida eu ante cras. Donec elit
                  sit id metus. Consectetur lacus placerat vestibulum volutpat
                  elit.
                </p>
              </div>
            </div>

            <!-- item 2 -->
            <div class="accordion-item">
              <div class="question-wrap">
                <h4 class="text">What are the payment terms?</h4>

                <div class="icon-wrap">+</div>
              </div>

              <div class="content">
                <p class="text">
                  Our payment terms usually require Credit Letters.
                </p>
              </div>
            </div>

            <!-- item 3 -->
            <div class="accordion-item">
              <div class="question-wrap">
                <h4 class="text">How can I track my shipment?</h4>

                <div class="icon-wrap">+</div>
              </div>

              <div class="content">
                <p class="text">
                  We provide tracking information once your order is dispatched.
                </p>
              </div>
            </div>

            <!-- item 4 -->
            <div class="accordion-item">
              <div class="question-wrap">
                <h4 class="text">
                  Is Dohva a registered member of Nigerian Export Pormotion
                  Council?
                </h4>

                <div class="icon-wrap">+</div>
              </div>

              <div class="content">
                <p class="text">
                  Yes, we are a registered member of the Nigerian Export Promotion Council.
                </p>
              </div>
            </div>

            <!-- item 5 -->
            <div class="accordion-item">
              <div class="question-wrap">
                <h4 class="text">Why partner with Dohva?</h4>

                <div class="icon-wrap">+</div>
              </div>

              <div class="content">
                <p class="text">
                  Flexible Payment Options:
                  We accept payment via Letter of Credit (L/C), a payment method that many importers in Nigeria do not accommodate. This flexibility provides our customers with greater convenience and security in their transactions.
                </p> <br>
                
                <p class="text">
                  High-Quality Products:
                  Our products contain fewer impurities, ensuring a higher level of quality and reliability for our clients.
                </p> <br>
                
                <p class="text">
                  Timely Delivery:
                  We deliver products on time, ensuring that our clients receive their orders as scheduled, which helps them maintain their operations without delays.
                </p> <br>
                
                <p class="text">
                  Extensive Experience in Exporting:
                  With a wealth of experience in exporting, we know where and how to source the best export commodities, ensuring that our clients receive top-notch products tailored to their needs.
                </p> <br>
                
                <p class="text">
                  Unbeatable Prices:
                  Our customers benefit from unbeatable prices that are hard to find anywhere else, providing exceptional value for their investments.
                </p>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>

    <div class="footer-container">
      <div class="container">
        <div class="logo-wrap">
          <img src="${footerLogo}" alt="footer logo" />
        </div>
      </div>
    </div>
  `;

	if (footer) {
		footer.innerHTML = footerTemplate;
	}
}

export { loadFooter };
