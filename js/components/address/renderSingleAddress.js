import { isValidAddress } from './isValidAddress.js'

function renderSingleAddress(address) {
    if (!isValidAddress(address)) {
        return '';
    }
    const HTML = `<div class="adrs-box-wrap">
                <div class="adrs-box">
                    <div class="adrs-icons">${address.icon}</div>
                    <h5 class="adrs-box-titles">${address.title}</h5>
                    <p class="adrs-paragraphs">${address.text}</p>
                    </div>
                </div>`;
    return HTML;
}
export { renderSingleAddress };