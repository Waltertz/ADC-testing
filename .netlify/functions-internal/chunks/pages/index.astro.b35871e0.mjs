import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../astro.6bda4046.mjs';
import 'html-escaper';
import { $ as $$Layout } from './about.astro.50e30c6d.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "ADC" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["\n  ", `<section id="hero" class="hero">
    <div class="info d-flex align-items-center">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6 text-center">
            <h2 data-aos="fade-down">
              Building together <span> <br> a better future</span>
            </h2>
            <!-- <p data-aos="fade-up"><strong> We are a business development service aiming at transforming businesses and achieve sustainable growth and performance.</strong></p> -->
            <a data-aos="fade-up" data-aos-delay="200" href="#main" class="btn-get-started">Get Started</a>
          </div>
        </div>
      </div>
    </div>

    <div id="hero-carousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
      <!--<div class="carousel-item active">
    <video controls width="100%" height="450px" >
      <video> 
        <source src="assets/img/hero-carousel/grantee.mp4" type="video/mp4">
      
    </video>
  </div> -->

      <div class="carousel-item active">
        <div class="video-container">
          <video id="autoplay-video" autoplay loop muted>
            <source src="assets/img/hero-carousel/adcvid.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <!-- <div
        class="carousel-item active"
        style="background-image: url(assets/img/hero-carousel/hero-carousel-5.jpg)"
      >
      </div>
      <div
        class="carousel-item"
        style="background-image: url(assets/img/hero-carousel/hero-carousel-6.jpg)"
      >
      </div>

      <div
        class="carousel-item"
        style="background-image: url(assets/img/hero-carousel/hero-carousel-7.jpg)"
      >
      </div>
      <div
        class="carousel-item active"
        style="background-image: url(assets/img/hero-carousel/hero-carousel-8.jpg)"
      >
      </div>
      <div
        class="carousel-item"
        style="background-image: url(assets/img/hero-carousel/hero-carousel-9.jpg)"
      >
      </div>

      <div
        class="carousel-item"
        style="background-image: url(assets/img/hero-carousel/hero-carousel-10.jpg)"
      >
      </div> -->

      <!-- <a
        class="carousel-control-prev"
        href="#hero-carousel"
        role="button"
        data-bs-slide="prev"
      >
        <span
          class="carousel-control-prev-icon bi bi-chevron-left"
          aria-hidden="true"></span>
      </a>

      <a
        class="carousel-control-next"
        href="#hero-carousel"
        role="button"
        data-bs-slide="next"
      >
        <span
          class="carousel-control-next-icon bi bi-chevron-right"
          aria-hidden="true"></span>
      </a> -->
    </div>
  </section>

  <main id="main">
    <!-- ======= Constructions Section ======= -->
    <section id="constructions" class="constructions">
      <div class="container" data-aos="fade-up">
        <div class="section-header">
          <h2>Who we are</h2>
          <p>
            We are Business Development Services Provider, offering a range of
            business support options and solutions, tailored to your needs, at
            any stage of your business growth. We are registered and licensed to
            operate in Tanzania. Our desire to help you achieve business growth
            and sustainable performance, together with the gaps we identified is
            the reason for our existence.
          </p>
        </div>

        <div class="row gy-4">
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div class="card-item">
              <div class="row">
                <div class="col-xl-5">
                  <div class="card-bg" style="background-image: url(assets/img/mis.jpg);">
                  </div>
                </div>
                <div class="col-xl-7 d-flex align-items-center">
                  <div class="card-body">
                    <h4 class="card-title">Vision</h4>
                    <p>
                      Become a partner of choice in business transformation and
                      value creation across East Africa Region.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End Card Item -->

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <div class="card-item">
              <div class="row">
                <div class="col-xl-5">
                  <div class="card-bg" style="background-image: url(assets/img/cons.jpg );">
                  </div>
                </div>
                <div class="col-xl-7 d-flex align-items-center">
                  <div class="card-body">
                    <h4 class="card-title">Mission</h4>
                    <p>
                      Support enterprises by providing innovative solutions for
                      sustainable business growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div><!--End Card Item-->
        </div>
      </div>
    </section><!-- End Constructions Section -->

    <section id="testimonials" class="testimonials section-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-header">
          <h2>Our values</h2>
        </div>

        <div class="slides-2 swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="testimonial-wrap">
                <div class="testimonial-item">
                  <img src="assets/img/home/rebecca.jpg" class="testimonial-img" alt="">

                  <h3>Rebecca Ruzibuka</h3>
                  <h4>Chairperson</h4>

                  <p>
                    <i class="bi bi-quote quote-icon-left"></i>
                    <strong>Teamwork :</strong> we work as a team and respect each
                    other
                    <i class="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div><!-- End testimonial item -->

            <div class="swiper-slide">
              <div class="testimonial-wrap">
                <div class="testimonial-item">
                  <img src="assets/img/home/esther .jpg" class="testimonial-img" alt="">

                  <h3>Esther Kitoka</h3>
                  <h4>Executive Director</h4>

                  <p>
                    <i class="bi bi-quote quote-icon-left"></i>
                    <strong>Integrity :</strong> we are ethical and reliable
                    <i class="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div><!-- End testimonial item -->

            <div class="swiper-slide">
              <div class="testimonial-wrap">
                <div class="testimonial-item">
                  <img src="assets/img/home/leornard.jpg" class="testimonial-img" alt="">
                  <h3>Leonard Kitoka</h3>
                  <h4>Director</h4>

                  <p>
                    <i class="bi bi-quote quote-icon-left"></i>
                    <strong>Innovative :</strong> we go extra mile to deliver solutions
                    <i class="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div><!-- End testimonial item -->

            <div class="swiper-slide">
              <div class="testimonial-wrap">
                <div class="testimonial-item">
                  <img src="assets/img/home/devotha.jpg" class="testimonial-img" alt="">
                  <h3>Devotha Minzi</h3>
                  <h4>Director</h4>

                  <p>
                    <i class="bi bi-quote quote-icon-left"></i>
                    <strong> Professional :</strong> We use our knowledge and skills
                    to deliver best customer experience
                    <i class="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div><!-- End testimonial item -->
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </section><!-- End Testimonials Section -->

    <!-- ======= Services Section ======= -->
    <section id="services" class="services section-bg">
      <div class="container">
        <!-- data-aos="fade-up"> -->

        <div class="section-header">
          <h2>Strategic Pillars</h2>
        </div>
        <div class="row gy-4">
          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div class="service-item position-relative bg-primary">
              <div class="icon">
                <i class="bi bi-bank2 flex-shrink-0 text-white"></i>
              </div>

              <p class="text-white">
                player in Financial Sector transformation by providing solutions
                to banks and financial institutions
              </p>
            </div>
          </div><!-- End Service Item -->

          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div class="service-item position-relative bg-primary">
              <div class="icon">
                <i class="bi bi-graph-up-arrow flex-shrink-0 text-white"></i>
              </div>

              <p class="text-white">
                Key player in SME Business Growth by providing solutions to SMEs
                particularly women and youth.
              </p>
            </div>
          </div><!-- End Service Item -->

          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div class="service-item position-relative bg-primary">
              <div class="icon">
                <i class="bi bi-cpu flex-shrink-0 text-white"></i>
              </div>

              <p class="text-white">
                Drive digitalization of Businesses for efficiency through
                providing digital solutions to various businesses.
              </p>
            </div>
          </div><!-- End Service Item -->
        </div>
      </div>
    </section><!-- End Services Section -->

    <section id="features" class="features section-bg">
      <div class="section-header">
        <h2>What we offer</h2>
      </div>

      <div class="container" data-aos="fade-up">
        <ul class="nav nav-tabs row g-2 d-flex">
          <li class="nav-item col-3">
            <a class="nav-link active show" data-bs-toggle="tab" data-bs-target="#tab-1">
              <h4>Capacity Building</h4>
            </a>
          </li><!-- End tab nav item -->

          <li class="nav-item col-3">
            <a class="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2">
              <h4>Consultancy Services</h4>
            </a><!-- End tab nav item -->

            </li><li class="nav-item col-3">
              <a class="nav-link" data-bs-toggle="tab" data-bs-target="#tab-3">
                <h4>Outsourcing Services</h4>
              </a>
            </li><!-- End tab nav item -->

            <li class="nav-item col-3">
              <a class="nav-link" data-bs-toggle="tab" data-bs-target="#tab-4">
                <h4>Digitalization</h4>
              </a>
            </li><!-- End tab nav item -->
          

          <div class="tab-content">
            <div class="tab-pane active show" id="tab-1">
              <div class="row">
                <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="100">
                  <ul>
                    <li>
                      <i class="bi bi-check2-all"></i>Strategy & Performance
                    </li>
                    <li>
                      <i class="bi bi-check2-all"></i>Board Governance and
                      Leadership
                    </li>
                    <li>
                      <i class="bi bi-check2-all"></i>Risk Management &
                      Environmental and Social Governance
                    </li>
                    <li><i class="bi bi-check2-all"></i>Project Management</li>
                    <li>
                      <i class="bi bi-check2-all"></i>Advanced Credit Analysis
                    </li>
                    <li>
                      <i class="bi bi-check2-all"></i>Record Keeping and
                      Financial Management
                    </li>
                    <li>
                      <i class="bi bi-check2-all"></i>Business Analysis and
                      Planning
                    </li>
                    <li>
                      <i class="bi bi-check2-all"></i>Talent Acquisition &
                      Management
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6 order-1 order-lg-2 text-center" data-aos="fade-up" data-aos-delay="200">
                  <img src="assets/img/home/capacity.jpg" alt="" class="img-fluid">
                </div>
              </div>
            </div><!-- End tab content item -->

            <div class="tab-pane" id="tab-2">
              <div class="row">
                <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                  <ul>
                    <li>
                      <i class="bi bi-check2-all"></i>Productivity & Cost
                      Efficiency
                    </li>
                    <li><i class="bi bi-check2-all"></i>Organization Design</li>
                    <li>
                      <i class="bi bi-check2-all"></i>Strategy Development
                    </li>
                    <li>
                      <i class="bi bi-check2-all"></i>Develop Policies &
                      Procedures
                    </li>
                    <li>
                      <i class="bi bi-check2-all"></i>Resource Mobilisation
                    </li>
                    <li>
                      <i class="bi bi-check2-all"></i>Talent Acquisition &
                      Management Strategy
                    </li>
                    <li>
                      <i class="bi bi-check2-all"></i>Organization Capacity
                      Assessment for SME Segment
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6 order-1 order-lg-2 text-center">
                  <img src="assets/img/home/consult.jpg" alt="" class="img-fluid">
                </div>
              </div>
            </div><!-- End tab content item -->

            <div class="tab-pane" id="tab-3">
              <div class="row">
                <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                  <ul>
                    <li><i class="bi bi-check2-all"></i>Project Management</li>
                    <li>
                      <i class="bi bi-check2-all"></i>Transaction Processing
                    </li>
                    <li><i class="bi bi-check2-all"></i>Payroll Management</li>
                    <li><i class="bi bi-check2-all"></i>Research & Surveys</li>
                    <li><i class="bi bi-check2-all"></i>Risk Management</li>
                    <li><i class="bi bi-check2-all"></i>Internal Audit</li>
                    <li><i class="bi bi-check2-all"></i>System Audit</li>
                  </ul>
                </div>
                <div class="col-lg-6 order-1 order-lg-2 text-center">
                  <img src="assets/img/home/outsourcing.jpg" alt="" class="img-fluid">
                </div>
              </div>
            </div><!-- End tab content item -->

            <div class="tab-pane" id="tab-4">
              <div class="row">
                <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                  <ul>
                    <li>
                      <i class="bi bi-check2-all"></i>Built Analytical Tools
                    </li>
                    <li><i class="bi bi-check2-all"></i>Collection Systems</li>
                    <li>
                      <i class="bi bi-check2-all"></i>End to End Credit
                      Processes to Improve Turnaround Time (TAT)
                    </li>
                    <li>
                      <i class="bi bi-check2-all"></i>Enterprise Risk Management
                      System
                    </li>
                    <li>
                      <i class="bi bi-check2-all"></i>Transaction Processing to
                      Reduce Head Count and Improve TAT
                    </li>
                    <li>
                      <i class="bi bi-check2-all"></i>Digital Tool for
                      Monitoring Stocks, Farming Activities, Performance
                      Tracking, etc
                    </li>
                    <li>
                      <i class="bi bi-check2-all"></i>End to End Organization
                      Workflow (Paperless)
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6 order-1 order-lg-2 text-center">
                  <img src="assets/img/home/digitillization.jpg" alt="" class="img-fluid">
                </div>
              </div>
            </div><!-- End tab content item -->
          </div>
        </ul>
      </div><!-- End Features Section -->

      <!-- ======= Alt Services Section ======= -->
      <section id="alt-services" class="alt-services">
        <div class="section-header">
          <h2>Opportunities</h2>
        </div>

        <div class="container" data-aos="fade-up">
          <div class="col-lg-12 d-flex flex-column justify-content-center">
            <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="100">
              <i class="bi bi-wallet flex-shrink-0"></i>
              <div>
                <h4>Grants</h4>
                <p>
                  RFP- USADF call for proposals from Agricultural Cooperatives,
                  Producer Groups and Businesses due 15 Oct 2022 is Closed.
                </p>
              </div>
            </div><!-- End Icon Box -->

            <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="200">
              <i class="bi bi-book-half flex-shrink-0"></i>
              <div>
                <h4>Consultancy</h4>
                <p>
                  Send your CV to info@adctanzania.co.tz to apply for consultant
                  opportunities with ADC.
                </p>
              </div>
            </div><!-- End Icon Box -->

            <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="300">
              <i class="bi bi-building flex-shrink-0"></i>
              <div>
                <h4>Jobs</h4>
                <p>There are no current job openings.</p>
              </div>
            </div><!-- End Icon Box -->

            <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="400">
              <i class="bi bi-activity flex-shrink-0"></i>
              <div>
                <h4>Procurement</h4>
                <p>There are no current procurement opportunities.</p>
              </div>
            </div><!-- End Icon Box -->
          </div>
        </div>
      </section><!-- End Alt Services Section -->

      <!-- ======= Features Section ======= -->

      <!-- ======= Our Projects Section ======= -->
      <section id="projects" class="projects">
        <div class="container" data-aos="fade-up">
          <div class="section-header">
            <h2>Projects</h2>
          </div>

          <div class="portfolio-isotope" data-portfolio-filter="*" data-portfolio-layout="masonry" data-portfolio-sort="original-order">
            <ul class="portfolio-flters" data-aos="fade-up" data-aos-delay="100">
              <li data-filter="*" class="filter-active">All</li>
              <li data-filter=".filter-remodeling">Energy</li>
              <li data-filter=".filter-construction">Women Led</li>
              <li data-filter=".filter-repairs">Agribusiness</li>
              <li data-filter=".youth">Youth</li>
            </ul><!-- End Projects Filters -->

            <div class="row gy-4 portfolio-container" data-aos="fade-up" data-aos-delay="200">
              <div class="col-lg-3 col-md-6 portfolio-item filter-remodeling">
                <div class="portfolio-content h-100">
                  <img src="assets/img/home/ageco.jpg" class="img-fluid" alt="">
                  <div class="portfolio-info">
                    <h4>Energy</h4>
                    <p>AGECO Energy Ltd</p>
                    <a href="energy-details" title="More Details" class="details-link"><i class="bi bi-three-dots"></i></a>
                  </div>
                </div>
              </div><!-- End Projects Item -->

              <div class="col-lg-3 col-md-6 portfolio-item filter-construction">
                <div class="portfolio-content h-100">
                  <img src="assets/img/home/aquafarms.jpg" class="img-fluid" alt="">
                  <div class="portfolio-info">
                    <h4>Women Led</h4>
                    <p>Aqua Farms Org</p>
                    <a href="women-led" title="More Details" class="details-link"><i class="bi bi-three-dots"></i></a>
                  </div>
                </div>
              </div><!-- End Projects Item -->

              <div class="col-lg-3 col-md-6 portfolio-item filter-repairs">
                <div class="portfolio-content h-100">
                  <img src="assets/img/home/kanyele.jpg" class="img-fluid" alt="">
                  <div class="portfolio-info">
                    <h4>Agribusiness</h4>
                    <p>Kanyele AMCOS</p>
                    <a href="agribusines-details" title="More Details" class="details-link"><i class="bi bi-three-dots"></i></a>
                  </div>
                </div>
              </div><!-- End Projects Item -->

              <div class="col-lg-3 col-md-6 portfolio-item filter-remodeling">
                <div class="portfolio-content h-100">
                  <img src="assets/img/home/galaxy.jpg" class="img-fluid" alt="">
                  <div class="portfolio-info">
                    <h4>Energy</h4>
                    <p>Galaxy Energy</p>
                    <a href="energy-details" title="More Details" class="details-link"><i class="bi bi-three-dots"></i></a>
                  </div>
                </div>
              </div><!-- End Projects Item -->

              <div class="col-lg-3 col-md-6 portfolio-item filter-construction">
                <div class="portfolio-content h-100">
                  <img src="assets/img/home/aanafaka.jpg" class="img-fluid" alt="">
                  <div class="portfolio-info">
                    <h4>Women Led</h4>
                    <p>AA NAFAKA</p>
                    <a href="women-led" title="More Details" class="details-link"><i class="bi bi-three-dots"></i></a>
                  </div>
                </div>
              </div><!-- End Projects Item -->

              <div class="col-lg-3 col-md-6 portfolio-item filter-repairs">
                <div class="portfolio-content h-100">
                  <img src="assets/img/home/uwamaru.jpg" class="img-fluid" alt="">
                  <div class="portfolio-info">
                    <h4>Agribusiness</h4>
                    <p>UWAMARU AMCOS</p>
                    <a href="agribusines-details" title="More Details" class="details-link"><i class="bi bi-three-dots"></i></a>
                  </div>
                </div>
              </div><!-- End Projects Item -->

              <div class="col-lg-3 col-md-6 portfolio-item filter-remodeling">
                <div class="portfolio-content h-100">
                  <img src="assets/img/home/lucas.jpg" class="img-fluid" alt="">
                  <div class="portfolio-info">
                    <h4>Energy</h4>
                    <p>Lucas Engineering and Management Services</p>
                    <a href="energy-details" title="More Details" class="details-link"><i class="bi bi-three-dots"></i></a>
                  </div>
                </div>
              </div><!-- End Projects Item -->

              <div class="col-lg-3 col-md-6 portfolio-item filter-construction">
                <div class="portfolio-content h-100">
                  <img src="assets/img/home/academy.jpg" class="img-fluid" alt="">
                  <div class="portfolio-info">
                    <h4>Women Led</h4>
                    <p>Academy for Women Entrepreneurship</p>
                    <a href="women-led" title="More Details" class="details-link"><i class="bi bi-three-dots"></i></a>
                  </div>
                </div>
              </div><!-- End Projects Item -->

              <div class="col-lg-3 col-md-6 portfolio-item filter-repairs">
                <div class="portfolio-content h-100">
                  <img src="assets/img/home/laela.jpg" class="img-fluid" alt="">
                  <div class="portfolio-info">
                    <h4>Agribusiness</h4>
                    <p>Laela AMCOS</p>
                    <a href="agribusines-details" title="More Details" class="details-link"><i class="bi bi-three-dots"></i></a>
                  </div>
                </div>
              </div><!-- End Projects Item -->

              <div class="col-lg-3 col-md-6 portfolio-item filter-remodeling">
                <div class="portfolio-content h-100">
                  <img src="assets/img/home/tahude.jpg" class="img-fluid" alt="">
                  <div class="portfolio-info">
                    <h4>Energy</h4>
                    <p>TAHUDE</p>
                    <a href="energy-details" title="More Details" class="details-link"><i class="bi bi-three-dots"></i></a>
                  </div>
                </div>
              </div><!-- End Projects Item -->
              <div class="col-lg-3 col-md-6 portfolio-item filter-repairs">
                <div class="portfolio-content h-100">
                  <img src="assets/img/home/masama.jpg" class="img-fluid" alt="">
                  <div class="portfolio-info">
                    <h4>Agribusiness</h4>
                    <p>Masama Mula AMCOS</p>
                    <a href="agribusines-details" title="More Details" class="details-link"><i class="bi bi-three-dots"></i></a>
                  </div>
                </div>
              </div><!-- End Projects Item -->
              <div class="col-lg-3 col-md-6 portfolio-item filter-repairs">
                <div class="portfolio-content h-100">
                  <img src="assets/img/home/azimio.jpg" class="img-fluid" alt="">
                  <div class="portfolio-info">
                    <h4>Agribusiness</h4>
                    <p>Azimio Mswiswi</p>
                    <a href="agribusines-details" title="More Details" class="details-link"><i class="bi bi-three-dots"></i></a>
                  </div>
                </div>
              </div><!-- End Projects Item -->
              <div class="col-lg-3 col-md-6 portfolio-item filter-repairs">
                <div class="portfolio-content h-100">
                  <img src="assets/img/home/siha.jpg" class="img-fluid" alt="">
                  <div class="portfolio-info">
                    <h4>Agribusiness</h4>
                    <p>Siha Kiyeyo</p>
                    <a href="agribusines-details" title="More Details" class="details-link"><i class="bi bi-three-dots"></i></a>
                  </div>
                </div>
              </div><!-- End Projects Item -->
              <div class="col-lg-3 col-md-6 portfolio-item filter-agribusiness">
                <div class="portfolio-content h-100">
                  <img src="assets/img/home/profate.jpg" class="img-fluid" alt="">
                  <div class="portfolio-info">
                    <h4>Agribusiness</h4>
                    <p>Profate</p>
                    <a href="agribusines-details" title="More Details" class="details-link"><i class="bi bi-three-dots"></i></a>
                  </div>
                </div>
              </div><!-- End Projects Item -->
              <div class="col-lg-3 col-md-6 portfolio-item filter-repairs">
                <div class="portfolio-content h-100">
                  <img src="assets/img/home/kmc.jpg" class="img-fluid" alt="">
                  <div class="portfolio-info">
                    <h4>Agribusiness</h4>
                    <p>Khebhandza</p>
                    <a href="agribusines-details" title="More Details" class="details-link"><i class="bi bi-three-dots"></i></a>
                  </div>
                </div>
              </div><!-- End Projects Item -->
              <div class="col-lg-3 col-md-6 portfolio-item filter-repairs">
                <div class="portfolio-content h-100">
                  <img src="assets/img/home/igamba.jpg" class="img-fluid" alt="">
                  <div class="portfolio-info">
                    <h4>Agribusiness</h4>
                    <p>Igamba Mpya</p>
                    <a href="agribusines-details" title="More Details" class="details-link"><i class="bi bi-three-dots"></i></a>
                  </div>
                </div>
              </div><!-- End Projects Item -->

              <div class="col-lg-3 col-md-6 portfolio-item filter-construction">
                <div class="portfolio-content h-100">
                  <img src="assets/img/projects/kasole1.jpg" class="img-fluid" alt="" style="min-height: 314px;">
                  <div class="portfolio-info">
                    <h4>Women Led</h4>
                    <p>Kasole</p>
                    <a href="women-led" title="More Details" class="details-link"><i class="bi bi-three-dots"></i></a>
                  </div>
                </div>
              </div><!-- End Projects Item -->

              <div class="col-lg-3 col-md-6 portfolio-item youth">
                <div class="portfolio-content h-100">
                  <img src="assets/img/projects/tef.jpg" class="img-fluid" alt="" style="min-height: 314px;">
                  <div class="portfolio-info">
                    <h4>Youth</h4>
                    <p>TEF</p>
                    <a href="agribusines-details" title="More Details" class="details-link"><i class="bi bi-three-dots"></i></a>
                  </div>
                </div>
              </div><!-- End Projects Item -->
            </div><!-- End Projects Container -->
          </div>
        </div>
      </section>

      <section id="recent-blog-posts" class="recent-blog-posts">
        <div class="container" data-aos="fade-up">
          <div class="section-header">
            <h2>News</h2>
          </div>

          <div class="row gy-5">
            <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div class="post-item position-relative h-100 bg-primary text-white font-bold">
                <div class="post-img position-relative overflow-hidden">
                  <img src="assets/img/blog/news2.jpg" class="img-fluid" alt="">
                  <span class="post-date">July 28th 2023</span>
                </div>

                <div class="post-content d-flex flex-column">
                  <h3 class="post-title font-bold text-white">
                    Grantees Workshop Day 3
                  </h3>

                  <div class="meta d-flex align-items-center">
                    <p>
                      Together with grantees, we managed to attend some traings
                      as we visited SUGECO company
                    </p>
                  </div>

                  <hr style="border-top: 2px solid white !important;">

                  <a href="https://youtu.be/uzXFuHP4MGc" class="readmore stretched-link">
                    <span style="color: white !important; font-weight: bold">Read More</span><i class="bi bi-arrow-right" style="color: white"></i></a>
                </div>
              </div>
            </div><!-- End post item -->
            <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div class="post-item position-relative h-100 bg-primary text-white font-bold">
                <div class="post-img position-relative overflow-hidden">
                  <img src="assets/img/news27th.jpeg" class="img-fluid" alt="">
                  <span class="post-date">July 27th 2023</span>
                </div>

                <div class="post-content d-flex flex-column">
                  <h3 class="post-title font-bold text-white">
                    Grantees Workshop Day 2
                  </h3>

                  <div class="meta d-flex align-items-center">
                    <p>
                      Had to squeeze these shots amidst all the excitement at
                      today's ....
                    </p>
                  </div>

                  <hr style="border-top: 2px solid white !important;">

                  <a href="https://youtu.be/J-yhRdyc44A" class="readmore stretched-link">
                    <span style="color: white !important; font-weight: bold">Read More</span><i class="bi bi-arrow-right" style="color: white"></i></a>
                </div>
              </div>
            </div><!-- End post item -->
            <!-- <div
              style="background-color: blue !important; color: white !important; font-weight: bold"
              class="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="post-item position-relative h-100">
                <div class="post-img position-relative overflow-hidden">
                  <img
                    src="assets/img/news27th.jpeg"
                    class="img-fluid"
                    alt=""
                  />
                </div>

                <div class="post-content d-flex flex-column">
                  <h3 class="post-title">Grantees Workshop</h3>

                  <div class="meta d-flex align-items-center">
                    <p>
                      "Had to squeeze these shots amidst all the excitement at
                      today's ....
                    </p>
                  </div>

                  <hr />

                  <a
                    href="https://www.linkedin.com/posts/adc-tanzania_we-are-excited-to-host-the-first-usadf-adc-activity-7087751509010001920-hDCl?utm_source=share&utm_medium=member_desktop"
                    class="readmore stretched-link"
                  >
                    <span>Read More</span><i class="bi bi-arrow-right"></i></a
                  >
                </div>
              </div>
            </div> -->

            <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div class="post-item position-relative h-100 bg-primary text-white font-bold">
                <div class="post-img position-relative overflow-hidden">
                  <img src="assets/img/blog/news1.jpg" class="img-fluid" alt="">
                  <span class="post-date">July 26th 2023</span>
                </div>

                <div class="post-content d-flex flex-column">
                  <h3 class="post-title font-bold text-white">
                    Grantees Workshop Day 1
                  </h3>

                  <div class="meta d-flex align-items-center">
                    <p>
                      We are excited to host the first USADF-ADC Workshop in
                      Morogoro, Tanzania, where USADF grantee cooperative
                      societies unite! More than 20 representatives from 6
                      Cooperative Societies will participate representing ...
                    </p>
                  </div>

                  <hr style="border-top: 2px solid white !important;">

                  <a href="https://youtu.be/tcJm2DIgNcE" class="readmore stretched-link">
                    <span style="color: white !important; font-weight: bold">Read More</span><i class="bi bi-arrow-right" style="color: white"></i></a>
                </div>
              </div>
            </div><!-- End post item -->
          </div>
        </div>
      </section>

      <!-- <section id="blog" class="blog">
      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row g-5">


          <div class="section-header">
            <h2>News</h2>
            </div>
      
        
          <div class="col-lg-6">

            <div class="sidebar">

          

              <div class="sidebar-item recent-posts">
                <h3 class="sidebar-title">Recent Posts</h3>

                <div class="mt-3">

                  <div class="post-item mt-3">
                    <img src="assets/img/meeting.jpg" alt="">
                    <div>
                      <h4><a href="https://www.linkedin.com/posts/adc-tanzania_aight-folks-lets-admit-it-that-workshop-activity-7091704111326257152-O55q?utm_source=share&utm_medium=member_desktop">Grantees Workshop</a></h4>
                      <time>July 26-28, 2022</time>
                    </div>
                  </div>

                  <div class="post-item">
                    <img src="assets/img/meeting.jpg" alt="">
                    <div>
                      <h4><a href="blog-details">Youth leading the community</a></h4>
                      <time datetime="2020-01-01">Oct 13, 2022</time>
                    </div>
                  </div>

                  <div class="post-item">
                    <img src="assets/img/meeting.jpg" alt="">
                    <div>
                      <h4><a href="blog-details">Meeting with our partners</a></h4>
                      <time datetime="2020-01-01">Oct 10, 2022</time>
                    </div>
                  </div>

              

                </div>

              </div>

            

            </div>

          </div>
        </div>

      </div>
    </section>  -->

      <!--<section style="text-align: center;">
      <p><h4>Number of Visits</h4>
    
         <a href='https://acadooghostwriter.com/'></a> <script type='text/javascript' src='https://www.freevisitorcounters.com/auth.php?id=bb306eb3e855f7eaaf452dae8e93554ca673a7ab'><\/script> 
         <script type="text/javascript" src="https://www.freevisitorcounters.com/en/home/counter/992918/t/3"><\/script> 
        
       <a href='https://acadooghostwriter.com/'></a> <script type='text/javascript' src='https://www.freevisitorcounters.com/auth.php?id=bb306eb3e855f7eaaf452dae8e93554ca673a7ab'><\/script> 
   <script type="text/javascript" src="https://www.freevisitorcounters.com/en/home/counter/992918/t/3"><\/script> 
    
    </p>
    </section> -->
    </section><!-- End #main -->
  </main>
`])), maybeRenderHead()) })}`;
}, "C:/Users/Walter/Downloads/ADC-testing/src/pages/index.astro", void 0);

const $$file = "C:/Users/Walter/Downloads/ADC-testing/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
