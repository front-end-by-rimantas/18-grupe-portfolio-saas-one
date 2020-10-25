import { renderSingleAddress } from './renderSingleAddress.js'
import { renderSingleAddress1 } from './renderSingleAddress.js'
import { renderSingleAddress2 } from './renderSingleAddress.js'

function renderAddress(data) {
    let HTML = '';
    let HTML1 = '';
    let HTML2 = '';

    const addressDOM = document.querySelector(data.selector);
    const addressCount = data.address.length;
    if(!addressDOM){
        return;
    }
    for (let i = 0; i < addressCount; i++) {
        const address = data.address[i]
        if (i === 0) {
            HTML += renderSingleAddress(address);
        } else if (i === 1) {
            HTML1 += renderSingleAddress1(address);
        } else if (i === 2) {
            HTML2 += renderSingleAddress2(address);
        }
    }
    return addressDOM.innerHTML = HTML + HTML1 + HTML2;
}

export { renderAddress }