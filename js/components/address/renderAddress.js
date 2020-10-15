import { renderSingleAddress } from './renderSingleAddress.js'

function renderAddress(data) {
    let HTML = '';
    const addressDOM = document.querySelector(data.selector)
    const addressCount = data.address.length;

    for (let i = 0; i < addressCount; i++) {
        const address = data.address[i];
        HTML += renderSingleAddress(address);
    }
    return addressDOM.innerHTML = HTML;
}

export { renderAddress }