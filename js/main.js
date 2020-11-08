// header import
import { headerData } from './data/header.js';
import { HeaderNav } from './components/header/HeaderNav.js';
// about import
import { homeAboutData } from './data/homeAboutData.js';
import { renderHomeAbout } from './components/home-about/renderHomeAbout.js';

// features import
import { featureData } from './data/features.js';
import { renderFeature } from './components/feature/renderFeature.js';

// projects import
import { projectsData } from './data/projects.js'
import { Projects } from './components/projects/Projects.js'
// faq import
import { homeFAQ, faqFAQ, categories } from './data/faq.js';
import { renderFAQ } from './components/faq/renderFAQ.js';
// testimonials import
import { testimonialsData } from './data/testimonials.js';
import { renderTestimonial } from './components/testimonials/renderTestimonial.js';

// our-team import
import { ourTeamData } from './data/ourTeamData.js';
import { renderOurTeam } from './components/ourTeam/renderOurTeam.js';

// address import
import { ourAddressData } from './data/ourAddressData.js'
import { renderAddress } from './components/address/renderAddress.js'

// footer import
import { renderFooter } from './components/footer/renderFooter.js';
import { renderFooterSocial } from './components/footer/renderFooterSocial.js';
import { footerData } from './data/footer.js'

// background animations import
import { renderBackToTop } from './components/back-to-top.js'

// <--Multipages logic: start-->
// page - services logic

// page - about logic

// page - contact logic

// page - pricing logic

// page - case study logic

// page - our team logic

// page - testimonials logic

// page - faq logic
import { renderMPfaq } from '../pages/faq/js/renderMPfaq.js';
// page - terms of use logic

// page - 404  logic

// page - case study

// page - portfolio

// page - blog

// <--Multipages logic: end-->

// header logic
new HeaderNav(headerData);
// about logic
renderHomeAbout(homeAboutData);

// features logic
renderFeature(featureData);

// projects logic
new Projects(projectsData);
// faq logic
renderFAQ(homeFAQ);
// testimonials logic
renderTestimonial(testimonialsData);

// our-team logic
renderOurTeam(ourTeamData);

// address logic
renderAddress(ourAddressData);

// footer logic
renderFooter(footerData);
renderFooterSocial(footerData);

// background animations logic
renderBackToTop();

// <--Multipages logic: start-->
// page - services logic

// page - about logic

// page - contact logic

// page - pricing logic

// page - case study logic

// Ppage - our team logic

// page - testimonials logic

// page - faq logic
renderMPfaq(faqFAQ, categories);
    // page - terms of use logic

    // page - 404  logic

    // page - case study

    // page - portfolio

    // page - blog

// <--Multipages logic: end-->