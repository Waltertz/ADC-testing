import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../astro.6bda4046.mjs';
import 'html-escaper';
import { $ as $$Layout } from './about.astro.50e30c6d.mjs';
/* empty css                          */import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';

const $$Astro = createAstro();
const $$Team = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Team;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Team", "class": "astro-6SQSH2PF" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<main id="main" class="astro-6SQSH2PF">
    <div class="breadcrumbs d-flex align-items-center astro-6SQSH2PF" style="background-image: url('assets/img/hero-carousel/hero-carousel-3.jpg');">
      <div class="container position-relative d-flex flex-column align-items-center astro-6SQSH2PF" data-aos="fade">
        <h2 class="astro-6SQSH2PF">Our Team</h2>
        <ol class="astro-6SQSH2PF">
          <li class="astro-6SQSH2PF"><a href="/" class="astro-6SQSH2PF">Home</a></li>
          <li class="astro-6SQSH2PF">Our Team</li>
        </ol>
      </div>
    </div>

    <section id="constructions" class="constructions astro-6SQSH2PF">
      <div class="container astro-6SQSH2PF" data-aos="fade-up">
        <div class="section-header astro-6SQSH2PF">
          <h2 class="astro-6SQSH2PF">OUR TEAM</h2>
          <p class="astro-6SQSH2PF">
            ADC is composed of well experienced team in the areas of banking,
            risk management, strategy formulation, project management,
            governance, leadership, audit, business development specifically
            SMEs, research and development, IT, business analytics, sales and
            marketing, agribusiness value chain, economics, and finance.
          </p>
        </div>
        <div class="section-header astro-6SQSH2PF">
          <h2 class="astro-6SQSH2PF">Board of Directors</h2>
        </div>
      </div>
    </section>

    <section class="astro-6SQSH2PF">
      <div class="row gy-4 astro-6SQSH2PF">
        <div class="col-lg-3 col-md-6 astro-6SQSH2PF" data-aos="fade-up" data-aos-delay="100">
          <article class="card-vm astro-6SQSH2PF">
            <img class="card__background astro-6SQSH2PF" src="assets/img/team/team-2.jpg" alt="Photo of Cartagena's cathedral at the background and some colonial style houses" width="1920" height="2193">
            <div class="card__content | flow astro-6SQSH2PF">
              <div class="card__content--container | flow astro-6SQSH2PF">
                <div class="card_content astro-6SQSH2PF">
                  <h2 class="card_title astro-6SQSH2PF">Chairperson</h2>
                </div>
                <h2 class="card__title astro-6SQSH2PF">Rebecca Ruzibuka</h2>
                <p class="align astro-6SQSH2PF">
                  Rebecca Ruzibuka is a Director of ADC Tanzania Ltd. She has
                  accumulated more than 35 years of experience working in
                  Tanzania and....
                  <!-- <a href="rebecca" class="readmore stretched-link"><span>Read More</span><i class="bi bi-arrow-right"></i></a>  -->
                </p>
              </div>
              <!-- <a href="rebecca">
                <button class="card__button"> Read more</button>
              </a> -->
              <div class="card__button tooltip astro-6SQSH2PF" onmouseover="showToolTip()">
                Hover over me
              </div>
            </div>
          </article>
          <span class="tooltiptext astro-6SQSH2PF">Tooltip text lorem fljsalfjadsl ldfs lfdkjalkfds jlkfjasl kfdjalkjf
            slkaj</span>
        </div>
        <div class="col-lg-3 col-md-6 astro-6SQSH2PF" data-aos="fade-up" data-aos-delay="100">
          <article class="card-vm astro-6SQSH2PF">
            <img class="card__background astro-6SQSH2PF" src="assets/img/team/team-1.jpg" alt="Photo of Cartagena's cathedral at the background and some colonial style houses" width="1920" height="2193">
            <div class="card__content | flow astro-6SQSH2PF">
              <div class="card__content--container | flow astro-6SQSH2PF">
                <div class="card_content astro-6SQSH2PF">
                  <h2 class="card_title astro-6SQSH2PF">Executive Director</h2>
                </div>
                <h2 class="card__title astro-6SQSH2PF">Esther Kitoka</h2>
                <p class="align astro-6SQSH2PF">
                  Esther is a seasoned banker having worked in the banking
                  sector as Bank Examiner for 9 years in the Bank of Tanzania
                  (Central Bank) and later as ....
                  <!-- <a href="rebecca" class="readmore stretched-link"><span>Read More</span><i class="bi bi-arrow-right"></i></a>  -->
                </p>
              </div>
              <a href="esther" class="astro-6SQSH2PF">
                <button class="card__button astro-6SQSH2PF"> Read more</button>
              </a>
            </div>
          </article>
        </div>

        <div class="col-lg-3 col-md-6 astro-6SQSH2PF" data-aos="fade-up" data-aos-delay="100">
          <article class="card-vm astro-6SQSH2PF">
            <img class="card__background astro-6SQSH2PF" src="assets/img/team/team-3.jpg" alt="Photo of Cartagena's cathedral at the background and some colonial style houses" width="1920" height="2193">
            <div class="card__content | flow astro-6SQSH2PF">
              <div class="card__content--container | flow astro-6SQSH2PF">
                <div class="card_content astro-6SQSH2PF">
                  <h2 class="card_title astro-6SQSH2PF">Director</h2>
                </div>
                <h2 class="card__title astro-6SQSH2PF">Leonard Kitoka</h2>
                <p class="align astro-6SQSH2PF">
                  Leonard is the Director of ADC Tanzania Ltd, and currently
                  Programme Director for the implementation of the USADF
                  Programme in Tanzania. Leonard is....
                  <!-- <a href="rebecca" class="readmore stretched-link"><span>Read More</span><i class="bi bi-arrow-right"></i></a>  -->
                </p>
              </div>
              <a href="leornard" class="astro-6SQSH2PF">
                <button class="card__button astro-6SQSH2PF"> Read more</button>
              </a>
            </div>
          </article>
        </div>

        <div class="col-lg-3 col-md-6 astro-6SQSH2PF" data-aos="fade-up" data-aos-delay="100">
          <article class="card-vm astro-6SQSH2PF">
            <img class="card__background astro-6SQSH2PF" src="assets/img/team/devotha.jpg" alt="Photo of Cartagena's cathedral at the background and some colonial style houses" width="1900" height="2100">
            <div class="card__content | flow astro-6SQSH2PF">
              <div class="card__content--container | flow astro-6SQSH2PF">
                <div class="card_content astro-6SQSH2PF">
                  <h2 class="card_title astro-6SQSH2PF">Director</h2>
                </div>
                <h2 class="card__title astro-6SQSH2PF">Devotha Minzi</h2>
                <p class="align astro-6SQSH2PF">
                  Mrs. Devotha Ntuke Minzi is a director of ADC Tanzania
                  Limited. Devotha possesses a Master’s Degree in Economics,
                  from....
                  <!-- <a href="rebecca" class="readmore stretched-link"><span>Read More</span><i class="bi bi-arrow-right"></i></a>  -->
                </p>
              </div>
              <a href="devotha" class="astro-6SQSH2PF">
                <button class="card__button astro-6SQSH2PF"> Read more</button>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="astro-6SQSH2PF">
      <div class="main astro-6SQSH2PF">
        <div class="section-header astro-6SQSH2PF">
          <h2 class="astro-6SQSH2PF">Management Team</h2>
        </div>
        <ul class="cards astro-6SQSH2PF">
          <li class="cards_item astro-6SQSH2PF">
            <div class="card astro-6SQSH2PF" tabindex="1">
              <div class="card_image astro-6SQSH2PF">
                <img src="assets/img/blog/eileen.jpg" alt="a Reuben sandwich on wax paper. " class="astro-6SQSH2PF">
              </div>
              <div class="card_content astro-6SQSH2PF">
                <h2 class="card_title astro-6SQSH2PF">EILEEN MWAKISESE</h2>
                <div class="card_text astro-6SQSH2PF">
                  <p class="upcharge astro-6SQSH2PF">USADF Program Manager</p>
                  <p class="astro-6SQSH2PF">
                    Eileen Asukile Mwakisese is the USADF Program Manager for
                    ADC Tanzania. She possesses a Master of Science in
                    Accounting and Finance(2019) from Mzumbe University, a
                    Bachelor of Economics and Finance (2014) from the Institute
                    of Accountancy Arusha (IAA) and a Diploma in French
                    language, DELF A1, Alliance Française Dar es Salaam (2011).
                    She is highly competent in using QuickBooks, KPI, Ms Office,
                    SPSS, Gisel,PPI and OCA.
                  </p>
                  <p class="astro-6SQSH2PF">
                    Eileen holds qualifications and experiences of 8 years in
                    Financial Management, Grants Management, Technology Fund
                    Management, and Commercial micro-lending. She possesses
                    extensive capability in Accounting for Projects, Project
                    Monitoring and Evaluation, Administration and managing
                    client relationships. Eileen has experience in working with
                    marginalized groups after working for years to improve the
                    livelihoods of the underserved communities in Tanzania. She
                    is fluent in English and Swahili, and basic French. She has
                    a passion for reading and travelling.
                  </p>
                  <!-- <span><a href="#"><i class="bi bi-linkedin"></i></a></span> -->
                  <a href="https://www.linkedin.com/in/eileen-m-510799a2/" class="readmore stretched-link astro-6SQSH2PF"><span class="astro-6SQSH2PF">View More</span>
                    <span class="icons astro-6SQSH2PF"><i class="bi bi-linkedin astro-6SQSH2PF"></i></span></a>
                </div>
              </div>
            </div>
          </li>
          <li class="cards_item astro-6SQSH2PF">
            <div class="card astro-6SQSH2PF" tabindex="2">
              <div class="card_image astro-6SQSH2PF">
                <img src="assets/img/blog/husna.jpg" alt="a Reuben sandwich on wax paper. " class="astro-6SQSH2PF">
              </div>
              <div class="card_content astro-6SQSH2PF">
                <h2 class="card_title astro-6SQSH2PF">HUSNA MKONY</h2>
                <div class="card_text astro-6SQSH2PF">
                  <p class="upcharge astro-6SQSH2PF">Finance officer</p>
                  <p class="astro-6SQSH2PF">
                    Husna Swalehe Mkony is ADC Tanzania Finance Officer. She
                    possesses a Bachelor degree in Accounting and Finance (2012)
                    from the Mzumbe University in Tanzania. She is a member of
                    National Board of Accountants and Auditors (NBAA), currently
                    pursuing her final CPA examinations. Husna is a high-end
                    user of a number of accounting software that include
                    QuickBooks, Tally ERP 9, MYOB, SAGE PASTEL. She has more
                    than seven years of work experience in accounting and
                    financial management functions. Husna is conversant with
                    Tanzanian life by living and working in various places in
                    the country and she is conversant in both Kiswahili and
                    English.
                  </p>
                  <a href="https://tz.linkedin.com/in/husna-swalehe-mkony-a03b7b94/" class="readmore stretched-link astro-6SQSH2PF"><span class="astro-6SQSH2PF">View More</span>
                    <span class="icons astro-6SQSH2PF"><i class="bi bi-linkedin astro-6SQSH2PF"></i></span></a>
                </div>
              </div>
            </div>
          </li>
          <li class="cards_item astro-6SQSH2PF">
            <div class="card astro-6SQSH2PF" tabindex="3">
              <div class="card_image astro-6SQSH2PF">
                <img src="assets/img/blog/adolph.jpg" alt="a Reuben sandwich on wax paper. " class="astro-6SQSH2PF">
              </div>
              <div class="card_content astro-6SQSH2PF">
                <h2 class="card_title astro-6SQSH2PF">ADOLPH SAKAWA</h2>
                <div class="card_text astro-6SQSH2PF">
                  <p class="upcharge astro-6SQSH2PF">Business Development Officer</p>
                  <p class="astro-6SQSH2PF">
                    Adolph is the Business Development Officer of ADC Tanzania,
                    He holds a BSc Agronomy from SUA and Postgrad Diploma in
                    Agriculture from Israel. On top of that he has a number of
                    courses under his belt namely Accessing Halal Markets,
                    Advocacy and Trade Reforms, Introduction to Resources
                    Efficiency and Circular Production and Introduction to
                    Corporate Social Responsibility. In addition to those he
                    also did courses on Developing Sustainable Business Models
                    for Business Support Organizations and Meeting Standards in
                    the Agriculture Food Sector.
                  </p>
                  <p class="astro-6SQSH2PF">
                    He also attended Project Risk Management from ESAMI
                    University and Strategic Management from Copenhagen Business
                    School.
                  </p>
                  <p class="astro-6SQSH2PF">
                    Adolph has a breadth of knowledge and expertise in
                    Agriculture related capacity building and sustainable
                    Agriculture. He has a deep understanding on the challenges
                    faced by SME’s particularly in the Agriculture sector. When
                    he’s not glued with SME’s, he enjoys anything outdoorsy and
                    active. He’s fluent in English and Swahili and elementary
                    Hebrew.
                  </p>
                  <a href="https://www.linkedin.com/in/adolph-sakawa-b489a1243/" class="readmore stretched-link astro-6SQSH2PF"><span class="astro-6SQSH2PF">View More</span>
                    <span class="icons astro-6SQSH2PF"><i class="bi bi-linkedin astro-6SQSH2PF"></i></span></a>
                </div>
              </div>
            </div>
          </li>
          <li class="cards_item astro-6SQSH2PF">
            <div class="card astro-6SQSH2PF" tabindex="4">
              <div class="card_image astro-6SQSH2PF">
                <img src="assets/img/blog/emilia.jpg" alt="a Reuben sandwich on wax paper. " class="astro-6SQSH2PF">
              </div>
              <div class="card_content astro-6SQSH2PF">
                <h2 class="card_title astro-6SQSH2PF">EMILIA MAGEHEMA</h2>
                <div class="card_text astro-6SQSH2PF">
                  <p class="upcharge astro-6SQSH2PF">Administration Officer</p>

                  <p class="astro-6SQSH2PF">
                    Emilia Magehema is an administrative officer at ADC Tanzania
                    and responsible for overseeing the United States African
                    Development Foundation (USADF) administrative operations of
                    the country program. She has a background in Economics,
                    Finance and Investment with extra skills of sales and
                    marketing. For 5 years now, Emilia has demonstrated
                    effective business communication, planning and projects
                    management especially in the areas of Agriculture.
                  </p>
                  <a href="https://www.linkedin.com/in/emilia-ernest-magehema-msc-finance-and-investment-b5292b180/" class="readmore stretched-link astro-6SQSH2PF"><span class="astro-6SQSH2PF">View More</span>
                    <span class="icons astro-6SQSH2PF"><i class="bi bi-linkedin astro-6SQSH2PF"></i></span></a>
                </div>
              </div>
            </div>
          </li>
          <li class="cards_item astro-6SQSH2PF">
            <div class="card astro-6SQSH2PF" tabindex="5">
              <div class="card_image astro-6SQSH2PF">
                <img src="assets/img/blog/albert.jpg" alt="a Reuben sandwich on wax paper. " class="astro-6SQSH2PF">
              </div>
              <div class="card_content astro-6SQSH2PF">
                <h2 class="card_title astro-6SQSH2PF">CYLIRUS ALBERT KAIJAGE</h2>
                <div class="card_text astro-6SQSH2PF">
                  <p class="upcharge astro-6SQSH2PF">Business Development Officer</p>
                  <p class="astro-6SQSH2PF">
                    Cylirus Albert Kaijage is the Business Development Officer
                    at ADC Tanzania. He possesses a Master of Science Data
                    Science (2022) from the University of Dar-es-Salaam, a
                    Bachelor of Science in Applied Statistics (2019) from Mzumbe
                    University. He is highly competent in Python Programming,
                    R-programming, STATA, SPSS, MS Office, CAPI, and Kobo
                    toolbox.
                  </p>
                  <p class="astro-6SQSH2PF">
                    Cylirus holds qualifications and experience of more than 2
                    years in Data analytics, Research, field works, Monitoring
                    and evaluation and project management. He possesses
                    extensive capability in building machine learning and
                    statistical learning models, substantial knowledge, and
                    expertise in agri-business value chains, Cylirus has
                    experience in working with various agriculture stakeholders
                    including banks. He is fluent in English, Swahili and
                    pre-liminary Latin. Apart from his career Cylirus is a
                    bibliophile, Organist, Sacred Music Composer, and loves to
                    travel.
                  </p>
                  <a href="https://www.linkedin.com/in/cylirus-albert-kaijage-199b75165/" class="readmore stretched-link astro-6SQSH2PF"><span class="astro-6SQSH2PF">View More</span>
                    <span class="icons astro-6SQSH2PF"><i class="bi bi-linkedin astro-6SQSH2PF"></i></span></a>
                </div>
              </div>
            </div>
          </li>
          <li class="cards_item astro-6SQSH2PF">
            <div class="card astro-6SQSH2PF" tabindex="6">
              <div class="card_image astro-6SQSH2PF">
                <img src="assets/img/blog/walter.jpg" alt="a Reuben sandwich on wax paper. " class="astro-6SQSH2PF">
              </div>
              <div class="card_content astro-6SQSH2PF">
                <h2 class="card_title astro-6SQSH2PF">WALTER PATRICK</h2>
                <div class="card_text astro-6SQSH2PF">
                  <p class="upcharge astro-6SQSH2PF">Business Development Officer.</p>
                  <p class="astro-6SQSH2PF">
                    Walter is a highly skilled and versatile professional with a
                    strong background in Information Technology and Business
                    Development. As a Business Development Officer at ADC
                    Tanzania, he plays a pivotal role in driving growth and
                    fostering strategic partnerships.
                  </p>
                  <p class="astro-6SQSH2PF">
                    With a passion for software development and system design,
                    Walter excels in creating innovative solutions to address
                    complex business challenges. His proficiency extends across
                    a wide range of programming languages, including Python,
                    HTML, JavaScript, Node.js, React.js, Next.js, Flutter, PHP,
                    and RESTful API development. He has an in-depth
                    understanding of front-end and back-end technologies,
                    allowing him to develop robust and scalable software
                    applications that meet the specific needs of his clients.
                  </p>
                  <p class="astro-6SQSH2PF">
                    Walter's technical expertise also extends to data analysis
                    and financial modeling. He possesses a strong command of
                    languages such as R and Python, enabling him to leverage
                    advanced statistical techniques and machine learning
                    algorithms for data-driven insights. His ability to extract
                    meaningful information from complex datasets has empowered
                    organizations to make informed decisions and optimize their
                    operations. In addition, he has hands-on experience with
                    tools like AppSheet, Ms power BI, Tableau which he has utilized to build
                    intuitive and user-friendly data visualization dashboards.
                  </p>
                  <a href="https://www.linkedin.com/in/walter-patrick-4599161b4" class="readmore stretched-link astro-6SQSH2PF"><span class="astro-6SQSH2PF">View More</span>
                    <span class="icons astro-6SQSH2PF"><i class="bi bi-linkedin astro-6SQSH2PF"></i></span></a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </main>
  
` })}`;
}, "C:/Users/Walter/Downloads/ADC-testing/src/pages/team.astro", void 0);

const $$file = "C:/Users/Walter/Downloads/ADC-testing/src/pages/team.astro";
const $$url = "/team";

export { $$Team as default, $$file as file, $$url as url };
