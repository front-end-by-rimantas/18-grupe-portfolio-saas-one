import { renderSingleAddress } from './renderSingleAddress.js'
import { renderSingleAddress1 } from './renderSingleAddress.js'
import { renderSingleAddress2 } from './renderSingleAddress.js'

function renderAddress(data) {
    let HTML = '';
    let HTML1 = '';
    let HTML2 = '';
    let finalHTML = '';

    const addressDOM = document.querySelector(data.selector);
    const addressCount = data.address.length;

    for (let i = 0; i < addressCount; i++) {
        var address = data.address[i]
        if (address = 0) {
            HTML += renderSingleAddress(address);
        } else if (address = 1) {
            HTML1 += renderSingleAddress1(address);
        } else if (address = 2) {
            HTML2 += renderSingleAddress2(address);
        }
        finalHTML = HTML + HTML1 + HTML2;
    }
    return addressDOM.innerHTML = finalHTML;
}

export { renderAddress }