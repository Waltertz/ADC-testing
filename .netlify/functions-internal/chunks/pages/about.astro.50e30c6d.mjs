import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, d as renderSlot, e as renderHead } from '../astro.6bda4046.mjs';
import 'html-escaper';

const $$Astro$3 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer id="footer" class="footer">
  <div class="footer-content position-relative">
    <div class="container">
      <div class="row">

        <div class="col-lg-4 col-md-6">
          <div class="footer-info">
            <h3>ADC Tanzania</h3>
            <p>
              8 Kilimani Road, <br>
              ADA Estate<br>
              
           14110 kinondoni <br><br>
              <strong>Phone</strong>&nbsp;&nbsp; +255 222 664 099<br>
              <strong>Email</strong> &nbsp; info@adctanzania.co.tz<br>
              <strong>Website</strong> &nbsp; www.adctanzania.co.tz<br>

            </p>
            
          </div>
        </div><!-- End footer info column-->

        <div class="col-lg-2 col-md-3 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="about">About us</a></li>
            <!-- <li><a href="services">Services</a></li> -->
            
          </ul>
        </div><!-- End footer links column-->

        
        <div class="col-lg-4 col-md-4">
          
            
          <div class="social-links d-flex mt-3">
            <a href="https://www.instagram.com/adctanzania/" class="d-flex align-items-center justify-content-center"><i class="bi bi-instagram"></i></a>
            <a href="https://www.linkedin.com/company/adc-tanzania" class="d-flex align-items-center justify-content-center"><i class="bi bi-linkedin"></i></a>
            <a href="https://www.youtube.com/watch?v=tcJm2DIgNcE&list=PLJpkv7Cc0fODRnoFLNJfV0BjOLB18Wx5I&ab_channel=ADCTanzania" class="d-flex align-items-center justify-content-center"><i class="bi bi-youtube"></i></a>
          </div>
        </div>
        

      </div>


    </div>
  </div>

  <div class="footer-legal text-center position-relative">
    <div class="container">
      <div class="copyright">
        Copyright   &copy;  <strong><span>ADC</span></strong>. All Rights Reserved
      </div>
    <!--  <div class="credits">
        
        Designed by <a href="https://www.linkedin.com/in/walter-patrick-4599161b4">Walter Patrick</a> &nbsp;<a href="https://www.linkedin.com/in/walter-patrick-4599161b4"><i class="bi bi-linkedin"></i></a> 
      </div> -->
    </div>
  </div>

</footer>`;
}, "C:/Users/Walter/Downloads/ADC-testing/src/components/Footer.astro", void 0);

const $$Astro$2 = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Navbar;
  return renderTemplate`${maybeRenderHead()}<header id="header" class="header d-flex align-items-center">
  <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

    <a href="/" class="logo d-flex align-items-center">
      <!-- Uncomment the line below if you also wish to use an image logo -->
      <img src="assets/img/grey.png" alt="" width="80" height="40">  
      <!--<h1>ADC<span>.</span></h1>-->
    </a>

    <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
    <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
    <nav id="navbar" class="navbar">
      <ul>
        <li><a href="/" id="home">Home</a></li>
        <li><a href="about" id="about">About</a></li>
        <li><a href="service-details" id="service-details">Services</a></li>
        

        <li class="dropdown"><a href="#" id="project"><span>Projects</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
          <ul>
            <li><a href="energy-details">Energy</a></li>
            <li><a href="women-led">Women-Led</a></li>
            <li><a href="agribusines-details">Agribusiness</a></li>
            <li><a href="youth">Youth</a></li>
          </ul>
        </li>

        <li class="dropdown" id="team"><a href="team"><span>Team</span> </a>
        </li>
            
        <li><a href="partners" id="partners">Partners</a></li>
 
        <li><a href="contact" id="contact">Contact</a></li>
      </ul>
    </nav><!-- .navbar -->
  </div>
</header>`;
}, "C:/Users/Walter/Downloads/ADC-testing/src/components/Navbar.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, showFooter = true } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="description" content="Adc Tanzania">\n    <meta name="viewport" content="width=device-width">\n    <link rel="preconnect" href="https://fonts.googleapis.com">\n    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&family=Roboto:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Work+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">\n    <link href="assets/img/favicon.png" rel="icon">\n    <link href="./assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">\n    <link href="./assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">\n    <link href="./assets/vendor/fontawesome-free/css/all.min.css" rel="stylesheet">\n    <link href="./assets/vendor/aos/aos.css" rel="stylesheet">\n    <link href="./assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">\n    <link href="./assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">\n    <link href="./assets/css/main.css" rel="stylesheet">\n    <title>', "</title>\n  ", "</head>\n  <body>\n    ", "\n\n    ", "\n\n    ", '\n\n    <a href="#" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>\n\n    <div id="preloader"></div>\n\n    <script src="./assets/vendor/bootstrap/js/bootstrap.bundle.min.js"><\/script>\n    <script src="./assets/vendor/aos/aos.js"><\/script>\n    <script src="./assets/vendor/glightbox/js/glightbox.min.js"><\/script>\n    <script src="./assets/vendor/isotope-layout/isotope.pkgd.min.js"><\/script>\n    <script src="./assets/vendor/swiper/swiper-bundle.min.js"><\/script>\n    <script src="./assets/vendor/purecounter/purecounter_vanilla.js"><\/script>\n    <!-- <script is:inline src="./assets/vendor/php-email-form/validate.js"><\/script> -->\n    <script src="./assets/js/main.js"><\/script>\n  </body>\n</html>'])), title, renderHead(), renderComponent($$result, "Navbar", $$Navbar, {}), renderSlot($$result, $$slots["default"]), showFooter && renderTemplate`${renderComponent($$result, "Footer", $$Footer, {})}`);
}, "C:/Users/Walter/Downloads/ADC-testing/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<main id="main">
    <!-- ======= Breadcrumbs ======= -->
    <div class="breadcrumbs d-flex align-items-center" style="background-image: url('assets/img/hero-carousel/hero-carousel-3.jpg');">
      <div class="container position-relative d-flex flex-column align-items-center" data-aos="fade">
        <h2>About</h2>
        <ol>
          <li><a href="/">Home</a></li>
          <li>About</li>
        </ol>
      </div>
    </div><!-- End Breadcrumbs -->

    <!-- ======= About Section ======= -->
    <section id="about" class="about">
      <div class="container" data-aos="fade-up">
        <div class="row position-relative">
          <div class="row gy-4">
            <div class="col-lg-12">
              <div class="our-story">
                <h3>Our Story</h3>
                <p class="align">
                  ADC Tanzania Limited is registered and licensed to operate in
                  Tanzania. It is a sister company to ADC Rwanda which has been
                  operating in Rwanda since 2006. ADC was formed after observing
                  the gaps in most businesses in Rwanda and Tanzania that affect
                  business growth and sustainable performance. Such gaps called
                  for the need to consider provision of Business Development
                  Service aiming to transform businesses in the two countries to
                  achieve sustainable growth and performance.
                </p>
                <ul>
                  <li>
                    <span><strong>Our Vision</strong> is to become a partner of choice
                      in business transformation and value creation across East Africa
                      Region.</span>
                  </li>
                  <li>
                    <span><strong>Our mission</strong> is to support enterprises by
                      providing innovative solutions for sustainable business growth.</span>
                  </li>
                  <!-- <i class="bi bi-arrow-right-circle-fill"></i>  -->
                  <!-- <i class="bi bi-arrow-right-circle-fill"></i>  -->
                </ul>

                <p class="align">
                  Our target customers are MSMEs, Cooperatives mainly in
                  agribusiness value chain, banks, and financial institutions.
                  ADC predominantly targets youth and women MSMEs to address
                  major challenge of unemployment in the region and improve
                  their lives and livelihoods.
                </p>

                <p class="align">
                  In achieving its vision, ADC has been working with like-minded
                  Development Partners, Government, and the private Sector
                  through supporting them in executing various initiatives and
                  programmes that target the same customers. Among other
                  partners is the United States African Development Foundation
                  (USADF) in the implementation of its programmes that promote
                  development of small holder agricultural producer groups,
                  small-scale agribusinesses, and SMEs. Under this partnership,
                  USADF and ADC have been able to create significant impact on
                  various businesses across Tanzania and Rwanda in the areas of
                  energy, agricultural farming and processing of paddy, avocado,
                  coffee and maize, aquaculture, trading, etc.
                </p>

                <p class="align">
                  Besides the work under the USADF Cooperative Agreement and
                  under the Ministry of agriculture projects, ADC accumulated
                  experiences in provision of Business Advisory Services that
                  include USAID/ Private Sector Driven Agriculture Growth
                  (PSDAG); USAID/ Land O’ Lakes, Inc. Implementation of the Seed
                  Cooperative Alliance Project (SCA); Global Alliance for
                  Improved Nutrition (GAIN), International Finance Corporation
                  (IFC) through the Rwanda Investment Climate Reform Program.
                </p>

                <p class="align">
                  Besides the partnership with USADF, ADC accumulated
                  experiences in provision of business advisory services in
                  various partnership such as USAID/ Private Sector Driven
                  Agriculture Growth (PSDAG); USAID/ Land O’ Lakes Inc;
                  Implementation of the Seed Cooperative Alliance Project (SCA);
                  Global Alliance for Improved Nutrition (GAIN); and
                  International Finance Corporation (IFC) through the Rwanda
                  Investment Climate Reform Program.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End About Section -->

      <!-- ======= Alt Services Section ======= -->
      <section id="alt-services" class="alt-services">
        <div class="container" data-aos="fade-up">
          <div class="row justify-content-around gy-4">
            <div class="col-lg-6 img-bg" style="background-image: url('assets/img/hero-carousel/hero-carousel-3.jpg');" data-aos="zoom-in" data-aos-delay="100">
            </div>

            <div class="col-lg-5 d-flex flex-column justify-content-center">
              <h3>Strategic Focus</h3>
              <p class="align">
                In executing its vision and purpose, ADC has developed its
                3-year Strategic Plan which is defined by three (3) key
                strategic pillars. These are
              </p>

              <div class="icon-box d-flex position-relative" data-aos="zoom-in-up" data-aos-delay="100">
                <i class="bi bi-bank2 flex-shrink-0"></i>
                <div>
                  <p class="align">
                    Key player in Financial Sector Transformation by providing
                    solutions to banks and financial institutions.
                  </p>
                </div>
              </div><!-- End Icon Box -->

              <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="200">
                <i class="bi bi-graph-up-arrow flex-shrink-0"></i>
                <div>
                  <p class="align">
                    Key player in SME Business Growth by providing solutions to
                    SMEs particularly women and youth
                  </p>
                </div>
              </div><!-- End Icon Box -->

              <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="300">
                <i class="bi bi-cpu flex-shrink-0"></i>
                <div>
                  <p class="align">
                    Drive digitalization of Businesses for Efficiency through
                    providing digital solutions to various businesses
                    particularly banks, financial institutions, and SMEs.
                  </p>
                </div>
              </div><!-- End Icon Box -->
            </div>
          </div>
        </div>
      </section><!-- End Alt Services Section -->

     
    </section><!-- End #main -->
  </main>
` })}`;
}, "C:/Users/Walter/Downloads/ADC-testing/src/pages/about.astro", void 0);

const $$file = "C:/Users/Walter/Downloads/ADC-testing/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, about as a };
