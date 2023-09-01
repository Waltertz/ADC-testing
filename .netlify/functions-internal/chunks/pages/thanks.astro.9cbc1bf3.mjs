import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../astro.6bda4046.mjs';
import 'html-escaper';
import { $ as $$Layout } from './about.astro.50e30c6d.mjs';
/* empty css                            */import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';

const $$Astro = createAstro();
const $$Thanks = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Thanks;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Thanks", "showFooter": false, "class": "astro-PXT24RMX" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<main id="main" class="astro-PXT24RMX">
    <!-- ======= Breadcrumbs ======= -->
    <div class="breadcrumbs d-flex align-items-center astro-PXT24RMX" style="background-image: url('assets/img/hero-carousel/hero-carousel-3.jpg'); height: 100vh">
      <div class="container position-relative d-flex flex-column align-items-center astro-PXT24RMX" data-aos="fade">
        <h2 class="astro-PXT24RMX">Thank you for the message!</h2>
        <ol class="astro-PXT24RMX">
          <li class="astro-PXT24RMX"><a href="/" class="astro-PXT24RMX">Go back home</a></li>
          <li class="astro-PXT24RMX">Thanks</li>
        </ol>
      </div>
    </div><!-- End Breadcrumbs -->
    <!-- <div class="blue-bar"></div> -->
  </main>
` })}`;
}, "C:/Users/Walter/Downloads/ADC-testing/src/pages/thanks.astro", void 0);

const $$file = "C:/Users/Walter/Downloads/ADC-testing/src/pages/thanks.astro";
const $$url = "/thanks";

export { $$Thanks as default, $$file as file, $$url as url };
