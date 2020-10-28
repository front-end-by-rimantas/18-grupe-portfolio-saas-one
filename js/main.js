// header import

// about import
import { homeAboutData } from './data/homeAboutData.js';
import { renderHomeAbout } from './components/home-about/renderHomeAbout.js';

// features import
import { featureData } from './data/features.js';
import { renderFeature } from './components/feature/renderFeature.js';

// projects import

// faq import
import { homeFAQ, faqFAQ, categories } from './data/faq.js';
import { renderFAQ } from './components/faq/renderFAQ.js';
// testimonials import

// our-team import
import { ourTeamData } from './data/ourTeamData.js';
import { renderOurTeam } from './components/ourTeam/renderOurTeam.js';

// address import
import { ourAddressData } from './data/ourAddressData.js'
import { renderAddress } from './components/address/renderAddress.js'

// footer import
import { renderFooter } from './components/footer/renderFooter.js';
import { footerData } from './data/footer.js'

// background animations import
import { renderBackToTop } from './components/back-to-top.js'

// header logic

// about logic
renderHomeAbout(homeAboutData);

// features logic
renderFeature(featureData);

// projects logic

// faq logic
renderFAQ(homeFAQ);
// testimonials logic

// our-team logic
renderOurTeam(ourTeamData);

// address logic
renderAddress(ourAddressData);

// footer logic
renderFooter(footerData);

// background animations logic
renderBackToTop();

// ----- perkelti:
//
// page - faq import:
import { renderMPfaq } from '../pages/faq/js/renderMPfaq.js';

// page - faq logic:
renderMPfaq(faqFAQ, categories);
