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
import { renderBackToTop } from './components/back-to-top.js';

// pricing import
import { renderPricing } from '../pages/pricing/renderPricing.js';
import { pricingData } from '../pages/pricing/pricing-data.js'

// header logic

// about logic
renderHomeAbout(homeAboutData);

// features logic
renderFeature(featureData);

// projects logic

// faq logic
renderFAQ(faqData);
// testimonials logic

// our-team logic
renderOurTeam(ourTeamData);

// address logic
renderAddress(ourAddressData);

// footer logic
renderFooter(footerData);

// background animations logic
renderBackToTop();

// pricing logic
renderPricing(pricingData);