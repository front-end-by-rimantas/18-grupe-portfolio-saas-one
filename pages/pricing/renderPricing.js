import { generateSinglePricing } from './generateSinglePricing.js'

function renderPricing(data) {


    const pricingLenght = data.pricing.length;
    const pricingDOM = document.querySelectorAll(data.selector);

    for (let i = 0; i < pricingLenght; i++) {
        const priceBlock = data.pricing[i];
        pricingDOM[i].innerHTML = generateSinglePricing(priceBlock);
    }
    console.log(pricingDOM[0]);
}
export { renderPricing }