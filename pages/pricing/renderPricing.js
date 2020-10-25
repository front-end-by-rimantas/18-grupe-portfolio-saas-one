import { generateSinglePricing } from './generateSinglePricing.js'

function renderPricing(data) {

    let HTML = "";
    const pricingLenght = data.pricing.lenght;
    const pricingDOM = document.querySelector(data.selector);

    for (let i = 0; i < pricingLenght; i++) {
        const priceBlock = data.pricing[i];
        HTML += generateSinglePricing(priceBlock);
    }

    return pricingDOM.innerHTML = HTML;

}
export { renderPricing }