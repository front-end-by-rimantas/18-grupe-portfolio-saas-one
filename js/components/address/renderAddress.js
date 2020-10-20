import { renderSingleAddress } from './renderSingleAddress.js'
import { renderSingleAddress1 } from './renderSingleAddress.js'
import { renderSingleAddress2 } from './renderSingleAddress.js'

function renderAddress(data) {
    let HTML = '';
    let HTML1 = '';
    let HTML2 = '';

    const addressDOM = document.querySelector(data.selector);
    const addressCount = data.address.length;
    
    console.log(data.address);
    if (data) {

    }
    HTML += renderSingleAddress(address);
    HTML1 += renderSingleAddress1(address);
    HTML2 += renderSingleAddress2(address);
    // for (let i = 0; i < addressCount; i++) {
    //     var address = data.address[i];
    //     if (i = 0) {
    //         HTML += renderSingleAddress(address);
    //     } else if (i = 1) {
    //         HTML1 += renderSingleAddress1(address);
    //     } else if (i = 2) {
    //         HTML2 += renderSingleAddress2(address);
    //     }
    // }
    console.log(HTML);
    console.log(HTML1);
    console.log(HTML2);
    return addressDOM.innerHTML = HTML + HTML1 + HTML2;
}

export { renderAddress }