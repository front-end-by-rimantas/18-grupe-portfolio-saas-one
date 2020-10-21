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

// faq import
import { faqData } from './data/faq.js';
import { renderFAQ } from './components/faq/renderFAQ.js';
// testimonials import

// our-team import

// address import

// footer import

// background animations import


// header logic
new HeaderNav(headerData);
// about logic
renderHomeAbout(homeAboutData);

// features logic
renderFeature(featureData);

// projects logic

// faq logic
renderFAQ(faqData);
// testimonials logic

// our-team logic

// address logic

// footer logic

// background animations logic