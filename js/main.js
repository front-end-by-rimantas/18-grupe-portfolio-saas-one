// header import

// about import
import { homeAboutData } from './data/homeAboutData.js';
import { renderHomeAbout } from './components/home-about/renderHomeAbout.js';

// features import
import { featureData } from './data/features.js';
import { renderFeature } from './components/feature/renderFeature.js';

// projects import

// faq import
import { faqData } from './data/faq.js';
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

// background animations import


// header logic

// about logic
renderHomeAbout(homeAboutData);

// features logic
renderFeature(featureData);

// projects logic

// faq logic
renderFAQ(faqData);
// testimonials logic
renderTestimonial(testimonialsData);

// our-team logic
renderOurTeam(ourTeamData);

// address logic
renderAddress(ourAddressData);

// footer logic

// background animations logic
