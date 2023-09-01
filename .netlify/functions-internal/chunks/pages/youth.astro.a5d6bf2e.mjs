import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../astro.6bda4046.mjs';
import 'html-escaper';
import { $ as $$Layout } from './about.astro.50e30c6d.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';

const $$Astro = createAstro();
const $$Youth = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Youth;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Project details" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<main id="main">

    <!-- ======= Breadcrumbs ======= -->
    <div class="breadcrumbs d-flex align-items-center" style="background-image: url(assets/img/hero-carousel/hero-carousel-3.jpg);">
      <div class="container position-relative d-flex flex-column align-items-center" data-aos="fade">

        <h2>Project Details</h2>
        <ol>
          <li><a href="/">Home</a></li>
          <li>Youth Project Details</li>
        </ol>

      </div>
    </div><!-- End Breadcrumbs -->

    <!-- ======= Projet Details Section ======= -->
    

    <section id="project-details" class="project-details">
      <div class="container" data-aos="fade-up" data-aos-delay="100">

       

        <div class="row justify-content-between gy-4 mt-4">


          <div class="col-lg-4"> 
          <div class="position-relative h-100">
            <div class="slides-1 portfolio-details-slider swiper">
              <div class="swiper-wrapper align-items-center">
  
                <div class="swiper-slide">
                  <img src="assets/img/projects/tef.jpg" alt="">
                  
                </div>
  
                <div class="swiper-slide">
                  
                  <img src="assets/img/projects/tef1.jpg" alt="">
                </div>

                <!--<div class="swiper-slide">
                  <img src="assets/img/lucas2.jpg" alt="">
                </div> -->
  
              </div>
              <div class="swiper-pagination"></div>
            </div>
           
  
          </div>
        </div>

        <div class="col-lg-6">
            <div class="portfolio-description">
              <h2>USADF-TEF Entrepreneurship programme</h2>
              <p class="align">
                In 2015, TEF Founder, Mr. Tony O. Elumelu, and his family committed USD$100 million to democratize luck and spread economic hope across Africa, by empowering 10,000 African women and men, over 10 years, through the annual Tony Elumelu Foundation Entrepreneurship Programme.
            </p>
<p class="align">
    After only 7 cycles into this Programme, the Tony Elumelu Foundation has disbursed over USD$85million to young and enterprising beneficiaries and empowered 18,000 African women and men, who have gone on to achieve their innovative concepts and who are solving Africa’s most challenging problems.
</p>            

<p class="align">
    Through partnering with United States African Development Foundation (USADF) and the support of ADC-Tanzania, The Tony Elumelu Foundation (TEF) has selected 55 Tanzanian entrepreneurs from a pool of hundreds of thousands of applications across all 54 African countries, where 58% of the beneficiaries are women entrepreneurs. Each entrepreneur receives non-refundable USD $5,000.
</p>

<p class="align">
    ADC-Tanzania works with beneficiaries (Tanzanian entrepreneurs) in collecting and verifying all the required business documents for fund disbursement as well as surveying to assess their business advancements.
</p>

            <!--  <div class="testimonial-item">
                <p>
                  <i class="bi bi-quote quote-icon-left"></i>
                  Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                  <i class="bi bi-quote quote-icon-right"></i>
                </p>
                <div>
                  <img src="assets/img/testimonials/testimonials-2.jpg" class="testimonial-img" alt="">
                  <h3>Sara Wilsson</h3>
                  <h4>Designer</h4>
                </div>
              </div> -->

              

            </div>
          </div>

          <div class="col-lg-2">
            <div class="portfolio-info">
              <h3>Project information</h3>
              <ul>
                <li><strong>Category</strong> <span>Youth</span></li>
                <li><strong>Status</strong> <span>Active</span></li>
                <li><strong>Location</strong> <span>Tanzania</span></li>

               
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section><!-- End Projet Details Section -->



  </main>
` })}`;
}, "C:/Users/Walter/Downloads/ADC-testing/src/pages/youth.astro", void 0);

const $$file = "C:/Users/Walter/Downloads/ADC-testing/src/pages/youth.astro";
const $$url = "/youth";

export { $$Youth as default, $$file as file, $$url as url };
