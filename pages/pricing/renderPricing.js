import { generateSinglePricing } from './generateSinglePricing.js'

const allButtons = document.querySelectorAll('.choose');

for (let btn of allButtons) {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
    })
}

function renderPricing(data) {
    const pricingLenght = data.pricing.length;
    const pricingDOM = document.querySelectorAll(data.selector);

    for (let i = 0; i < pricingLenght; i++) {
        const priceBlock = data.pricing[i];
        pricingDOM[i].innerHTML = generateSinglePricing(priceBlock);
    }
}

export { renderPricing }