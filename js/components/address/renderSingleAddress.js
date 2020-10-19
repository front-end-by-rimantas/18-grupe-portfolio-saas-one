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
                    ${address.link1}
                    ${address.link2}
                    ${address.link3}
                    ${address.phone}
                    </div>
                </div>`;
    return HTML;
}
function renderSingleAddress1(address) {

}
function renderSingleAddress2(address) {

}
export { renderSingleAddress };