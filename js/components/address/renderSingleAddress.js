import { isValidAddressHTML } from './isValidAddress.js'
import { isValidAddressHTML1 } from './isValidAddress.js'
import { isValidAddressHTML2 } from './isValidAddress.js'

function renderSingleAddress(address) {
    if (!isValidAddressHTML(address)) {
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
function renderSingleAddress1(address) {
    if (!isValidAddressHTML1(address)) {
        return '';
    }
    const HTML1 = `<div class="adrs-box-wrap">
                    <div class="adrs-box">
                        <div class="adrs-icons">${address.icon}</div>
                        <h5 class="adrs-box-titles">${address.title}</h5>
                        <a href="#" class="adrs-contacts">${address.email}</a>
                        <a href="#" class="adrs-contacts">${address.phone}</a>
                    </div>
                </div>`
    return HTML1
}
function renderSingleAddress2(address) {
    if (!isValidAddressHTML2(address)) {
        return '';
    }
    const HTML2 = `<div class="adrs-box-wrap">
                    <div class="adrs-box">
                        <div class="adrs-icons">${address.icon}</div>
                        <h5 class="adrs-box-titles">${address.title}</h5>
                        <p class="adrs-paragraphs">${address.text}</p>
                        <p class="adrs-social">
                            <a href="#">${address.facebook}</a>
                            <a href="#">${address.twitter}</a>
                            <a href="#">${address.linkedin}</a>
                        </p>
                    </div>
                </div>`
    return HTML2
}
export { renderSingleAddress };
export { renderSingleAddress1 };
export { renderSingleAddress2 };