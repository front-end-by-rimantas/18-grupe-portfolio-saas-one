// header import

// about import
import { homeAboutData } from './data/homeAboutData.js';
import { renderHomeAbout } from './components/home-about/renderHomeAbout.js';

// features import
import {featureData} from './data/features.js';
import {renderFeature} from './components/feature/renderFeature.js';

// projects import

// faq import

// testimonials import

// our-team import

// address import
import { ourAddressData } from './data/ourAddressData.js'
import { renderAddress } from './components/address/renderAddress.js'
import { renderSingleAddress } from './components/address/renderSingleAddress.js'

// footer import

// background animations import


// header logic

// about logic
renderHomeAbout(homeAboutData);

// features logic
renderFeature(featureData);

// projects logic

// faq logic

// testimonials logic

// our-team logic

// address logic
renderSingleAddress(ourAddressData);
console.log(ourAddressData);
console.log(renderSingleAddress);
renderAddress()

// footer logic

// background animations logic